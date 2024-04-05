// screens/TelaSwitch.js
import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function TelaSwitch() {
  const [exibirImagem, setExibirImagem] = useState(false);

  const alternarImagem = () => {
    setExibirImagem(!exibirImagem);
  };

  return (
    <View>
      <Text>Tela de Switch</Text>
      <Button title="Alternar Imagem" onPress={alternarImagem} />
      {exibirImagem && <Image source={require('../assets/caminho.jpg')} />}
    </View>
  );
}
