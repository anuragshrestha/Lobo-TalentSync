import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EmployerProfile = () => {
  const [companyName, setCompanyName] = useState('Innovate Inc.');
  const [description, setDescription] = useState('Leading the charge in AI-driven talent acquisition.');
  const [website, setWebsite] = useState('https://www.innovateinc.com');
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container} overScrollMode="never" bounces={false}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={22} color="#CBD5E1" />
        <Text style={styles.headerTitle}>Settings & Profile</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Company Profile */}
      <Text style={styles.sectionTitle}>Company Profile</Text>
      <View style={styles.card}>
        <View style={styles.logoWrap}>
          <Image source={{ uri: 'https://dummyimage.com/120x120/0B1224/ffffff&text=CO' }} style={styles.logo} />
          <View style={styles.editBadge}>
            <Ionicons name="pencil" size={14} color="#fff" />
          </View>
        </View>

        <Text style={styles.label}>Company Name</Text>
        <TextInput style={styles.input} value={companyName} onChangeText={setCompanyName} />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Website</Text>
        <TextInput style={styles.input} value={website} onChangeText={setWebsite} />

        <Pressable style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Save Changes</Text>
        </Pressable>
      </View>

      {/* Job Templates */}
      <Text style={styles.sectionTitle}>Job Templates</Text>
      <View style={styles.card}>
        <TemplateRow icon="document-text-outline" text="Senior Software Engineer" />
        <View style={styles.rowDivider} />
        <TemplateRow icon="document-text-outline" text="Product Manager" />
        <View style={[styles.rowDivider, { marginVertical: 10 }]} />
        <Pressable style={styles.createRow}>
          <Ionicons name="add-circle-outline" size={18} color="#22C55E" />
          <Text style={styles.createText}>Create New Template</Text>
        </Pressable>
      </View>

      {/* Account Settings */}
      <Text style={styles.sectionTitle}>Account Settings</Text>
      <View style={styles.card}>
        <SettingsRow icon="notifications-outline" bg="#11302A" text="Notifications" />
        <View style={styles.rowDivider} />
        <SettingsRow icon="lock-closed-outline" bg="#112430" text="Privacy & Security" />
        <View style={styles.rowDivider} />
        <SettingsRow icon="card-outline" bg="#122a1d" text="Billing Information" />
      </View>

      <Pressable style={styles.logoutBtn} onPress={() => navigation.navigate('EmployerSignin')}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>

      <View style={styles.footerLinks}>
        <Text style={styles.footerLink}>Help & Support</Text>
        <Text style={styles.footerLink}>Terms of Service</Text>
      </View>
    </ScrollView>
  );
};

const TemplateRow = ({ icon, text }: { icon: string; text: string }) => (
  <Pressable style={styles.row}>
    <View style={styles.rowLeftIcon}> 
      <Ionicons name={icon as any} size={16} color="#22C55E" />
    </View>
    <Text style={styles.rowText}>{text}</Text>
    <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
  </Pressable>
);

const SettingsRow = ({ icon, text, bg }: { icon: string; text: string; bg: string }) => (
  <Pressable style={styles.row}>
    <View style={[styles.rowLeftIcon, { backgroundColor: bg, borderColor: '#1E293B' }]}> 
      <Ionicons name={icon as any} size={16} color="#22C55E" />
    </View>
    <Text style={styles.rowText}>{text}</Text>
    <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
  </Pressable>
);

export default EmployerProfile;

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#0F172A' },
  container: { padding: 12, paddingBottom: 40 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 },
  headerTitle: { color: '#E2E8F0', fontSize: 18, fontWeight: '700' },
  sectionTitle: { color: '#E2E8F0', fontSize: 18, fontWeight: '700', marginTop: 16, marginBottom: 8 },
  card: {
    backgroundColor: '#0B0F1A',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 16,
    padding: 14,
  },
  logoWrap: { alignItems: 'center', marginBottom: 12 },
  logo: { width: 96, height: 96, borderRadius: 48, backgroundColor: '#0B1224' },
  editBadge: {
    position: 'absolute',
    right: '34%',
    bottom: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0B0F1A',
  },
  label: { color: '#9CA3AF', marginTop: 6 },
  input: {
    backgroundColor: '#0B1224',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    color: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 6,
  },
  primaryBtn: {
    marginTop: 12,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#fff', fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  rowLeftIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B1224',
    borderWidth: 1,
    borderColor: '#1E293B',
    marginRight: 10,
  },
  rowText: { color: '#E2E8F0', fontSize: 15, fontWeight: '600', flex: 1 },
  rowDivider: { height: 1, backgroundColor: '#1E293B' },
  createRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  createText: { color: '#22C55E', fontWeight: '700', marginLeft: 6 },
  logoutBtn: {
    marginTop: 16,
    backgroundColor: '#2A1214',
    borderWidth: 1,
    borderColor: '#3F1F23',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutText: { color: '#F87171', fontWeight: '700' },
  footerLinks: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 },
  footerLink: { color: '#94A3B8', fontSize: 12 },
});
