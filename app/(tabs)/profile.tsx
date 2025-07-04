import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabTwoScreen() {
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    getUserMail();
  });

  async function getUserMail() {
    try {
      const userEmail = await AsyncStorage.getItem('userEmail');
      if (userEmail !== null) {
        setUserEmail(userEmail);
      }
    } catch (e) {
      console.error('Error retrieving data:', e);
    }
    return null;
  }

  return (
    <View>
      <Text style={styles.userMail}>Email: {userEmail}</Text>
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
});
