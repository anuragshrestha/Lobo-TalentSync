import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import EmployerHome from './EmployerHome';
import EmployerJob from './EmployerJob';
import EmployerCandidates from './EmployerCandidates';
import EmployerChat from './EmployerChat';
import EmployerProfile from './EmployerProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const BG = '#0F172A';
const getBarStyle = (hex: string) => {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 140 ? 'light-content' : 'dark-content';
};

const FocusAwareStatusBar = ({ backgroundColor, barStyle }: { backgroundColor: string; barStyle: 'light-content' | 'dark-content' }) => {
  const isFocused = useIsFocused();
  if (!isFocused) return null;
  return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />;
};

const ScreenWrapper = ({ children, bg = BG }: { children: React.ReactNode; bg?: string }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: bg }}>
    <FocusAwareStatusBar backgroundColor={bg} barStyle={getBarStyle(bg)} />
    <View style={{ flex: 1, backgroundColor: bg }}>{children}</View>
  </SafeAreaView>
);

const EmployerTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: BG,
          borderTopWidth: 0,
          height: 85,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          paddingBottom: 4,
    
        },
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'ellipse-outline';
          if (route.name === 'EmployerHome') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'EmployerJob') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'EmployerCandidates') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'EmployerChat') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          } else if (route.name === 'EmployerProfile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="EmployerHome" options={{ tabBarLabel: 'Dashboard' }}>
        {() => (
          <ScreenWrapper>
            <EmployerHome />
          </ScreenWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="EmployerJob" options={{ tabBarLabel: 'Job' }}>
        {() => (
          <ScreenWrapper>
            <EmployerJob />
          </ScreenWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="EmployerCandidates" options={{ tabBarLabel: 'Candidates' }}>
        {() => (
          <ScreenWrapper>
            <EmployerCandidates />
          </ScreenWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="EmployerChat" options={{ tabBarLabel: 'Chat' }}>
        {() => (
          <ScreenWrapper>
            <EmployerChat />
          </ScreenWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="EmployerProfile" options={{ tabBarLabel: 'Profile' }}>
        {() => (
          <ScreenWrapper>
            <EmployerProfile />
          </ScreenWrapper>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default EmployerTabs;
