import { supabase } from "@/lib/supabaseClient"; // 👈 your Supabase client
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function DiscoverScreen() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        // 👇 Fetch everything from 'workouts' table
        const { data, error } = await supabase
          .from("workouts")
          .select("*") // or specify columns like "id, name, description, muscle_group, equipment, image_url"
          .order("id", { ascending: true });

        if (error) throw error;
        setWorkouts(data ?? []);
      } catch (err) {
        console.error("🔥 Error fetching workouts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>Discover</Text>
      {workouts.map((w) => (
        <TouchableOpacity
          key={w.id}
          onPress={() => router.push(`/discover/${w.id}`)}
          style={{ marginBottom: 24 }}
        >
          <Image
            source={{ uri: w.image_url || "https://via.placeholder.com/400x200" }}
            style={{ width: "100%", height: 200, borderRadius: 12 }}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{w.name}</Text>
            <Text style={{ color: "gray", marginVertical: 4 }}>{w.description}</Text>
            <Text style={{ color: "#888" }}>Muscle: {w.muscle_group}</Text>
            <Text style={{ color: "#888" }}>Equipment: {w.equipment}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
