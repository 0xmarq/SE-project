import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function Missing() {
  return (
    <View
      style={{
        backgroundColor: "#F5F7FA",
        marginHorizontal: 20,
        marginTop: 30,
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
      }}
    >
      {/* Left section: text */}
      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: "700", fontSize: 15, color: "#222" }}>
          Didn’t find what you were looking for?
        </Text>
        <Text style={{ color: "#666", fontSize: 13, marginTop: 4 }}>
          Try creating your own workout plan.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#2563EB",
          paddingVertical: 8,
          paddingHorizontal: 14,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="add-circle-outline"
          size={18}
          color="white"
          style={{ marginRight: 4 }}
        />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 13 }}>
          Drop your suggestions
        </Text>
      </TouchableOpacity>
    </View>
  );
}
