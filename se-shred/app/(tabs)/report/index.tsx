// app/(tabs)/report/index.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const isWeb = Platform.OS === 'web';

export default function WeeklyReport() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const stats = [
    { label: 'Workout', value: 42, goal: 60 },
    { label: 'Calories', value: 12340, goal: 15000 },
    { label: 'Steps', value: 7850, goal: 10000 },
  ];

  const consistency = [
    { day: 'Mon', progress: 90 },
    { day: 'Tue', progress: 60 },
    { day: 'Wed', progress: 70 },
    { day: 'Thu', progress: 95 },
    { day: 'Fri', progress: 75 },
    { day: 'Sat', progress: 50 },
    { day: 'Sun', progress: 30 },
  ];

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <LinearGradient
        colors={isDark ? ['#111827', '#1F2937'] : ['#F9FAFB', '#FFFFFF']}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, isDark && styles.textDark]}>
              Your Weekly Report
            </Text>
            <Ionicons name="barbell" size={28} color="#F59E0B" />
          </View>

          {/* Stats Cards */}
          <View style={styles.statsGrid}>
            {stats.map((stat, i) => (
              <View key={i} style={[styles.statCard, isDark && styles.cardDark]}>
                <Text style={[styles.statLabel, isDark && styles.textMuted]}>
                  {stat.label}
                </Text>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={[styles.statGoal, isDark && styles.textMuted]}>
                  Goal: {stat.goal}
                </Text>
                <View style={styles.progressBg}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${(stat.value / stat.goal) * 100}%` },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>

          {/* Consistency */}
          <View style={[styles.section, isDark && styles.cardDark]}>
            <Text style={[styles.sectionTitle, isDark && styles.textDark]}>
              Workout Consistency
            </Text>
            {consistency.map((item, i) => (
              <View key={i} style={styles.row}>
                <Text style={[styles.day, isDark && styles.textDark]}>
                  {item.day}
                </Text>
                <View style={styles.barBg}>
                  <View
                    style={[
                      styles.barFill,
                      { width: `${item.progress}%` },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>

          {/* Summary */}
          <View style={[styles.summaryCard, isDark && styles.cardDark]}>
            <Text style={[styles.summaryTitle, isDark && styles.textDark]}>
              Performance Summary
            </Text>
            <View style={styles.summaryContent}>
              <Text style={styles.summaryEmoji}>Fire</Text>
              <Text style={[styles.summaryText, isDark && styles.textDark]}>
                Great week! You hit most of your targets. Keep pushing and stay consistent.
              </Text>
            </View>
          </View>

          {/* Bottom padding */}
          <View style={{ height: 40 }} />
        </ScrollView>
      </LinearGradient>
    </>
  );
}

// FINAL STYLES — NO BOTTOM NAV
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