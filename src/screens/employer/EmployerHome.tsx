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
import { recentActivities } from '../../auth/utils/RecentActivity';


const EmployerHome = () => {
  const [isRecentActivity, setIsRecentActivity] = useState(true);

  return (
    <ScrollView contentContainerStyle={style.container}>
      {/* Headers */}
      <View style={style.innerContainer}>
        <Ionicons name="business-outline" size={22} color="white" />
        <Text style={style.dashboardText}>Dashboard</Text>
        <Ionicons name="notifications-outline" size={22} color="white" />
      </View>

      {/* New job button */}
      <Pressable style={style.postJobButton}>
        <Text style={[style.postJobText, { fontSize: 22 }]}>+</Text>
        <Text style={[style.postJobText, { fontSize: 19 }]}>
          Post a New Job
        </Text>
      </Pressable>
      {/** AI Matches */}
      <Pressable style={style.aiMatches}>
        <Ionicons name="bulb-outline" size={22} color="white" />
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
          {' '}
          View AI Matches
        </Text>
      </Pressable>
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
              <View
                key={index}
                style={style.recentView}
              >
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', minWidth: 0 }}>
                  <Image
                    source={{ uri: activity.avatarUrl }}
                    style={style.avtarImage}
                  />
                  <View style={{ flex: 1, minWidth: 0, marginLeft: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'white',
                        fontWeight: '400',
                        lineHeight: 22,
                        flexShrink: 1,
                        marginBottom: 4,
                      }}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
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
        <View></View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 70,
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
  recentView:{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 14,
                  borderBottomWidth: 1,
                  borderBottomColor: '#1E293B',
                  width: '100%',
                  minWidth: 0,
                }
});

export default EmployerHome;
