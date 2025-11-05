import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const workouts = [
  {
    id: 1,
    title: "Last Longer in Bed",
    time: "12 min",
    level: "Intermediate",
    image: "https://i.imgur.com/9wZLkBt.jpeg",
  },
  {
    id: 2,
    title: "Back Stretching 7 Min",
    time: "7 min",
    level: "Beginner",
    image: "https://i.imgur.com/zxEXxZR.jpeg",
  },
  {
    id: 3,
    title: "Morning Yoga Flow",
    time: "10 min",
    level: "Beginner",
    image: "https://i.imgur.com/N2g9zQL.jpeg",
  },
  {
    id: 4,
    title: "Core Stability Boost",
    time: "14 min",
    level: "Intermediate",
    image: "https://i.imgur.com/A9R4kYc.jpeg",
  },
];

export default function JustForYou() {
  return (
    <View style={{ marginTop: 30, marginBottom: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Just For You</Text>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#1E90FF", fontWeight: "600" }}>More</Text>
          <Ionicons name="chevron-forward" size={16} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 14,
          width: "auto",
        }}
      >
        {workouts.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              width: 160,
              backgroundColor: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 1,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 100 }}
            />
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "#222",
                  marginBottom: 2,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ color: "#666", fontSize: 12 }}>
                {item.time} • {item.level}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
