// screens/TelaEscolha.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaEscolha({ navigation }) {
  return (
    <View>
      <Text>Tela de Escolha</Text>
      <Button title="Tela de Switch" onPress={() => navigation.navigate('TelaSwitch')} />
      <Button title="Tela de Juros" onPress={() => navigation.navigate('TelaJuros')} />
    </View>
  );
}
