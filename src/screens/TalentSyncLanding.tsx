import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TalentSyncLanding() {

  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Logo + Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoSymbol}>⚡️</Text>
          </View>
        </View>
        <Text style={styles.title}>
          Lobo <Text style={styles.highlight}>TalentSync</Text>
        </Text>
        <Text style={styles.subtitle}>Swipe your way into a job</Text>
        <Text style={styles.description}>
          The future of job searching is here. Match with opportunities that fit your skills, discover company cultures through stories, and apply with just a swipe.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.feature}>
        <View style={styles.featureIconBlue}>
          <Text style={styles.iconText}>🎯</Text>
        </View>
        <Text style={styles.featureTitle}>Smart Matching</Text>
        <Text style={styles.featureDesc}>
          AI-powered job recommendations based on your skills and preferences
        </Text>
      </View>

      <View style={styles.feature}>
        <View style={styles.featureIconGreen}>
          <Text style={styles.iconText}>⚡</Text>
        </View>
        <Text style={styles.featureTitle}>Instant Apply</Text>
        <Text style={styles.featureDesc}>
          Apply to jobs with a simple swipe using your uploaded resume
        </Text>
      </View>
      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.studentBtn} onPress={() => navigation.navigate('StudentSignIn')}>
          <Text style={styles.studentText}>I'm a Student →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.employerBtn} onPress={() => navigation.navigate('EmployerSignin')}>
          <Text style={styles.employerText}>I'm an Employer →</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>1000+</Text>
          <Text style={styles.statLabel}>Jobs Available</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: '#22c55e' }]}>95%</Text>
          <Text style={styles.statLabel}>Match Success</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: '#8b5cf6' }]}>24h</Text>
          <Text style={styles.statLabel}>Avg Response</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafc', paddingTop: 50 },
  content: { alignItems: 'center', paddingVertical: 40, paddingHorizontal: 24 },
  header: { alignItems: 'center', marginBottom: 40 },
  logoContainer: { marginBottom: 10 },
  logoIcon: {
    backgroundColor: '#f63b54ff',
    borderRadius: 16,
    padding: 10,
  },
  logoSymbol: { fontSize: 24, color: '#fff' },
  title: { fontSize: 28, fontWeight: '700', color: '#111' },
  highlight: { color: '#f63b54ff' },
  subtitle: { fontSize: 16, color: '#555', marginTop: 4 },
  description: {
    textAlign: 'center',
    color: '#666',
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 340,
  },
  feature: { alignItems: 'center', marginTop: 10, paddingHorizontal: 12 },
  featureIconBlue: {
    backgroundColor: '#dbeafe',
    borderRadius: 50,
    padding: 14,
    marginBottom: 12,
  },
  featureIconGreen: {
    backgroundColor: '#dcfce7',
    borderRadius: 50,
    padding: 14,
    marginBottom: 12,
  },
  featureIconPurple: {
    backgroundColor: '#ede9fe',
    borderRadius: 50,
    padding: 14,
    marginBottom: 12,
  },
  iconText: { fontSize: 20 },
  featureTitle: { fontSize: 18, fontWeight: '700', color: '#111' },
  featureDesc: {
    textAlign: 'center',
    color: '#666',
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 300,
  },
  buttonGroup: { marginTop: 40, alignItems: 'center' },
  studentBtn: {
    backgroundColor: '#f63b54ff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 12,
    width: '80%',
  alignItems: 'center',  
  },
  studentText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  employerBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
      width: '80%',
  alignItems: 'center',  
  },
  employerText: { color: '#111', fontSize: 16, fontWeight: '600' },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 48,
    width: '100%',
    maxWidth: 360,
  },
  statBox: { alignItems: 'center', flex: 1 },
  statValue: { fontSize: 20, fontWeight: '700', color: '#2563eb' },
  statLabel: { color: '#555', fontSize: 13, marginTop: 4 },
});
