import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const StudentSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shoolYear, setSchoolYear] = useState('');
  const [major, setMajor] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assests/LoboImage.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Enter your school year"
          value={shoolYear}
          onChangeText={setSchoolYear}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your major"
          value={major}
          onChangeText={setMajor}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.account} onPress={() => navigation.navigate('StudentApplication')}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            Create an account
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', paddingTop: 70 }}>
          <Text style={{ marginRight: 5, fontSize: 18, fontWeight: '500' }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('StudentSignIn')}>
            <Text
              style={{ fontSize: 18, fontWeight: '500', color: '#1788f1ff' }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default StudentSignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: '10%',
    backgroundColor: 'white',
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: 40,
    marginBottom: 100,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '50%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '80%',
    maxWidth: 300,
    margin: 7,
  },
  account: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '80%',
    maxWidth: 300,
    margin: 7,
  },
});
