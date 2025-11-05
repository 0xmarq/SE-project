import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function BodyInfo() {
  const router = useRouter();
  const [unit, setUnit] = useState("lbs");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [weight, setWeight] = useState(165);
  const [height, setHeight] = useState({ ft: 5, inch: 9 });

  const handleSubmit = async () => {
    const userData = {
      weight: `${weight} ${unit}`,
      height: `${height.ft}ft ${height.inch}in`,
    };
    await AsyncStorage.setItem("bodyInfo", JSON.stringify(userData));
    await AsyncStorage.setItem("onboardingCompleted", "true");
    router.replace("/(auth)/login"); 
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Let us know you better
      </Text>
      <Text
        style={{
          color: "gray",
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Let us know you better to help boost your workout results
      </Text>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>Weight</Text>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 40, color: "#007AFF", fontWeight: "bold" }}>{weight.toFixed(1)}</Text>
        <Text style={{ fontSize: 16, marginLeft: 5 }}>{unit}</Text>
      </View>

      {/* Unit Toggle */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 40 }}>
        <TouchableOpacity onPress={() => setUnit("kg")} style={{
          backgroundColor: unit === "kg" ? "#007AFF" : "#EAEAEA",
          paddingHorizontal: 25, paddingVertical: 8, borderRadius: 20, marginHorizontal: 5
        }}>
          <Text style={{ color: unit === "kg" ? "white" : "black" }}>kg</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit("lbs")} style={{
          backgroundColor: unit === "lbs" ? "#007AFF" : "#EAEAEA",
          paddingHorizontal: 25, paddingVertical: 8, borderRadius: 20, marginHorizontal: 5
        }}>
          <Text style={{ color: unit === "lbs" ? "white" : "black" }}>lbs</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>Height</Text>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 40, color: "#007AFF", fontWeight: "bold" }}>{height.ft}</Text>
        <Text style={{ fontSize: 16, marginHorizontal: 3 }}>ft</Text>
        <Text style={{ fontSize: 40, color: "#007AFF", fontWeight: "bold" }}>{height.inch}</Text>
        <Text style={{ fontSize: 16, marginHorizontal: 3 }}>in</Text>
      </View>

      {/* Unit Toggle */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 60 }}>
        <TouchableOpacity onPress={() => setHeightUnit("cm")} style={{
          backgroundColor: heightUnit === "cm" ? "#007AFF" : "#EAEAEA",
          paddingHorizontal: 25, paddingVertical: 8, borderRadius: 20, marginHorizontal: 5
        }}>
          <Text style={{ color: heightUnit === "cm" ? "white" : "black" }}>cm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setHeightUnit("ft")} style={{
          backgroundColor: heightUnit === "ft" ? "#007AFF" : "#EAEAEA",
          paddingHorizontal: 25, paddingVertical: 8, borderRadius: 20, marginHorizontal: 5
        }}>
          <Text style={{ color: heightUnit === "ft" ? "white" : "black" }}>ft</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: "#007AFF",
          borderRadius: 30,
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          GET MY PLAN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
