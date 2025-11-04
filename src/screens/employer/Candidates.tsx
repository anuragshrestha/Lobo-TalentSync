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
  Modal,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { applicants, candidates } from '../../utils/AIMatchesCandidates';
import Pdf from 'react-native-pdf';

const Candidates = () => {
  const [isApplicants, setIsApplicants] = useState(true);
  const [value, setValue] = useState('');
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [showResume, setShowResume] = useState(false);

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
        contentContainerStyle={{
          padding: 12,
          paddingBottom: insets.bottom,
        }}
      >
        <View
          style={{
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
                <View style={{ flexDirection: 'row', paddingTop: 10, gap: 10 }}>
                  <Pressable style={styles.profileChat}>
                    <Ionicons name="person-outline" size={18} color="#fff" />
                    <Text style={{ color: '#fff', fontSize: 18 }}>Profile</Text>
                  </Pressable>
                  <Pressable style={styles.profileChat}>
                    <Ionicons
                      name="chatbubble-outline"
                      size={18}
                      color="#fff"
                    />
                    <Text style={{ color: '#fff', fontSize: 18 }}>Chat</Text>
                  </Pressable>
                </View>
              </View>
            ))
          ) : (
            <>
              {candidates.map((candidate, index) => (
                <View key={index} style={styles.applicantContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={{ uri: candidate.avatar }}
                      style={{ width: 44, height: 44, borderRadius: 22 }}
                    />
                    <View>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          fontWeight: '500',
                        }}
                      >
                        {candidate.name}
                      </Text>
                      <Text
                        style={[
                          { fontSize: 16 },
                          {
                            color:
                              candidate.match > 89 ? '#11b206ff' : '#bad90dff',
                          },
                        ]}
                      >
                        {candidate.match}% Match
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}
                  >
                    {candidate.tags.map((tag, i) => (
                      <View key={i} style={styles.skills}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '500',
                          }}
                        >
                          {tag}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.resumeChat}>
                    <Pressable
                      style={styles.viewResume}
                      onPress={() => setShowResume(true)}
                    >
                      <Ionicons
                        name="document-text-outline"
                        size={20}
                        color="#fff"
                      />
                      <Text style={styles.aiText}> View Resume</Text>
                    </Pressable>
                    <Pressable style={styles.chat}>
                      <Ionicons
                        name="chatbubble-outline"
                        size={20}
                        color="#fff"
                      />
                      <Text style={styles.aiText}>Chat</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
      <Modal
        visible={showResume}
        animationType="slide"
        onRequestClose={() => setShowResume(false)}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0F172A', paddingTop: 50 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 12,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600'}}>
              Candidate Resume
            </Text>
            <Pressable
              onPress={() => setShowResume(false)}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 8,
                backgroundColor: '#334155',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16}}>Cancel</Text>
            </Pressable>
          </View>

          <Pdf
            // Use the bundled resume PDF asset
            source={require('../../assests/Resume.pdf')}
            style={{ flex: 1 }}
            trustAllCerts={false}
            onError={e => console.warn('PDF error', e)}
          />
        </SafeAreaView>
      </Modal>
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
    margin: 10,
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
    marginHorizontal: 10,
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
    marginHorizontal: 10,
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
    paddingVertical: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#111827',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#484f5cff',
  },
  skills: {
    backgroundColor: '#3459b7ff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 15,
  },
  aiText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  profileChat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    backgroundColor: '#202f54ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: '#6d6b6bff',
    width: '30%',
    justifyContent: 'center',
  },
  viewResume: {
    borderRadius: 12,
    backgroundColor: '#f6f3f31d',
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chat: {
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  resumeChat: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Candidates;
