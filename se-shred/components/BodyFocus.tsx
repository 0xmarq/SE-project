import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Exercise {
  id: number;
  title: string;
  time: string;
  exercises: number;
  difficulty: number;
  image: string;
}

const tabs = ["Abs", "Arm", "Chest", "Leg", "Shoulder"] as const;
type Tab = typeof tabs[number];

const exercises: Record<Tab, Exercise[]> = {
  Abs: [
    {
      id: 1,
      title: "Abs Beginner",
      time: "20 mins",
      exercises: 16,
      difficulty: 1,
      image: "https://i.imgur.com/NTXQ6Fx.jpeg",
    },
    {
      id: 2,
      title: "Abs Intermediate",
      time: "29 mins",
      exercises: 21,
      difficulty: 2,
      image: "https://i.imgur.com/LZVqC48.jpeg",
    },
    {
      id: 3,
      title: "Abs Advanced",
      time: "36 mins",
      exercises: 21,
      difficulty: 3,
      image: "https://i.imgur.com/hH5xZ4U.jpeg",
    },
  ],
  Arm: [],
  Chest: [],
  Leg: [],
  Shoulder: [],
};

export default function BodyFocus() {
  const [selected, setSelected] = useState<Tab>("Abs");

  return (
    <View style={{ marginTop: 30, marginBottom: 30}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginHorizontal: 20,
          marginBottom: 12,
        }}
      >
        Body Focus
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
      >
        {tabs.map((tab) => {
          const active = selected === tab;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelected(tab)}
              style={{
                backgroundColor: active ? "#E6F0FF" : "#f2f2f2",
                borderColor: active ? "#1E90FF" : "transparent",
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  color: active ? "#1E90FF" : "#333",
                  fontWeight: active ? "700" : "500",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 14 }}>
        {exercises[selected].map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              padding: 10,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
              elevation: 1,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
                marginRight: 12,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                {item.title}
              </Text>
              <Text style={{ color: "#666", marginTop: 2 }}>
                {item.time} • {item.exercises} Exercises
              </Text>
              <View style={{ flexDirection: "row", marginTop: 4 }}>
                {Array(item.difficulty)
                  .fill(null)
                  .map((_, i) => (
                    <Ionicons
                      key={i}
                      name="flash"
                      size={14}
                      color="#1E90FF"
                      style={{ marginRight: 2 }}
                    />
                  ))}
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
          Create Your Custom Workout
        </Text>
        <View
          style={{
            backgroundColor: "#2563EB",
            borderRadius: 16,
            padding: 20,
            height: 160,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "800",
            }}
          >
            CREATE YOUR OWN
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              alignSelf: "flex-start",
              borderRadius: 20,
              paddingVertical: 6,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: "#2563EB", fontWeight: "700" }}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
