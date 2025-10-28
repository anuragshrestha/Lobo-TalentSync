import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Job } from '../auth//utils/JobCard';

const screenWidth = Dimensions.get('window').width;

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / (1000 * 60));
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

const PROGRESS_STEPS = [
  'Updating your resume based on job description…',
  'Updating your cover letter based on your cover letter…',
  'Sending application…',
] as const;

const sleep = (ms: number): Promise<void> =>
  new Promise<void>(res => setTimeout(res, ms));

const JobDetailCard = ({ job }: { job: Job }) => {
  const [expanded, setExpanded] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const [progessView, setProgressView] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [done, setDone] = useState(false);

  const runSubmitFlow = async () => {
    console.log('inside run submit');

    setProgressView(true);
    setActiveStep(0);
    setDone(false);

    for (let i = 0; i < PROGRESS_STEPS.length; i++) {
      console.log('printing i: ', i);

      setActiveStep(i);
      await sleep(5000);
    }

    setDone(true);
    await sleep(3000);

    setProgressView(false);
    setActiveStep(0);
    setDone(false);
  };

  const submitJob = () => {
    Alert.alert(
      'Confrim Application',
      'Do you want to Apply for this Job?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Submit', style: 'default', onPress: runSubmitFlow },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerView}>
        <View style={styles.innerheaderView}>
          <Image source={{ uri: job.logoUrl }} style={styles.logo} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.companyText}>{job.company}</Text>
            <Text style={styles.employeesText}>
              {job.numOfEmployees} Employees
            </Text>
          </View>
        </View>
        <Pressable style={styles.saveIcon}>
          <Ionicons name="bookmark-outline" size={22} color="#111" />
        </Pressable>
      </View>

      {/* Job title */}
      <Text style={styles.jobText}>{job.title}</Text>
      {/* Job Info */}
      <View style={styles.jobInfo}>
        <View style={styles.postedView}>
          <Ionicons name="time-outline" size={14} />
          <Text style={{ fontSize: 12.5, color: '#111' }}>
            {timeAgo(job.postedAt)}
          </Text>
        </View>
        <View style={styles.employmentType}>
          <Ionicons name="briefcase-outline" size={14} />
          <Text style={{ fontSize: 12.5, color: '#111' }}>
            {job.employmentType}
          </Text>
        </View>
        <View style={styles.locationView}>
          <Ionicons name="location-outline" size={14} />
          <Text style={{ fontSize: 12.5, color: '#111' }}>{job.location}</Text>
        </View>
      </View>

      {/*Job Description*/}
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            marginTop: 10,
            marginBottom: 8,
            color: '#111',
          }}
        >
          Job Description
        </Text>
        <Text
          style={[styles.description, styles.hiddenMeasure]}
          onTextLayout={e => {
            if (lineCount === 0) setLineCount(e.nativeEvent.lines.length);
          }}
        >
          {job.description}
        </Text>
        <Text
          style={styles.description}
          numberOfLines={expanded ? undefined : 5}
          ellipsizeMode="tail"
        >
          {job.description}
        </Text>
        {lineCount > 5 && (
          <Pressable onPress={() => setExpanded(v => !v)}>
            <Text style={styles.seeMore}>
              {expanded ? 'See less...' : 'See more...'}
            </Text>
          </Pressable>
        )}
      </View>
      {/* Minimum Requirements */}
      <View style={{ marginTop: 14 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 8,
            color: '#111',
          }}
        >
          Minimum Requirements
        </Text>

        {job.minRequirements.map((req, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: '#000',
                marginTop: 7,
              }}
            />
            <Text
              style={{ fontSize: 14, color: '#222', lineHeight: 20, flex: 1 }}
            >
              {req}
            </Text>
          </View>
        ))}
      </View>

      {/* Apply Button */}
      <View style={styles.submitButtonView}>
        <Pressable style={styles.submitButton} onPress={submitJob}>
          <Text style={{ fontSize: 16, color: '#e9e5e5ff' }}>
            Submit Application
          </Text>
        </Pressable>
        <Pressable style={styles.textRecuiter}>
          <Ionicons name="chatbubble" size={16} color="#e9e5e5ff" />
          <Text style={{ fontSize: 16, color: '#e9e5e5ff' }}>
            Text Recuiter
          </Text>
        </Pressable>
      </View>

      {/** Status Modal */}
      <Modal
        visible={progessView}
        transparent
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={styles.modalView}>
          <View style={styles.innerModalView}>
            {!done ? (
              <>
                <ActivityIndicator size="large" />
                <Text style={styles.submitAppText}>Submitting Application</Text>
                <View style={{ gap: 8, paddingTop: 10 }}>
                  {PROGRESS_STEPS.map((text, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <Ionicons
                        name={
                          index < activeStep
                            ? 'checkmark-circle'
                            : index === activeStep
                            ? 'radio-button-on'
                            : 'ellipse-outline'
                        }
                        size={18}
                        color={index < activeStep ? '#2563EB' : '#999'}
                      />
                      <Text
                        style={[
                          styles.stepText,
                          index === activeStep && {
                            fontWeight: '700',
                            color: '#111',
                          },
                          index < activeStep && { color: '#111' },
                        ]}
                      >
                        {text}
                      </Text>
                    </View>
                  ))}
                </View>
              </>
            ) : (
              <View style={{ alignItems: 'center', padding: 18 }}>
                <Ionicons name="checkmark-circle" size={22} color="#16a34a" />
                <Text
                  style={{ fontSize: 18, fontWeight: '600', color: '#16a34a' }}
                >
                  Application Sent!
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default JobDetailCard;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerheaderView: {
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: { fontSize: 14, lineHeight: 20, color: '#222' },
  companyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  employeesText: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  saveIcon: {
    backgroundColor: '#dcdde0ff',
    padding: 8,
    borderRadius: 10,
  },
  jobText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    alignItems: 'center',
  },
  jobInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginBottom: 12,
    marginTop: 10,
  },
  postedView: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 999,
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  employmentType: {
    flexDirection: 'row',
    backgroundColor: '#f4f5f6',
    gap: 6,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  locationView: {
    flexDirection: 'row',
    backgroundColor: '#f4f5f6',
    gap: 6,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  submitButtonView: {
    borderBottomWidth: 1,
    borderBottomColor: '#787575ff',
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    paddingBottom: 5,
  },
  submitButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 5,
    borderRadius: 15,
    paddingHorizontal: 8,
    maxWidth: '40%',
  },
  textRecuiter: {
    backgroundColor: '#04225eff',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
    maxWidth: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  seeMore: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
  hiddenMeasure: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    left: 0,
    right: 0,
  },
  stepText: {
    fontSize: 16,
    color: '#444',
    flexShrink: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.22)',
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerModalView: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#b9f2f7ff',
    padding: 18,
  },
  submitAppText: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 6,
    color: '#111',
  },
});
