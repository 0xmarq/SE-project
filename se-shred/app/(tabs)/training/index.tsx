import { ScrollView, Text, View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WeeklyGoal from "../../../components/WeeklyGoal";
import ChallengeSection from "../../../components/ChallengeSection";

import BodyFocus from "../../../components/BodyFocus";
import JustForYou from "../../../components/JustForYou";
import Missing from "../../../components/Missing";
import StretchWarmUp from "@/components/StretchWarmUp";


type SearchhProps = {
  placeholder: string;
};

export function Searchh({ placeholder }: SearchhProps) {
  return (
     <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          borderRadius: 14,
          paddingHorizontal: 12,
          height: 48,
        }}
      >
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder= {placeholder}
          style={{
            flex: 1,
            fontSize: 16,
          }}
        />
      </View>
  );
}

export function GlobalHeader() {
  return (
    <View
      style={{
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 16 }}>
        Shred
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          borderRadius: 14,
          paddingHorizontal: 12,
          height: 48,
        }}
      >
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search workouts, plans..."
          style={{
            flex: 1,
            fontSize: 16,
          }}
        />
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }} >
      <GlobalHeader />
      <WeeklyGoal />
      <ChallengeSection />
      <BodyFocus />
      <JustForYou />
      <StretchWarmUp />
      <Missing />
    </ScrollView>
  );
}
