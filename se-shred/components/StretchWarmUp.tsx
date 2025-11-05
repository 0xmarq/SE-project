import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const stretches = [
  {
    id: 1,
    title: "Lower Body Stretching 7 Min",
    image: "https://images.pexels.com/photos/302679/pexels-photo-302679.jpeg?auto=compress&cs=tinysrgb&w=800&h=120&fit=crop",
  },
  {
    id: 2,
    title: "Lower Back Pain Relief",
    image: "https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg?auto=compress&cs=tinysrgb&w=800&h=120&fit=crop",
  },
  {
    id: 3,
    title: "Morning Flex Routine",
    image: "https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=800&h=120&fit=crop",
  },
  {
    id: 4,
    title: "Full Body Warm-Up",
    image: "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800&h=120&fit=crop",
  },
];

export default function StretchWarmUp() {
  return (
    <View style={{ marginTop: 30 }}>
      {/* Section header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Stretch & Warm-Up</Text>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#1E90FF", fontWeight: "600" }}>More</Text>
          <Ionicons name="chevron-forward" size={16} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      {/* Horizontal cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 14,
        }}
      >
        {stretches.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              width: 200,
              height: 120,
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 1,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="cover"
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 10,
                backgroundColor: "rgba(0,0,0,0.35)",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: 14,
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}