import 'react-native-gesture-handler';
import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculadora from './components/calculadora';
import Historico from './components/Historico.jsx';

const Drawer = createDrawerNavigator();

export default function App() {
  const [display, setDisplay] = useState('');
  const [historico, setHistorico] = useState([]);

  function onPressNumero(num) {
    setDisplay(display + num);
  }

  function onPressOperador(op) {
    setDisplay(display + ' ' + op + ' ');
  }

  function onPressIgual() {
    try {
      const resultado = String(eval(display));
      setHistorico([...historico, display + ' = ' + resultado]);
      setDisplay(resultado);
    } catch {
      setDisplay('Erro');
    }
  }

  function onPressLimpar() {
    setDisplay('');
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Calculadora">
          <Drawer.Screen name="Calculadora">
            {() => (
              <Calculadora
                display={display}
                onPressNumero={onPressNumero}
                onPressOperador={onPressOperador}
                onPressIgual={onPressIgual}
                onPressLimpar={onPressLimpar}
              />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Histórico">
            {() => <Historico historico={historico} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}