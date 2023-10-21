import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre em Contato</Text>
      <Text style={styles.contactInfo}>Telefone: (11) 1234-5678</Text>
      <Text style={styles.contactInfo}>E-mail: contato@servicosocial.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  contactInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ContactScreen;
