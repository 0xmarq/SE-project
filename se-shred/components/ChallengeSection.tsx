import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";

const challenges = [
  {
    id: 1,
    title: "FULL BODY CHALLENGE",
    description:
      "Start your body-toning journey to target all muscle groups and build your dream body in 4 weeks!",
    color: "#2563EB", 
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", 
  },
  {
    id: 2,
    title: "CALORIE PLAN",
    description:
      "Take on this challenge to control your calorie intake and boost muscle gains.",
    color: "#9333EA", 
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
  },
];

export default function ChallengeSection() {
  return (
    <View style={{ marginTop: 24, paddingBottom: 25}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginHorizontal: 20,
          marginBottom: 12,
        }}
      >
        Challenge 
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 14,
        }}
      >
        {challenges.map((item) => (
          <ImageBackground
            key={item.id}
            source={{ uri: item.image }}
            imageStyle={{ borderRadius: 16 }}
            style={{
              width: 240,
              height: 200,
              borderRadius: 16,
              backgroundColor: item.color,
              padding: 16,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "white", fontWeight: "700", fontSize: 14 }}>
                28 DAYS
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: 18,
                  marginTop: 4,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  marginTop: 6,
                  lineHeight: 16,
                }}
              >
                {item.description}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                alignSelf: "flex-start",
                borderRadius: 20,
                paddingVertical: 6,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{ color: item.color, fontWeight: "700", fontSize: 14 }}
              >
                START
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
}