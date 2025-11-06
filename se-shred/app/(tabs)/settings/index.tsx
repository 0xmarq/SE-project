import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';


import { supabase } from '@/lib/supabaseClient';
import { router } from 'expo-router';

async function signOut() {
  await supabase.auth.signOut();
  router.replace('/(auth)/login');
}

export default function SettingsScreen() {
  const [healthSync, setHealthSync] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ----- Header ----- */}
        <View style={styles.header}>
          <Icon name="settings-outline" size={28} color="#111" />
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        {/* ----- Backup & Restore ----- */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconText}>
              <MCIcon name="cloud-outline" size={28} color="#3B82F6" />
              <View>
                <Text style={styles.title}>Backup & Restore</Text>
                <Text style={styles.subtitle}>Sign in and synchronize your data</Text>
              </View>
            </View>
            <FeatherIcon name="refresh-cw" size={20} color="#9CA3AF" />
          </View>

          <TouchableOpacity style={styles.premiumBtn}>
            <View style={styles.premiumIcon}>
              <Text style={styles.premiumIconText}>GO</Text>
            </View>
            <Text style={styles.premiumText}>GO PREMIUM</Text>
          </TouchableOpacity>
        </View>

        {/* ----- Settings list ----- */}
        <View style={[styles.card, styles.mt]}>
          {[
            { i: 'droplet', c: '#10B981', t: 'Workout Settings' },
            { i: 'settings', c: '#3B82F6', t: 'General Settings' },
            { i: 'mic', c: '#F97316', t: 'Voice Options (TTS)' },
            { i: 'message-square', c: '#14B8A6', t: 'Suggest Other Features' },
            { i: 'globe', c: '#8B5CF6', t: 'Language Options', s: 'Default' },
          ].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.settingRow}>
              <View style={styles.iconText}>
                <Icon name={item.i as any} size={26} color={item.c} />
                <View>
                  <Text style={styles.settingLabel}>{item.t}</Text>
                  {item.s && <Text style={styles.settingSub}>{item.s}</Text>}
                </View>
              </View>
              <FeatherIcon name="chevron-right" size={22} color="#9CA3AF" />
            </TouchableOpacity>
          ))}

          {/* Health Connect toggle */}
          <View style={styles.settingRow}>
            <View style={styles.iconText}>
              <MCIcon name="heart-pulse" size={26} color="#3B82F6" />
              <Text style={styles.settingLabel}>Sync to Health Connect</Text>
            </View>
            <Switch
              value={healthSync}
              onValueChange={setHealthSync}
              trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
              thumbColor={healthSync ? '#fff' : '#9CA3AF'}
            />
          </View>
        </View>

        {/* ----- Bottom actions ----- */}
        <View style={[styles.card, styles.mt]}>
          {[
            { i: 'share-2', t: 'Share with friends' },
            { i: 'star', t: 'Rate us' },
            { i: 'message-circle', t: 'Feedback' },
          ].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.actionRow}>
              <FeatherIcon name={item.i as any} size={22} color="#6B7280" />
              <Text style={styles.actionLabel}>{item.t}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      
    </SafeAreaView>
  );
}

/* ------------------------------------------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },

  /* status bar */
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  time: { fontSize: 13, color: '#4B5563' },
  statusRight: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  statusText: { fontSize: 12, fontWeight: '600', color: '#4B5563' },
  signal: { width: 16, height: 12, backgroundColor: '#D1D5DB', borderRadius: 2 },
  battery: { fontSize: 12, color: '#4B5563' },

  /* header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginLeft: 8 },

  /* cards */
  card: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3 },
      android: { elevation: 2 },
    }),
  },
  mt: { marginTop: 16 },

  /* rows */
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16 },
  iconText: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  title: { fontSize: 16, fontWeight: '600', color: '#111827' },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 2 },

  /* premium button */
  premiumBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    marginHorizontal: 20,
    marginBottom: 16,
    paddingVertical: 14,
    borderRadius: 999,
  },
  premiumIcon: { width: 24, height: 24, backgroundColor: '#fff', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  premiumIconText: { color: '#3B82F6', fontSize: 10, fontWeight: 'bold' },
  premiumText: { color: '#fff', fontWeight: '600', marginLeft: 8 },

  /* setting rows */
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  settingLabel: { fontSize: 16, color: '#111827', fontWeight: '500' },
  settingSub: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },

  /* action rows */
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
    gap: 12,
  },
  actionLabel: { fontSize: 16, color: '#374151', fontWeight: '500' },

  /* bottom nav */
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 8 },
  tabIcon: { fontSize: 24 },
  tabIconActive: { color: '#3B82F6' },
  tabLabel: { fontSize: 10, marginTop: 4, color: '#6B7280' },
  tabLabelActive: { color: '#3B82F6', fontWeight: '600' },
});