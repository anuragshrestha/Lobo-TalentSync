import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentJob = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Job</Text>
    </View>
  );
};

export default StudentJob;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20, fontWeight: '600' },
});

