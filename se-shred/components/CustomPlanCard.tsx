// components/CustomPlanCard.tsx
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CustomPlanCard() {
  function handleViewPlan() {
    console.log('Open custom workout plan')
    // later: router.push('/(tabs)/training/plan')
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="barbell-outline" size={26} color="#2563eb" />
        <Text style={styles.title}>Your Custom Workout Plan</Text>
      </View>

      <Text style={styles.subtitle}>Best suited for you</Text>

      <TouchableOpacity style={styles.button} onPress={handleViewPlan}>
        <Text style={styles.buttonText}>View Plan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
})
