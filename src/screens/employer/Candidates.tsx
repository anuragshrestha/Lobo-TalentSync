import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Candidates = () => {
  const [isApplicants, setIsApplicants] = useState(true);
  const [value, setValue] = useState('');
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#0F172A" barStyle={'light-content'} />
      <ScrollView
        style={styles.conatiner}
        contentContainerStyle={styles.content}
      >
        {/** Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>
            Candidates
          </Text>
          <Ionicons name="ellipsis-vertical" size={20} color="white" />
        </View>
        {/** Applicants & AI Matches */}
        <View style={styles.applicantsView}>
          <Pressable
            style={[styles.tab, isApplicants && styles.tabActive]}
            onPress={() => setIsApplicants(true)}
          >
            <Text
              style={[
                { fontSize: 18 },
                { color: isApplicants ? '#fff' : 'gray' },
              ]}
            >
              Applicants
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, !isApplicants && styles.tabActive]}
            onPress={() => setIsApplicants(false)}
          >
            <Text
              style={[
                { fontSize: 18 },
                { color: !isApplicants ? '#fff' : 'gray' },
              ]}
            >
              AI Matches
            </Text>
          </Pressable>
        </View>
        {/** Search Bar */}
        <View style={styles.searchView}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            value={value}
            onChangeText={v => setValue(v)}
            placeholder="Search by name or keyword"
            placeholderTextColor="gray"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>
        {/* Filters */}
        <View style={styles.filtersRow}>
          <Pressable style={styles.filterPill}>
            <Ionicons name="funnel-outline" size={16} color="#CBD5E1" />
            <Text style={styles.filterText}>Date</Text>
            <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
          </Pressable>
          <Pressable style={styles.filterPill}>
            <Ionicons name="school-outline" size={16} color="#CBD5E1" />
            <Text style={styles.filterText}>Skills</Text>
            <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
          </Pressable>
          <Pressable style={styles.filterPill}>
            <Ionicons name="funnel" size={16} color="#CBD5E1" />
            <Text style={styles.filterText}>Status</Text>
            <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  conatiner: {
    flexGrow: 1,
    backgroundColor: '#0F172A',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  tab: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: '#3B82F6',
  },
  applicantsView: {
    flexDirection: 'row',
    backgroundColor: '#202f54ff',
    marginBottom: 8,
    borderRadius: 12,
    marginTop: 20,
  },
  searchView: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
    borderColor: '#848080ff',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    paddingVertical: 0,
    lineHeight: 22,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  filterText: {
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default Candidates;
