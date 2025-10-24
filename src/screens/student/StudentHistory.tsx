import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History</Text>
    </View>
  );
};

export default StudentHistory;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20, fontWeight: '600' },
});

