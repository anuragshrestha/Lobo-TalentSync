import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';

const EmployerSignUp = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const companies = useMemo(
    () => [
      'Microsoft',
      'Apple',
      'Sandia National Laboratories',
      'Los Alamos National Laboratory',
      'Google',
      'Amazon',
      'Meta',
      'Netflix',
      'Tesla',
      'SpaceX',
      'Intel',
      'IBM',
      'Oracle',
      'Adobe',
      'Salesforce',
      'Cisco',
      'NVIDIA',
      'Qualcomm',
      'Uber',
      'Airbnb',
    ],
    [],
  );

  const filteredCompanies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return companies;
    return companies.filter(c => c.toLowerCase().includes(q));
  }, [searchQuery, companies]);

  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assests/LoboImage.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        <View style={styles.autocompleteContainer}>
          <TouchableOpacity
            onPress={() => {
              setDropdownOpen(true);
              setSearchQuery('');
            }}
            activeOpacity={0.7}
            style={[styles.input, styles.selector]}
          >
            <Text
              style={
                companyName ? styles.selectorText : styles.selectorPlaceholder
              }
            >
              {companyName || 'Select company'}
            </Text>
            <Text style={styles.selectorIcon}>▾</Text>
          </TouchableOpacity>
          {dropdownOpen && (
            <View style={styles.dropdownPanel}>
              <TextInput
                placeholder="Search companies"
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#888"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.searchInput}
                autoFocus
              />
              {filteredCompanies.length > 0 ? (
                <FlatList
                  data={filteredCompanies}
                  keyboardShouldPersistTaps="handled"
                  keyExtractor={item => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        setCompanyName(item);
                        setDropdownOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  style={{ maxHeight: 220 }}
                />
              ) : searchQuery.trim().length > 0 ? (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCompanyName(searchQuery.trim());
                    setDropdownOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>
                    Use "{searchQuery.trim()}"
                  </Text>
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                style={styles.closeDropdown}
                onPress={() => setDropdownOpen(false)}
              >
                <Text style={styles.closeDropdownText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TextInput
          placeholder="Company email address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Company location"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#888"
          autoCapitalize="words"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Create Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.account}
          onPress={() => setShowModal(true)}
        >
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            Create account
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', paddingTop: 70 }}>
          <Text style={{ marginRight: 5, fontSize: 18, fontWeight: '500' }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmployerSignin')}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '500', color: '#1788f1ff' }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => {}}
        >
          <View style={styles.modalView}>
            <View style={styles.innerModalView}>
              <Text style={styles.congratsText}>Congratulation for Creating Employer Account</Text>
              <Text
                style={{ fontSize: 14, fontWeight: '400', marginBottom: 5 }}
              >
                Your Account will be reviewed by UNM Carreer Service team. We
                will notify you once there is update.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#ee5252ff',
                  textAlign: 'center',
                  marginBottom: 5,
                }}
              >
                Go Lobos🤘
              </Text>
              <View style={{ alignItems: 'center' }}>
                <Pressable
                  style={{
                    borderRadius: 12,
                    backgroundColor: '#1249bfff',
                    paddingVertical: 10,
                    paddingHorizontal: 8,
                    maxWidth: '25%',
                  }}
                  onPress={() => setShowModal(false)}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    Confrim
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default EmployerSignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: '10%',
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 28,
    color: '#111',
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
  autocompleteContainer: {
    width: '80%',
    position: 'relative',
    zIndex: 100,
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
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectorText: {
    fontSize: 16,
    color: '#111',
  },
  selectorPlaceholder: {
    fontSize: 16,
    color: '#888',
  },
  selectorIcon: {
    fontSize: 16,
    color: '#666',
  },
  dropdownPanel: {
    position: 'absolute',
    left: 7,
    right: 7,
    top: 58 /* sits over content, not pushing it */,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
    zIndex: 200,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#111',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#111',
  },
  closeDropdown: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  closeDropdownText: {
    color: '#2563eb',
    fontWeight: '600',
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
  modalView: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.22)',
  },
  innerModalView: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
  },
  congratsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#078609ff',
    marginBottom: 5,
    textAlign: 'center',
  },
});
