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
} from 'react-native';
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
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
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
          <Text style={{ fontSize: 18, color: 'gray' }}>Job Title</Text>
          <TextInput
            placeholder="e.g. Software Engineer"
            style={styles.jobInput}
            placeholderTextColor="#9a9898ff"
          />
        </View>

        {/* Department/Team */}
        <View style={{ paddingTop: 15 }}>
          <Text style={{ fontSize: 18, color: 'gray' }}>Department/Team</Text>

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
          <Pressable onPress={() => setLocation('On-site')} style={[location === 'On-site' && styles.option]}>
            <Text style={[styles.locationText, location === 'On-site' && styles.activeLocationText]}> On-site</Text>
          </Pressable>
          <Pressable onPress={() => setLocation('Hybrid')} style={[location === 'Hybrid' && styles.option]}>
            <Text style={[styles.locationText, location === 'Hybrid' && styles.activeLocationText]}>Hybrid</Text>
          </Pressable>
          <Pressable onPress={() => setLocation('Remote')} style={[location === 'Remote' && styles.option]}>
            <Text style={[styles.locationText, location === 'Remote' && styles.activeLocationText]}>Remote</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateNewJob;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#0F172A',
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '12%',
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
     activeLocationText:{
        color:'white',
     },
     option:{
        borderWidth: 1,
        backgroundColor: '#050f29ff',
        borderColor:'#514f4fff',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
     }
});
