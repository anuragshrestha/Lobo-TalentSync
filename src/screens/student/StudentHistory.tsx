import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { AppliedJobs } from '../../auth/utils/JobCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StudentHistory = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {AppliedJobs.map((job, index) => (
        <View style={styles.jobCard} key={index}>
          <View style={styles.row}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Image source={{ uri: job.logoUrl }} style={styles.logo} />
              <View>
                <Text style={styles.title}>{job.title}</Text>
                <Text>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
              </View>
            </View>

            <Ionicons name="ellipsis-horizontal" size={18} color="#444" style={{marginRight: 20}}/>
          </View>
          <Text style={styles.appliedText}>{job.appliedAt}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default StudentHistory;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingLeft: 10,
  },
  jobCard: {
    marginBottom: 15,
    width: '100%',
    borderBottomWidth: 1, 
    borderBottomColor: 'gray',

  },
  row: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  location: {
    fontSize: 13,
    color: 'gray',
  },
  appliedText: {
    fontSize: 13,
    color: '#8d8a8a',
    marginTop: 4,
    marginLeft: 56,
    marginBottom: 5
  },
});
