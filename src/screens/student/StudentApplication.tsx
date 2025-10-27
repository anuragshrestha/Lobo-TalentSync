import React, { useMemo, useState } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker, { isCancel, types } from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';

type PickedDoc = {
  uri: string;
  name?: string | null;
  size?: number | null;
  type?: string | null;
};



const DUMMY_JOB_TITLES: string[] = [
  'Software Engineer',
  'AI Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Engineer',
  'Mobile App Developer',
  'Data Analyst',
  'Data Scientist',
  'Machine Learning Engineer',
  'DevOps Engineer',
  'Cloud Engineer',
  'Product Manager',
  'Project Manager',
  'UI/UX Designer',
  'QA Engineer',
  'Business Analyst',
  'Solutions Architect',
  'Site Reliability Engineer',
  'Security Engineer',
  'Technical Writer',
  'IT Support Specialist',
];

const StudentApplication = () => {
  
  
 const navigation = useNavigation<any>();
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const [jobQuery, setJobQuery] = useState('');
  const [selectedJobTitles, setSelectedJobTitles] = useState<string[]>([]);
  const [customJobTitles, setCustomJobTitles] = useState<string[]>([]);

  const [resume, setResume] = useState<PickedDoc | null>(null);
  const [coverLetter, setCoverLetter] = useState<PickedDoc | null>(null);

  const jobSource = useMemo(
    () => Array.from(new Set([...customJobTitles, ...DUMMY_JOB_TITLES])),
    [customJobTitles]
  );

  const filteredTitles = useMemo(() => {
    const q = jobQuery.trim().toLowerCase();
    if (!q) return [];
    return jobSource.filter(t => t.toLowerCase().includes(q));
  }, [jobQuery, jobSource]);

  const hasExactMatch = useMemo(() => {
    const q = jobQuery.trim().toLowerCase();
    if (!q) return false;
    return jobSource.some(t => t.toLowerCase() === q);
  }, [jobQuery, jobSource]);

  const addJobTitle = (value: string) => {
    const v = value.trim();
    if (!v) return;
    setSelectedJobTitles(prev => (prev.includes(v) ? prev : [...prev, v]));
    setJobQuery('');
  };

  const removeJobTitle = (value: string) => {
    setSelectedJobTitles(prev => prev.filter(t => t !== value));
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (!s) return;
    if (skills.includes(s)) {
      setSkillInput('');
      return;
    }
    setSkills(prev => [...prev, s]);
    setSkillInput('');
  };

  const removeSkill = (value: string) => {
    setSkills(prev => prev.filter(s => s !== value));
  };

  const pickPdf = async (setDoc: (doc: PickedDoc) => void) => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [types.pdf],
        copyTo: Platform.select({ ios: 'cachesDirectory', android: 'documentDirectory' }),
      });
      const doc: PickedDoc = {
        uri: result.fileCopyUri || result.uri,
        name: result.name,
        size: result.size,
        type: result.type,
      };
      setDoc(doc);
    } catch (err: any) {
      if (isCancel(err)) return;
      Alert.alert('Error picking file', err?.message || 'Unknown error');
    }
  };

  const clearDoc = (which: 'resume' | 'cover') => {
    if (which === 'resume') setResume(null);
    if (which === 'cover') setCoverLetter(null);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      {/* Skills section */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.row}>
        <TextInput
          value={skillInput}
          onChangeText={setSkillInput}
          placeholder="Add skills"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={addSkill}
        />
        <TouchableOpacity style={styles.primaryButton} onPress={addSkill}>
          <Text style={styles.primaryButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {skills.length > 0 ? (
        <View style={styles.tagsWrap}>
          {skills.map(s => (
            <View key={s} style={styles.tag}>
              <Text style={styles.tagText}>{s}</Text>
              <TouchableOpacity onPress={() => removeSkill(s)} hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}>
                <Ionicons name="close" size={16} color="#555" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.subtle}>No skills added yet.</Text>
      )}

      {/* Job title section */}
      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Job Title</Text>
      <TextInput
        value={jobQuery}
        onChangeText={t => {
          setJobQuery(t);
        }}
        placeholder="Type to search or add a title"
        style={styles.input}
      />
      {selectedJobTitles.length > 0 ? (
        <View style={styles.tagsWrap}>
          {selectedJobTitles.map(title => (
            <View key={title} style={styles.tag}>
              <Text style={styles.tagText}>{title}</Text>
              <TouchableOpacity onPress={() => removeJobTitle(title)} hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}>
                <Ionicons name="close" size={16} color="#555" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : null}
      {jobQuery.trim().length > 0 ? (
        <View style={styles.list}>
          {filteredTitles.map(item => (
            <TouchableOpacity
              key={item}
              style={styles.listItem}
              onPress={() => addJobTitle(item)}
            >
              <Ionicons name="briefcase" size={18} color="#333" />
              <Text style={styles.listItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
          {!hasExactMatch ? (
            <TouchableOpacity
              key="add-new"
              style={styles.listItem}
              onPress={() => {
                const value = jobQuery.trim();
                if (!value) return;
                setCustomJobTitles(prev => (prev.includes(value) ? prev : [value, ...prev]));
                addJobTitle(value);
              }}
            >
              <Ionicons name="add-circle-outline" size={18} color="#1788f1ff" />
              <Text style={styles.listItemText}>Add "{jobQuery.trim()}"</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}

      {/* Documents section */}
      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Documents</Text>
      <Text style={styles.helpText}>Upload PDF files only.</Text>

      <View style={styles.docRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.docLabel}>Resume (PDF)</Text>
          {resume ? (
            <View style={styles.docBadge}>
              <Ionicons name="document-text-outline" size={18} color="#1788f1ff" />
              <Text style={styles.docName} numberOfLines={1}>
                {resume.name || 'Selected file'}
              </Text>
              <TouchableOpacity onPress={() => clearDoc('resume')}>
                <Ionicons name="trash-outline" size={18} color="#c00" />
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.subtle}>No resume selected.</Text>
          )}
        </View>
        <TouchableOpacity style={styles.outlineButton} onPress={() => pickPdf(doc => setResume(doc))}>
          <Ionicons name="cloud-upload-outline" size={18} color="#1788f1ff" />
          <Text style={styles.outlineButtonText}>Select</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.docRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.docLabel}>Cover Letter (PDF)</Text>
          {coverLetter ? (
            <View style={styles.docBadge}>
              <Ionicons name="document-text-outline" size={18} color="#1788f1ff" />
              <Text style={styles.docName} numberOfLines={1}>
                {coverLetter.name || 'Selected file'}
              </Text>
              <TouchableOpacity onPress={() => clearDoc('cover')}>
                <Ionicons name="trash-outline" size={18} color="#c00" />
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.subtle}>No cover letter selected.</Text>
          )}
        </View>
        <TouchableOpacity style={styles.outlineButton} onPress={() => pickPdf(doc => setCoverLetter(doc))}>
          <Ionicons name="cloud-upload-outline" size={18} color="#1788f1ff" />
          <Text style={styles.outlineButtonText}>Select</Text>
        </TouchableOpacity>
      </View>

      {/* Submit */}
      <TouchableOpacity
        style={[styles.primaryButton, { alignSelf: 'flex-start', paddingHorizontal: 16, marginTop: 24 }]}
        onPress={() => navigation.navigate('StudentTabs')}
      >
        <Text style={styles.primaryButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default StudentApplication;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: '20%' },
  content: { padding: 16, paddingBottom: 40 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.select({ ios: 12, android: 8 }),
    backgroundColor: '#fafafa',
  },
  primaryButton: {
    backgroundColor: '#1788f1ff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryButtonText: { color: '#fff', fontWeight: '700' },
  subtle: { color: '#666', marginTop: 8 },
  tagsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#eef5ff',
    borderWidth: 1,
    borderColor: '#d0e6ff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: { color: '#144e9c', fontWeight: '600' },
  selectedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f4f8ff',
    borderWidth: 1,
    borderColor: '#e0eaff',
  },
  selectedText: { flex: 1, fontWeight: '600', color: '#0a3d91' },
  list: { marginTop: 8, maxHeight: 260, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  listItemText: { color: '#111' },
  docRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 12 },
  docLabel: { fontWeight: '600', color: '#111', marginBottom: 6 },
  docBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f4f8ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0eaff',
    marginTop: 4,
  },
  docName: { flex: 1, color: '#0a3d91' },
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#1788f1ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  outlineButtonText: { color: '#1788f1ff', fontWeight: '700' },
  helpText: { color: '#666', marginBottom: 6 },
});
