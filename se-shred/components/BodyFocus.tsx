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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    },
    {
      id: 2,
      title: "Abs Intermediate",
      time: "29 mins",
      exercises: 21,
      difficulty: 2,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    },
    {
      id: 3,
      title: "Abs Advanced",
      time: "36 mins",
      exercises: 21,
      difficulty: 3,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    },
  ],
  Arm: [
    {
      id: 4,
      title: "Arm Beginner",
      time: "18 mins",
      exercises: 14,
      difficulty: 1,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80",
    },
    {
      id: 5,
      title: "Arm Intermediate",
      time: "25 mins",
      exercises: 18,
      difficulty: 2,
      image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400&q=80",
    },
    {
      id: 6,
      title: "Arm Advanced",
      time: "32 mins",
      exercises: 22,
      difficulty: 3,
      image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=400&q=80",
    },
  ],
  Chest: [
    {
      id: 7,
      title: "Chest Beginner",
      time: "22 mins",
      exercises: 15,
      difficulty: 1,
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
    },
    {
      id: 8,
      title: "Chest Intermediate",
      time: "28 mins",
      exercises: 19,
      difficulty: 2,
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&q=80",
    },
    {
      id: 9,
      title: "Chest Advanced",
      time: "35 mins",
      exercises: 24,
      difficulty: 3,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
    },
  ],
  Leg: [
    {
      id: 10,
      title: "Leg Beginner",
      time: "24 mins",
      exercises: 16,
      difficulty: 1,
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=400&q=80",
    },
    {
      id: 11,
      title: "Leg Intermediate",
      time: "30 mins",
      exercises: 20,
      difficulty: 2,
      image: "https://images.unsplash.com/photo-1566241477600-ac026ad43874?w=400&q=80",
    },
    {
      id: 12,
      title: "Leg Advanced",
      time: "38 mins",
      exercises: 25,
      difficulty: 3,
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=400&q=80",
    },
  ],
  Shoulder: [
    {
      id: 13,
      title: "Shoulder Beginner",
      time: "19 mins",
      exercises: 13,
      difficulty: 1,
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
    },
    {
      id: 14,
      title: "Shoulder Intermediate",
      time: "26 mins",
      exercises: 17,
      difficulty: 2,
      image: "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=400&q=80",
    },
    {
      id: 15,
      title: "Shoulder Advanced",
      time: "33 mins",
      exercises: 21,
      difficulty: 3,
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&q=80",
    },
  ],
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