import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { jobs } from '../../utils/JobCard';
import JobDetailScreen from '../../components/JobDetailCard';

const StudentJob = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
       jobs.map((job, index) => (
        <JobDetailScreen key={index} job={job}/>
       ))
      }
    </ScrollView>
  );
};

export default StudentJob;

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: '20%' },
  text: { fontSize: 20, fontWeight: '600' },
});

