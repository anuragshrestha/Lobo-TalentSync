import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import EmployerHome from './EmployerHome';
import EmployerJob from './EmployerJob';
import EmployerCandidates from './EmployerCandidates';
import EmployerChat from './EmployerChat';
import EmployerProfile from './EmployerProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const EmployerTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0F172A',
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
      <Tab.Screen name="EmployerHome" component={EmployerHome} options={{tabBarLabel: 'Dashboard'}}/>
      <Tab.Screen name="EmployerJob" component={EmployerJob} options={{tabBarLabel: 'Job'}}/>
      <Tab.Screen name="EmployerCandidates" component={EmployerCandidates} options={{tabBarLabel: 'Candidates'}}/>
      <Tab.Screen name="EmployerChat" component={EmployerChat} options={{tabBarLabel: 'Chat'}}/>
      <Tab.Screen name="EmployerProfile" component={EmployerProfile} options={{tabBarLabel: 'Profile'}} />
    </Tab.Navigator>
  );
};

export default EmployerTabs;
