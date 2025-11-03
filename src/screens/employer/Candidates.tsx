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
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { applicants } from '../../utils/AIMatchesCandidates';


const Candidates = () => {
  const [isApplicants, setIsApplicants] = useState(true);
  const [value, setValue] = useState('');
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#0F172A" barStyle={'light-content'} />
   
        {/** Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
           
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
        {/** Applicants Profile  */}
           <ScrollView
        style={styles.conatiner}
        contentContainerStyle={styles.content}
      >
        <View
          style={{
            padding: 5,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          {isApplicants ? (
            applicants.map((applicant, index) => (
              <View key={index} style={styles.applicantContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <Image
                    source={{ uri: applicant.avatar }}
                    style={{ width: 44, height: 44, borderRadius: 22 }}
                  />
                  <View>
                    <Text
                      style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}
                    >
                      {applicant.name}
                    </Text>
                    <Text style={{ color: '#ada8a8ff', fontSize: 14 }}>
                      {applicant.title}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.applicantView,
                      applicant.status === 'New'
                        ? styles.new1
                        : applicant.status === 'Interviewing'
                        ? styles.interviewing1
                        : styles.hired1,
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 18 },
                        applicant.status === 'New'
                          ? styles.new
                          : applicant.status === 'Interviewing'
                          ? styles.interviewing
                          : styles.hired,
                      ]}
                    >
                      {applicant.status}
                    </Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View></View>
          )}
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
    width: '90%',
    margin: 10
  },
  searchView: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
    borderColor: '#848080ff',
    width: '90%',
    marginHorizontal: 10
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
    paddingTop: 10,
    width: '90%',
    marginHorizontal: 10
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
  new: {
    color: '#106cafff',
  },
  interviewing: {
    color: '#a6a60fff',
  },
  hired: {
    color: '#12a70aff',
  },
  new1: {
    backgroundColor: '#051f32ff',
  },
  interviewing1: {
    backgroundColor: '#5d4d05ff',
  },
  hired1: {
    backgroundColor: '#143e02ff',
  },
  applicantView: {
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 50,
    borderColor: '#616162ff',
  },
  applicantContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: '#111827',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#484f5cff',
  },
});

export default Candidates;
