import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";

const workoutData = {
  abs: {
    title: "Only 4 Moves for Abs",
    desc: "A 15-min core routine to burn belly fat and tone your midsection.",

  },
  "belly-fat": {
    title: "Belly Fat Burner HIIT Beginner",
    desc: "A low-impact, beginner-friendly fat burning workout.",
  },
  "no-jump": {
    title: "Lose Fat (No Jumping!)",
    desc: "Perfect for apartments. No noise, all results.",
  },
};

export default function WorkoutDetail() {
  const { id } = useLocalSearchParams();
  const workout = workoutData[id as keyof typeof workoutData];

  if (!workout) return <Text>Workout not found</Text>;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Image  style={{ width: "100%", height: 250, borderRadius: 16, marginBottom: 20 }} /> // Should add Source here.. image needed
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>{workout.title}</Text>
      <Text style={{ color: "gray", marginTop: 10 }}>{workout.desc}</Text>

      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 8 }}>Workout Steps:</Text>
        <Text>1. Crunches - 3 sets of 15</Text>
        <Text>2. Leg Raises - 3 sets of 12</Text>
        <Text>3. Plank - 3 sets of 45s</Text>
        <Text>4. Mountain Climbers - 3 sets of 30s</Text>
      </View>
    </ScrollView>
  );
}
