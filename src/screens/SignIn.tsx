import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/LoboImage.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        <TextInput
          value={email}
          placeholder="Enter you UNM email"
          onChangeText={setEmail}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          value={password}
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',paddingTop: 70 }}>
            <Text style={{marginRight: 5, fontSize: 18, fontWeight: '500'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('StudentSignUp')}>
                <Text style={{fontSize: 18, fontWeight: '500', color:'#1788f1ff'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: 140,
    marginBottom: 40,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '60%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '80%',
    maxWidth: 300,
    margin: 5,
  },
  signinButton: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'white',
    width: '80%',
    maxWidth: 300,
    paddingVertical: 16,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#1788f1ff',
  },
  signinText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
