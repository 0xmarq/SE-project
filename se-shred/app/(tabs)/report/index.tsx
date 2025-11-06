// app/(tabs)/report/index.tsx
import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const isWeb = Platform.OS === 'web';


export default function ReportPage() {
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
  container: { flex: 1 },
  scrollContent: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 40, // Only bottom padding
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#111827' },
  textDark: { color: '#F3F4F6' },
  textMuted: { color: '#9CA3AF' },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    width: isWeb ? '30%' : '31%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDark: { backgroundColor: '#1F2937' },
  statLabel: { fontSize: 14, color: '#6B7280', marginBottom: 4 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#10B981' },
  statGoal: { fontSize: 12, color: '#9CA3AF', marginBottom: 8 },
  progressBg: { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3 },
  progressFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 3 },

  section: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 28,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  day: { width: 40, fontSize: 14, fontWeight: '600', color: '#374151' },
  barBg: { flex: 1, height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, marginLeft: 12 },
  barFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 4 },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginBottom: 12 },
  summaryContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  summaryEmoji: { fontSize: 24, marginRight: 12 },
  summaryText: { fontSize: 16, color: '#374151', lineHeight: 22, flex: 1 },
  });

