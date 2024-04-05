// screens/TelaLogin.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaLogin({ navigation }) {
  const loginUser = () => {
    // Lógica para autenticar o usuário
    // Por simplicidade, vamos assumir que o login é válido
    navigation.navigate('TelaEscolha');
  };

  return (
    <View>
      <Text>Tela de Login</Text>
      <Button title="Login" onPress={loginUser} />
    </View>
  );
}
