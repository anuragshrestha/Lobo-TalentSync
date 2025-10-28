import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Row = ({
  icon,
  label,
  onPress,
  trailing,
}: {
  icon: React.ReactNode;
  label: string;
  trailing?: React.ReactNode;
  onPress?: () => void;
}) => (
  <Pressable
    onPress={onPress}
    android_ripple={{ color: '#e6e6e6' }}
    style={({ pressed }) => [
      styles.row,
      pressed && Platform.OS === 'ios' ? { opacity: 0.7 } : null,
    ]}
  >
    <View style={styles.iconWrap}>{icon}</View>
    <Text style={styles.rowLabel} numberOfLines={1}>
      {label}
    </Text>
    <View style={{ flex: 1 }} />
    {trailing ?? <Ionicons name="chevron-forward" size={20} color="#9aa0a6" />}
  </Pressable>
);

const StudentProfile = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerCard}>
          <Image
            source={{
              uri: 'https://ui-avatars.com/api/?name=Anurag+S&background=007aff&color=fff',
            }}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Welcome, Anurag</Text>
            <Text style={styles.subtitle}>Student • Computer Science</Text>
          </View>
          <Pressable
            hitSlop={8}
            style={styles.editBtn}
            android_ripple={{ color: '#e6f0ff', borderless: true }}
            onPress={() => {}}
          >
            <Ionicons name="create-outline" size={18} color="#007aff" />
          </Pressable>
        </View>

        {/* Action list */}
        <View style={styles.card}>
          <Row
            icon={<Ionicons name="person-circle" size={24} color="#374151" />}
            label="Account Details"
            onPress={() => {}}
          />
          <View style={styles.divider} />
          <Row
            icon={<Ionicons name="document-text" size={24} color="#374151" />}
            label="Update Resume"
            onPress={() => {}}
          />
          <View style={styles.divider} />
          <Row
            icon={
              <Ionicons name="document-outline" size={24} color="#374151" />
            }
            label="Update Cover Letter"
            onPress={() => {}}
          />
          <View style={styles.divider} />
          <Row
            icon={<Ionicons name="school" size={24} color="#374151" />}
            label="Update Skills"
            onPress={() => {}}
          />
          <View style={styles.divider} />
          <Row
            icon={<Ionicons name="options" size={24} color="#374151" />}
            label="Update Job Preferences"
            onPress={() => {}}
          />
          <View style={styles.divider} />
          <Row
            icon={
              <Ionicons name="settings-outline" size={24} color="#374151" />
            }
            label="Settings"
            onPress={() => {}}
          />
        </View>

        {/* Optional: small help/footnote */}
        <Text style={styles.footnote}>
          Tip: Keep your resume and preferences up to date to get better job
          matches.
        </Text>
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Landing')}
        style={styles.signoutButton}
      >
        <Text style={styles.signoutText}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default StudentProfile;

const BG = '#f3f4f6'; // soft app background
const CARD = '#ffffff'; // card surface
const TEXT = '#111827'; // primary text
const SUBTLE = '#6b7280'; // secondary text
const BORDER = '#e5e7eb'; // separators

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG },
  container: {
    padding: 16,
    gap: 16,
  },

  /* Header */
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    padding: 16,
    borderRadius: 14,
    ...shadow(),
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT,
  },
  subtitle: {
    fontSize: 13,
    color: SUBTLE,
    marginTop: 2,
  },
  editBtn: {
    padding: 8,
    borderRadius: 999,
  },

  /* Card with rows */
  card: {
    backgroundColor: CARD,
    borderRadius: 14,
    overflow: 'hidden',
    ...shadow(),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#f1f5f9',
  },
  rowLabel: {
    fontSize: 16,
    color: TEXT,
    fontWeight: '500',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: BORDER,
    marginLeft: 56, // indent under the text, not under the icon container
  },

  footnote: {
    textAlign: 'center',
    color: SUBTLE,
    fontSize: 12,
  },
  signoutButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 9,
    width: '25%',
    paddingVertical: 10,
    marginVertical: 20,
  },
  signoutText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/** Cross-platform shadow helper */
function shadow() {
  return {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  };
}
