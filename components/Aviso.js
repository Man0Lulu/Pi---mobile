import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Aviso = ({ texto, toggleModal, funcionalidade }) => {
    const handleDeletar = () => {
        toggleModal();
        funcionalidade();
    }
  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Deseja deletar {texto}?</Text>
      <Text style={styles.subText}>
        Você tem certeza de que deseja deletar {texto}?
      </Text>
      <TouchableOpacity style={styles.abrirAvisoButton} onPress={() => handleDeletar()}>
        <Text style={styles.abrirAvisoText}>Deletar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.abrirAvisoButton} onPress={toggleModal}>
        <Text style={styles.abrirAvisoText}>Voltar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: 327,
    height: 324,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#FAFAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: '#1B202A',
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
  },
  subText: {
    color: '#808191',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  abrirAvisoButton: {
    display: 'flex',
    width: 287,
    height: 48,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 20,
    backgroundColor: '#B52178',
  },
  abrirAvisoText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Aviso;
