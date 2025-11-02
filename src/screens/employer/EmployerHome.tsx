import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  recentActivities,
  topCandidates,
} from '../../utils/RecentActivity';
import { useNavigation } from '@react-navigation/native';

const EmployerHome = () => {
  const [isRecentActivity, setIsRecentActivity] = useState(true);
  const navigation = useNavigation<any>();


  return (
    <ScrollView contentContainerStyle={style.container}>
      {/* Headers */}
      <View style={style.innerContainer}>
        <Ionicons name="business-outline" size={22} color="white" />
        <Text style={style.dashboardText}>Dashboard</Text>
        <Ionicons name="notifications-outline" size={22} color="white" />
      </View>

      {/* New job button */}
      {/* <Pressable style={style.postJobButton} onPress={() => navigation.navigate('CreateNewJob')}>
        <Text style={[style.postJobText, { fontSize: 22 }]}>+</Text>
        <Text style={[style.postJobText, { fontSize: 19 }]}>
          Post a New Job
        </Text>
      </Pressable> */}
      {/** AI Matches */}
      {/* <Pressable style={style.aiMatches} onPress={() => navigation.navigate('AIMatches')}>
        <Ionicons name="bulb-outline" size={22} color="white" />
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
          {' '}
          View AI Matches
        </Text>
      </Pressable> */}
      {/*Active Jobs */}
      <View style={style.activeJobsView}>
        <Text style={style.activeJobText}>Active Jobs</Text>
        <Text style={style.jobNumber}> 12</Text>
        <Text style={style.jobViewAll}>View All</Text>
      </View>
      {/*New Applications Section*/}
      <View style={style.activeJobsView}>
        <Text style={style.activeJobText}>New Applications</Text>
        <Text style={style.jobNumber}> 20</Text>
        <Text style={style.jobViewAll}>Review Now</Text>
      </View>
      {/* Recent Activity and Top Candidates */}
      <View style={style.recentActivity}>
        <Pressable
          onPress={() => setIsRecentActivity(true)}
          style={[
            style.recentPress,
            {
              borderBottomWidth: isRecentActivity ? 2 : 0,
              borderBottomColor: isRecentActivity ? '#37a8f3ff' : 'transparent',
            },
          ]}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: isRecentActivity ? '#37a8f3ff' : '#aeababff',
            }}
          >
            Recent Activity
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setIsRecentActivity(false)}
          style={[
            style.recentPress,
            {
              borderBottomWidth: !isRecentActivity ? 2 : 0,
              borderBottomColor: !isRecentActivity
                ? '#37a8f3ff'
                : 'transparent',
            },
          ]}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: !isRecentActivity ? '#37a8f3ff' : '#aeababff',
            }}
          >
            Top Candidates
          </Text>
        </Pressable>
      </View>

      {isRecentActivity ? (
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            paddingTop: 8,
          }}
        >
          <View style={{ paddingHorizontal: 12, width: '100%' }}>
            {recentActivities.map((activity, index) => (
              <View key={index} style={style.recentView}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    minWidth: 0,
                  }}
                >
                  <Image
                    source={{ uri: activity.avatarUrl }}
                    style={style.avtarImage}
                  />
                  <View style={{ flex: 1, minWidth: 0, marginLeft: 12 }}>
                    <Text style={style.description} numberOfLines={2} ellipsizeMode="tail">
                      {activity.description}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>
                      {activity.time}
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={{
                    marginLeft: 12,
                    alignSelf: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Text
                    style={{
                      color: '#37a8f3ff',
                      fontWeight: '700',
                    }}
                  >
                    {activity.actionText}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      ) : (
        //  {/** Top Candidates */}
        <View
          style={{ width: '90%', alignSelf: 'center', paddingTop: 12, gap: 12 }}
        >
          {topCandidates.map(c => (
            <View key={c.id} style={style.card}>
              {/* Left: avatar */}
              <Image source={{ uri: c.avatarUrl }} style={style.avatar} />

              {/* Middle: text */}
              <View style={style.mid}>
                <Text style={style.name} numberOfLines={1}>
                  {c.name}
                </Text>
                <Text style={style.role} numberOfLines={1}>
                  {c.role}
                </Text>

                {/* tags */}
                <View style={style.tagsRow}>
                  {c.tags.slice(0, 4).map((t, i) => (
                    <View key={i} style={style.tag}>
                      <Text style={style.tagText}>{t}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Right: match + button */}
              <View style={style.right}>
                <View style={style.matchPill}>
                  <Text style={style.matchText}>{c.match}%</Text>
                  <Text style={style.matchSub}>Match</Text>
                </View>
                <Pressable
                  style={style.connectBtn}
                  onPress={() => {
                    /* connect */
                  }}
                >
                  <Text style={style.connectText}>Connect</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    flexGrow: 1,
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aeababff',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  dashboardText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  postJobButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#37a8f3ff',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: '90%',
    marginTop: 10,
  },
  postJobText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    alignItems: 'center',
  },
  aiMatches: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#929090ea',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: '90%',
    marginTop: 10,
  },
  activeJobsView: {
    borderRadius: 18,
    backgroundColor: '#020409ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
    marginTop: 20,
    alignItems: 'flex-start',
  },
  activeJobText: {
    fontSize: 16,
    color: 'gray',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  jobNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  jobViewAll: {
    fontSize: 14,
    color: '#37a8f3ff',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  recentActivity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#aeababff',
    width: '90%',
  },
  recentPress: {
    paddingBottom: 8,
    flex: 1,
    alignItems: 'center',
  },
  avtarImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 1,
  },
  recentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    width: '100%',
    minWidth: 0,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 12,
    borderRadius: 14,
    backgroundColor: '#020409ff',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  mid: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    color: '#E5E7EB',
    fontSize: 14,
  },
  subtle: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  tag: {
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#0B2942',
    borderWidth: 1,
    borderColor: '#1f3b5c',
  },
  tagText: {
    color: '#94C2FF',
    fontSize: 12,
    fontWeight: '600',
  },
  right: {
    alignItems: 'flex-end',
    gap: 10,
  },
  matchPill: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#0B2A21',
    borderWidth: 1,
    borderColor: '#124F3A',
  },
  matchText: {
    color: '#34D399',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 18,
  },
  matchSub: {
    color: '#86efac',
    fontSize: 10,
    marginTop: 2,
  },
  connectBtn: {
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  connectText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  description: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    lineHeight: 22,
    flexShrink: 1,
    marginBottom: 4,
  },
});

export default EmployerHome;
