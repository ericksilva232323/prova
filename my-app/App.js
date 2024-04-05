// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/telaLogin';
import TelaEscolha from './screens/telaEscolha';
import TelaSwitch from './screens/telaSwitch';
import TelaJuros from './screens/telaJuros';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaEscolha" component={TelaEscolha} />
        <Stack.Screen name="TelaSwitch" component={TelaSwitch} />
        <Stack.Screen name="TelaJuros" component={TelaJuros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
