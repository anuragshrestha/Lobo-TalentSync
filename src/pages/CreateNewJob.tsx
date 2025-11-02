import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DEFAULT_TEXT_COLOR = '#e9e6e6ff';
const PLACEHOLDER = '#9a9898';

const DEPTS = [
  { label: 'Engineering', value: 'eng' },
  { label: 'Design', value: 'design' },
  { label: 'Product', value: 'product' },
  { label: 'Operations', value: 'ops' },
  { label: 'Marketing', value: 'mkt' },
  { label: 'Sales', value: 'sales' },
];

const CreateNewJob = () => {
  const navigation = useNavigation();
  const [dept, setDept] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<
    '' | 'On-site' | 'Hybrid' | 'Remote'
  >('On-site');

  const selectedLabel = dept
    ? DEPTS.find(d => d.value === dept)?.label
    : 'Select a department';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <StatusBar backgroundColor="#0F172A" barStyle="light-content" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        bounces={false}
        overScrollMode="never"
      >
      <View style={{ width: '100%' }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="gray" />
          </Pressable>
          <Text style={styles.headerTitle}>Create a New Job</Text>
        </View>
        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Core Details</Text>

        {/* Job Title */}
        <View style={{ paddingTop: 15 }}>
          <Text style={{ fontSize: 18, color: '#ccc8c8ff', fontWeight: '500' }}>
            Job Title
          </Text>
          <TextInput
            placeholder="e.g. Software Engineer"
            style={styles.jobInput}
            placeholderTextColor="#9a9898ff"
          />
        </View>

        {/* Department/Team */}
        <View style={{ paddingTop: 15 }}>
          <Text style={{ fontSize: 18, color: '#ccc8c8ff', fontWeight: '500' }}>
            Department/Team
          </Text>

          {/* Trigger */}
          <Pressable
            style={styles.selectTrigger}
            onPress={() => setOpen(o => !o)}
          >
            <Text
              style={[
                styles.selectText,
                { color: dept ? DEFAULT_TEXT_COLOR : PLACEHOLDER },
              ]}
              numberOfLines={1}
            >
              {selectedLabel}
            </Text>
            <Ionicons
              name={open ? 'chevron-up' : 'chevron-down'}
              size={18}
              color={DEFAULT_TEXT_COLOR}
            />
          </Pressable>

          {/* Dropdown menu */}
          {open && (
            <>
              <Pressable
                style={styles.backdrop}
                onPress={() => setOpen(false)}
              />

              <View style={styles.menu}>
                <ScrollView style={{ maxHeight: 220 }} bounces={false}>
                  {DEPTS.map(item => (
                    <Pressable
                      key={item.value}
                      style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { backgroundColor: '#0c1322' },
                      ]}
                      onPress={() => {
                        setDept(item.value);
                        setOpen(false);
                      }}
                    >
                      <Text style={styles.menuItemText}>{item.label}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
            </>
          )}
        </View>

        {/**Location */}
        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.locationView}>
          <Pressable
            onPress={() => setLocation('On-site')}
            style={[location === 'On-site' && styles.option]}
          >
            <Text
              style={[
                styles.locationText,
                location === 'On-site' && styles.activeLocationText,
              ]}
            >
              {' '}
              On-site
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setLocation('Hybrid')}
            style={[location === 'Hybrid' && styles.option]}
          >
            <Text
              style={[
                styles.locationText,
                location === 'Hybrid' && styles.activeLocationText,
              ]}
            >
              Hybrid
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setLocation('Remote')}
            style={[location === 'Remote' && styles.option]}
          >
            <Text
              style={[
                styles.locationText,
                location === 'Remote' && styles.activeLocationText,
              ]}
            >
              Remote
            </Text>
          </Pressable>
        </View>

        {/**Job Specifics */}
        <Text style={styles.sectionTitle}>Job Specifics</Text>
        <Text
          style={{
            fontSize: 16,
            color: '#ccc8c8ff',
            fontWeight: '500',
            paddingTop: 10,
          }}
        >
          Employment Type
        </Text>
        <Pressable style={styles.selectTrigger}>
          <Text style={[styles.selectText, { color: PLACEHOLDER }]}>
            Full-time
          </Text>
          <Ionicons name="chevron-down" size={22} color="white" />
        </Pressable>
        {/**Experience Level */}
        <Text
          style={{
            fontSize: 16,
            color: '#ccc8c8ff',
            fontWeight: '500',
            paddingTop: 10,
          }}
        >
          Experience Level
        </Text>
        <Pressable style={styles.selectTrigger}>
          <Text style={[styles.selectText, { color: PLACEHOLDER }]}>
            Entry Level
          </Text>
          <Ionicons name="chevron-down" size={22} color="white" />
        </Pressable>
        {/**Description Section */}
        <View style={styles.descriptionView}>
          <Text style={styles.sectionTitle2}>Description</Text>
          <View style={styles.aiAssistView}>
            <Ionicons name="sparkles-outline" size={18} color="#085fbdff" />
            <Text style={styles.aiAssistText}>AI Assist</Text>
          </View>
        </View>
        <TextInput
          placeholder="Describe the job responsibilities, qualifications, and culture... "
          numberOfLines={2}
          multiline={true}
          placeholderTextColor="#9a9898"
          style={styles.jobDescriptionInput}
        ></TextInput>
        <Pressable style={styles.publishJobView}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Publish Job
          </Text>
        </Pressable>
        <Pressable style={{minWidth: '90%', alignItems: 'center', marginTop: 10, marginBottom: 50}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#25a4edff'}}>Save as Draft</Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewJob;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flexGrow: 1,
    padding: 10,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '25%',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: DEFAULT_TEXT_COLOR,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 20,
    color: DEFAULT_TEXT_COLOR,
  },
  sectionTitle2: {
    fontSize: 22,
    fontWeight: '700',
    color: DEFAULT_TEXT_COLOR,
  },
  jobInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 13,
    paddingHorizontal: 12,
    marginTop: 5,
    fontSize: 16,
    color: '#fff',
  },
  selectTrigger: {
    marginTop: 8,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    backgroundColor: '#0F172A',
    height: 52,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  selectText: {
    fontSize: 16,
    fontWeight: '500',
  },
  menu: {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: 75,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    backgroundColor: '#0F172A',
    zIndex: 20,
    overflow: 'hidden',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  menuItemText: {
    color: DEFAULT_TEXT_COLOR,
    fontSize: 16,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 15,
  },
  locationView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '22%',
    paddingTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#202f54ff',
    borderColor: '#514f4fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9a9898ff',
  },
  activeLocationText: {
    color: 'white',
  },
  option: {
    borderWidth: 1,
    backgroundColor: '#050f29ff',
    borderColor: '#514f4fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  aiAssistView: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(3, 42, 84, 1)',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  descriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '42%',
    paddingTop: 20,
  },
  aiAssistText: {
    textAlign: 'center',
    color: '#085fbdff',
    fontSize: 16,
    fontWeight: '600',
  },
  jobDescriptionInput: {
    borderWidth: 1,
    fontSize: 16,
    paddingVertical: 40,
    borderRadius: 12,
    borderColor: '#514f4fff',
    paddingHorizontal: 10,
    color: 'white',
    textAlignVertical: 'top',
    marginTop: 10,
  },
  publishJobView: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    minWidth: '90%',
    borderRadius: 16,
    backgroundColor: '#202f54ff',
    alignItems: 'center',
    marginTop: 10,
  },
});
