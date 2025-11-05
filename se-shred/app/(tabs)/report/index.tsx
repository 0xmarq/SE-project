import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";

export default function App() {
  const stats = [
    { label: "Workouts", value: 42, goal: 60 },
    { label: "Calories", value: 12340, goal: 15000 },
    { label: "Steps", value: 7850, goal: 10000 },
  ];

  const progressData = [
    { day: "Mon", progress: 0.8 },
    { day: "Tue", progress: 0.4 },
    { day: "Wed", progress: 0.6 },
    { day: "Thu", progress: 0.9 },
    { day: "Fri", progress: 0.7 },
    { day: "Sat", progress: 0.5 },
    { day: "Sun", progress: 0.3 },
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Your Weekly Report 🏋️</Text>

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        {stats.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
            <Text style={styles.cardGoal}>Goal: {item.goal}</Text>
          </View>
        ))}
      </View>

      {/* Progress Section */}
      <Text style={styles.sectionTitle}>Workout Consistency</Text>
      {progressData.map((p, index) => (
        <View key={index} style={styles.barRow}>
          <Text style={styles.dayText}>{p.day}</Text>
          <View style={styles.barBackground}>
            <View style={[styles.barFill, { width: `${p.progress * 100}%` }]} />
          </View>
        </View>
      ))}

      {/* Notes */}
      <View style={styles.notesContainer}>
        <Text style={styles.sectionTitle}>Performance Summary</Text>
        <Text style={styles.noteText}>
          💪 Great week! You hit most of your targets. Keep pushing and stay
          consistent.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 20,
    textAlign: "center",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  card: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  cardLabel: {
    fontSize: 16,
    color: "#333",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 5,
  },
  cardGoal: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    marginBottom: 10,
    marginTop: 10,
  },
  barRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dayText: {
    width: 40,
    fontSize: 14,
    color: "#333",
  },
  barBackground: {
    flex: 1,
    height: 12,
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  barFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 6,
  },
  notesContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    marginTop: 20,
    marginBottom: 40,
  },
  noteText: {
    color: "#444",
    fontSize: 15,
    lineHeight: 22,
  },
});
