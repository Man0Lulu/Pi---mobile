import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MeuBotao = ({ texto, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    width: 228,
    height: 41,
    borderRadius: 20,
    backgroundColor: '#7E4882',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

export default MeuBotao;
