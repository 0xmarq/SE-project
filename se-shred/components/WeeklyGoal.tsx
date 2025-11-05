import { View, Text, Image } from "react-native";

export default function WeeklyGoal() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      {/* Header Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Weekly Goal</Text>
        <Text style={{ fontWeight: "600", color: "#1E90FF" }}>0/4</Text>
      </View>

      {/* Days Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {[2, 3, 4, 5, 6, 7, 8].map((day, index) => (
          <View
            key={index}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: day === 4 ? "#E6F0FF" : "transparent",
              borderWidth: day === 4 ? 2 : 0,
              borderColor: "#1E90FF",
            }}
          >
            <Text style={{ color: day === 4 ? "#1E90FF" : "#444" }}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Welcome card */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
          borderRadius: 12,
          padding: 10,
        }}
      >
        <Image
          source={{
            uri: "https://i.imgur.com/0y8Ftya.png", // placeholder avatar
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <Text style={{ flex: 1, color: "#333", fontWeight: "500" }}>
          Welcome back! Today’s your chance to shine.
        </Text>
      </View>
    </View>
  );
}
