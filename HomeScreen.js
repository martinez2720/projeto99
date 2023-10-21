import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Angel Gabriel</Text>
      <Text style={styles.title2}>Seu app de serviços sociais</Text>
      <Text style={styles.welcomeMessage}>Olá, {userName}!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Services')}
      >
        <Text style={styles.buttonText}>Ver Serviços</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Meu Perfil</Text>
      </TouchableOpacity>

      <Button
        title="Configurações"
        onPress={() => navigation.navigate('Settings')}
      />
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
  title2: {
    fontSize: 18,
    marginTop: 20
  },
  welcomeMessage: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
