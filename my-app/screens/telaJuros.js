// screens/TelaJuros.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function TelaJuros() {
  const [valorProduto, setValorProduto] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [totalPagamento, setTotalPagamento] = useState('');

  const calcularPagamento = () => {
    const valor = parseFloat(valorProduto);
    const taxa = parseFloat(taxaJuros);
    const total = valor + (valor * (taxa / 100));
    setTotalPagamento(total.toFixed(2));
  };

  return (
    <View>
      <Text>Tela de Juros</Text>
      <TextInput
        placeholder="Valor do Produto"
        value={valorProduto}
        onChangeText={setValorProduto}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Taxa de Juros (%)"
        value={taxaJuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
      />
      <Button title="Calcular Pagamento" onPress={calcularPagamento} />
      <Text>Total do Pagamento: {totalPagamento}</Text>
    </View>
  );
}
