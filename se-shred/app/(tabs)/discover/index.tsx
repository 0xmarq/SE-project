import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";  // 👈 import your firebase setup

export default function DiscoverScreen() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "workouts"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setWorkouts(data);
      } catch (err) {
        console.error("🔥 Error fetching workouts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>Discover</Text>
      {workouts.map((w) => (
        <TouchableOpacity key={w.id} onPress={() => router.push(`/discover/${w.id}`)}>
          <Image
            source={{ uri: w.image_url || "https://via.placeholder.com/400x200" }}
            style={{ width: "100%", height: 200, borderRadius: 12 }}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{w.name}</Text>
            <Text style={{ color: "gray" }}>{w.description}</Text>
            <Text style={{ color: "#888" }}>Muscle: {w.muscle_group}</Text>
            <Text style={{ color: "#888" }}>Equipment: {w.equipment}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
