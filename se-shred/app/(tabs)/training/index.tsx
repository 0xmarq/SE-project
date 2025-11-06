import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
import ChallengeSection from "../../../components/ChallengeSection";
import WeeklyGoal from "../../../components/WeeklyGoal";

import StretchWarmUp from "@/components/StretchWarmUp";
import { useState } from 'react';
import {
  ActivityIndicator
} from 'react-native';
import BodyFocus from "../../../components/BodyFocus";
import CustomPlanCard from '../../../components/CustomPlanCard';
import JustForYou from "../../../components/JustForYou";
import Missing from "../../../components/Missing";

type SearchhProps = {
  placeholder: string;
};
export function Searchh({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSearch(text: string) {
    setQuery(text)
    setError(null)
    setResults(null)

    if (text.length < 3) return 

    setLoading(true)
    try {
      const res = await fetch('https://your-api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text }),
      })
      const data = await res.json()
      setResults(data.results || 'No exercises found.')
    } catch (err) {
      console.error('Search failed:', err)
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ marginHorizontal: 16, marginTop: 8 }}>
      {/* Search bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          borderRadius: 14,
          paddingHorizontal: 12,
          height: 48,
        }}
      >
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder={placeholder}
          value={query}
          onChangeText={handleSearch}
          style={{ flex: 1, fontSize: 16 }}
        />
        {loading && <ActivityIndicator size="small" color="#2563eb" />}
      </View>

      {/* Results */}
      {error ? (
        <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>
      ) : results ? (
        <ScrollView
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 10,
            padding: 12,
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <Text style={{ color: '#111827', fontSize: 15, lineHeight: 22 }}>
            {results}
          </Text>
        </ScrollView>
      ) : null}
    </View>
  )
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
      <CustomPlanCard />
      <WeeklyGoal />
      <ChallengeSection />
      <BodyFocus />
      <JustForYou />
      <StretchWarmUp />
      <Missing />
    </ScrollView>
  );
}
