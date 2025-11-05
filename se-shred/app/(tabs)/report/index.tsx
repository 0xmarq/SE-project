import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  const markedDates = {
    '2025-11-05': { selected: true, marked: true, selectedColor: '#007AFF' },
  };

  const weightData = {
    labels: [],
    datasets: [
      {
        data: [0],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        

        {/* Title */}
        <Text style={styles.title}>REPORT</Text>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="flame" size={28} color="#8E8E93" />
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Workout</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="flame-outline" size={28} color="#FF3B30" />
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Kcal</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="time-outline" size={28} color="#007AFF" />
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Minute</Text>
          </View>
        </View>

        {/* History */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>History</Text>
            <TouchableOpacity>
              <Text style={styles.sectionLink}>All records</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.calendarContainer}>
            <Calendar
              current={'2025-11-05'}
              markedDates={markedDates}
              hideArrows={true}
              hideExtraDays={true}
              disableMonthChange={true}
              firstDay={0}
              enableSwipeMonths={false}
              theme={{
                backgroundColor: '#fff',
                calendarBackground: '#fff',
                textSectionTitleColor: '#b6c1cd',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                monthTextColor: '#000',
                selectedDayBackgroundColor: '#007AFF',
                selectedDayTextColor: '#fff',
                todayTextColor: '#007AFF',
                arrowColor: '#007AFF',
              }}
              renderHeader={() => null}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </View>

          {/* Streak */}
          <View style={styles.streakContainer}>
            <View style={styles.streakItem}>
              <Text style={styles.streakLabel}>Day Streak</Text>
              <View style={styles.streakValue}>
                <Ionicons name="flame" size={20} color="#FF3B30" />
                <Text style={styles.streakNumber}>1</Text>
              </View>
            </View>
            <View style={styles.streakItem}>
              <Text style={styles.streakLabel}>Personal Best</Text>
              <Text style={styles.streakNumber}>1 day</Text>
            </View>
          </View>
        </View>

        {/* Weight */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weight</Text>
            <TouchableOpacity style={styles.logButton}>
              <Text style={styles.logButtonText}>Log</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.weightLabels}>
            <Text style={styles.weightLabel}>Current</Text>
            <View style={styles.weightExtremes}>
              <Text style={styles.extremeLabel}>Heaviest ---</Text>
              <Text style={styles.extremeLabel}>Lightest ---</Text>
            </View>
          </View>

          <LineChart
            data={weightData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
              propsForDots: { r: '0' },
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
            withHorizontalLines={false}
            withVerticalLines={false}
            withOuterLines={false}
            withInnerLines={false}
            yAxisLabel=""
            yAxisSuffix=""
            segments={4}
            fromZero={true}
            yLabelsOffset={10}
            formatYLabel={() => ''}
          />

          {/* Y-Axis Labels */}
          <View style={styles.yAxisLabels}>
            {[700, 600, 500, 400, 300, 200].map((val) => (
              <Text key={val} style={styles.yLabel}>
                {val}
              </Text>
            ))}
          </View>
        </View>

        
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  network: {
    fontSize: 12,
    color: '#000',
  },
  battery: {
    fontSize: 12,
    marginLeft: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionLink: {
    fontSize: 14,
    color: '#007AFF',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  streakContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  streakItem: {
    alignItems: 'center',
  },
  streakLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  streakValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  streakNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  logButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  weightLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  weightLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  weightExtremes: {
    flexDirection: 'row',
    gap: 12,
  },
  extremeLabel: {
    fontSize: 12,
    color: '#8E8E93',
  },
  yAxisLabels: {
    position: 'absolute',
    left: 10,
    top: 20,
    bottom: 20,
    justifyContent: 'space-between',
  },
  yLabel: {
    fontSize: 12,
    color: '#8E8E93',
  },
  adBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 12,
    marginBottom: 80,
  },
  adIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#34C759',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  adIconText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  adContent: {
    flex: 1,
  },
  adTitle: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#34C759',
  },
  installButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  installText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#8E8E93',
  },
});