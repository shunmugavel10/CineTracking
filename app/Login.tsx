import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

export default function LoginScreen() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  //Validate username and password and navigate to Tabs
  //TODO : Just implemented with hard coded. Need to implement actuial functionality.
  const login = () => {
    if(userEmail === 'svel@test.com' && userPassword === 'svel123'){
      navigation.navigate('(tabs)');
    }
  };

  return (
    <View>
      <Text style={styles.userMail}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userEmail}
        onChangeText={text => setUserEmail(text)}
      />
      <Text style={styles.userMail}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={userPassword}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  userMail: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    flex: 1, // Allows the TextInput to take up available space
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    color: 'black'
  },
});
