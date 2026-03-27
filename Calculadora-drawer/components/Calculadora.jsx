import React, { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Calculadora({ onSalvarCalculo }) { 
  const [display, setDisplay] = useState('');

  // --- FUNÇÕES QUE ESTAVAM FALTANDO ---
  const onPressNumero = (n) => {
    setDisplay(display + n);
  };

  const onPressLimpar = () => {
    setDisplay('');
  };

  const onPressOperador = (op) => {
    // Evita colocar dois operadores juntos
    if (display === '' || display.endsWith(' ')) return;
    setDisplay(display + ' ' + op + ' ');
  };
  // ------------------------------------

  const onPressIgual = () => {
    try {
      // O eval resolve a string matemática (ex: "2 + 2")
      const resultado = eval(display);
      const operacaoCompleta = `${display} = ${resultado}`;
      
      setDisplay(String(resultado));
      
      if(onSalvarCalculo) onSalvarCalculo(operacaoCompleta); 
      
    } catch (e) {
      setDisplay('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <Text style={styles.display}>{display || '0'}</Text>

      <View style={styles.linha}>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('1')}>1</Button>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('2')}>2</Button>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('3')}>3</Button>
      </View>

      <View style={styles.linha}>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('4')}>4</Button>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('5')}>5</Button>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('6')}>6</Button>
      </View>

      <View style={styles.linha}>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('7')}>7</Button>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('8')}>8</Button>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('9')}>9</Button>
      </View>

      <View style={styles.linha}>
        <Button mode="contained" buttonColor="#1565C0" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressNumero('0')}>0</Button>
        <Button mode="contained" buttonColor="#000000" style={styles.botao} labelStyle={styles.labelBotao} onPress={onPressLimpar}>C</Button>
      </View>

      <View style={styles.linha}>
        <Button mode="contained" buttonColor="#000000" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressOperador('+')}>+</Button>
        <Button mode="contained" buttonColor="#000000" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressOperador('-')}>-</Button>
        <Button mode="contained" buttonColor="#000000" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressOperador('*')}>*</Button>
        <Button mode="contained" buttonColor="#000000" style={styles.botao} labelStyle={styles.labelBotao} onPress={() => onPressOperador('/')}>/</Button>
      </View>

      <Button mode="contained" buttonColor="#000000" style={styles.botaoIgual} labelStyle={styles.labelBotao} onPress={onPressIgual}>=</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50, gap: 12, backgroundColor: '#121212' },
  titulo: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#ffffff' },
  display: { fontSize: 42, textAlign: 'right', borderWidth: 1, borderColor: '#1565C0', padding: 15, borderRadius: 8, color: '#ffffff', backgroundColor: '#1e1e1e' },
  linha: { flexDirection: 'row', gap: 10 },
  botao: { flex: 1, height: 65, justifyContent: 'center', borderRadius: 10 },
  botaoIgual: { height: 65, justifyContent: 'center', borderRadius: 10 },
  labelBotao: { fontSize: 24, fontWeight: 'bold' },
});