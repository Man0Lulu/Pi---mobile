import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const MeuBotao = ({ texto, onPress }) => {
  return (
    <TouchableHighlight style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableHighlight>
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
