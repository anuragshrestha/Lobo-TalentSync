import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TalentSyncLanding from './src/screens/TalentSyncLanding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import StudentSignUp from './src/screens/StudentSignUp';
import EmployerSignin from './src/screens/EmployerSignin';
import EmployerSignUp from './src/screens/EmployerSignUp';

type RootStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  StudentSignUp: undefined;
  EmployerSignin: undefined;
  EmployerSignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={TalentSyncLanding} options={{headerShown: false}}/>
          <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
          <Stack.Screen name='StudentSignUp' component={StudentSignUp}  options={{headerShown: false}}/>
          <Stack.Screen name='EmployerSignin' component={EmployerSignin}  options={{headerShown: false}}/>
          <Stack.Screen name='EmployerSignUp' component={EmployerSignUp}  options={{headerShown: false}}/>
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
