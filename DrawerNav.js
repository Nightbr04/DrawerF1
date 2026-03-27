import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculadora from './Calculadora-drawer/components/Calculadora';
import Historico from './Calculadora-drawer/components/Historico';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  const [historico, setHistorico] = useState([]); 

  const adicionarAoHistorico = (calculo) => {
    setHistorico([calculo, ...historico]); 
  };

  return (
    <Drawer.Navigator initialRouteName="CalculadoraScreen">
      <Drawer.Screen name="CalculadoraScreen" options={{ title: 'Calculadora' }}>
        {(props) => <Calculadora {...props} onSalvarCalculo={adicionarAoHistorico} />}
      </Drawer.Screen>
      
      <Drawer.Screen name="HistoricoScreen" options={{ title: 'Histórico' }}>
        {(props) => <Historico {...props} dados={historico} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}