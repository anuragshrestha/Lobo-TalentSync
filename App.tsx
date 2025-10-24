import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TalentSyncLanding from './src/screens/TalentSyncLanding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentSignUp from './src/auth/studentAuth/StudentSignUp';
import EmployerSignin from './src/auth/employerAuth/EmployerSignin';
import EmployerSignUp from './src/auth/employerAuth/EmployerSignUp';
import StudentTabs from './src/screens/student/StudentTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StudentSignIn from './src/auth/studentAuth/StudentSignIn';

type RootStackParamList = {
  Landing: undefined;
  StudentSignIn: undefined;
  StudentSignUp: undefined;
  EmployerSignin: undefined;
  EmployerSignUp: undefined;
  StudentTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
 
  Ionicons.loadFont();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={TalentSyncLanding} options={{headerShown: false}}/>
          <Stack.Screen name="StudentSignIn" component={StudentSignIn}  options={{headerShown: false}}/>
          <Stack.Screen name='StudentSignUp' component={StudentSignUp}  options={{headerShown: false}}/>
          <Stack.Screen name='EmployerSignin' component={EmployerSignin}  options={{headerShown: false}}/>
          <Stack.Screen name='EmployerSignUp' component={EmployerSignUp}  options={{headerShown: false}}/>
          <Stack.Screen name='StudentTabs' component={StudentTabs} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
