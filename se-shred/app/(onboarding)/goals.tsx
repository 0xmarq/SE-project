import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function GoalsScreen() {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const goals = [
    { key: "Lose Weight" },
    { key: "Build" },
    { key: "Keep Fit" },
  ];

  const handleNext = async () => {
    if (!selected) return;
    await AsyncStorage.setItem("goal", selected);
    router.push("/(onboarding)/bodyinfo");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 60 }}>What are your main goals?</Text>

      <View style={{ marginTop: 30 }}>
        {goals.map((g) => (
          <TouchableOpacity
            key={g.key}
            onPress={() => setSelected(g.key)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: selected === g.key ? "#007AFF" : "#DDD",
              borderRadius: 12,
              padding: 10,
              marginBottom: 15,
              backgroundColor: selected === g.key ? "#E6F0FF" : "white",
            }}
          >
            <Image style={{ width: 80, height: 80, borderRadius: 10 }} />
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: "600" }}>{g.key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={handleNext}
        style={{
          backgroundColor: selected ? "#007AFF" : "#CCC",
          borderRadius: 30,
          paddingVertical: 15,
          position: "absolute",
          bottom: 40,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 18 }}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}
