import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerNav from './DrawerNav'; 

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </PaperProvider>
  );
}