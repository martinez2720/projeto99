import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBOOD_2RThApxU-37Hd2HoFg1B-1MI-7tw",
  
    authDomain: "projeto100-29bfa.firebaseapp.com",
  
    projectId: "projeto100-29bfa",
  
    storageBucket: "projeto100-29bfa.appspot.com",
  
    messagingSenderId: "1038729595545",
  
    appId: "1:1038729595545:web:fa45154b25b4d4efb78608"
  
  };
  

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const MyComponent = () => {
  const usersCollection = firestore.collection('users');
 

  const addUser = () => {
    usersCollection.add({
      name: 'John',
      email: 'john@example.com'
    });
  };


  return (
    <View style={styles.container}>
      <Text onPress={addUser}>Add User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default firebase.firestore();