import React, { useEffect, useState } from "react";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { View, ActivityIndicator, Alert } from "react-native";

type Place = {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
};

export default function MapComponent() {
  const [region, setRegion] = useState<any>(null);
  const [gyms, setGyms] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission denied", "Please enable location access.");
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = loc.coords;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });

        const radius = 5000; 
        const url = `https://nominatim.openstreetmap.org/search.php?q=gym&format=json&limit=15&bounded=1&viewbox=${longitude - 0.05},${latitude + 0.05},${longitude + 0.05},${latitude - 0.05}`;
        const res = await fetch(url, {
          headers: { "User-Agent": "YourAppName/1.0" },
        });
        const data = await res.json();
        setGyms(data);
      } catch (err) {
        console.error("Error fetching gyms:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !region) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <MapView
      style={{ width: "100%", height: 300, borderRadius: 12 }}
      region={region}
      showsUserLocation
    >
        
      <UrlTile
        urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
        flipY={false}
      />

      {gyms.map((gym) => (
        <Marker
          key={gym.place_id}
          coordinate={{
            latitude: parseFloat(gym.lat),
            longitude: parseFloat(gym.lon),
          }}
          title={gym.display_name}
        />
      ))}
    </MapView>
  );
}
