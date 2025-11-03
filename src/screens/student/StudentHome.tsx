import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { posts } from '../../utils/PostCard';
import HomePostCard from '../../components/HomePostCard';

const StudentHome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((post, index) => (
        <HomePostCard key={index} post={post} />
      ))}
    </ScrollView>
  );
};

export default StudentHome;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: '20%'
  },
  text: { fontSize: 20, fontWeight: '600' },
});
