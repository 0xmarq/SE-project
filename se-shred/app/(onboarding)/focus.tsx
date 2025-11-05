import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function FocusScreen() {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const areas = ["Full Body", "Arm", "Chest", "Abs", "Leg"];

  const handleNext = async () => {
    if (!selected) return;
    await AsyncStorage.setItem("focus", selected);
    router.push("/(onboarding)/goals");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 60 }}>Please choose your focus area</Text>
      <View style={{ marginTop: 30 }}>
        {areas.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelected(item)}
            style={{
              borderWidth: 1,
              borderColor: selected === item ? "#007AFF" : "#DDD",
              paddingVertical: 15,
              borderRadius: 10,
              marginBottom: 10,
              alignItems: "center",
              backgroundColor: selected === item ? "#E6F0FF" : "white",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{item}</Text>
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
