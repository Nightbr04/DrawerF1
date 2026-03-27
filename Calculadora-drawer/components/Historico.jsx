import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Historico({ dados }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Histórico</Text>
      
      {dados.length === 0 ? (
        <Text style={styles.subtitle}>Nenhum cálculo realizado ainda.</Text>
      ) : (
        <FlatList
          data={dados}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemHistorico}>
              <Text style={styles.textoItem}>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  subtitle: { fontSize: 16, color: '#666' },
  itemHistorico: { 
    padding: 15, 
    backgroundColor: '#fff', 
    marginBottom: 10, 
    borderRadius: 8,
    elevation: 2 
  },
  textoItem: { fontSize: 18, color: '#333' }
});