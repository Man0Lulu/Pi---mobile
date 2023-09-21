import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Titulo from '../components/Titulo';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEntrar = () => {
    console.log(email, senha);
    props.onLogin();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
      <Titulo>Login</Titulo>
      <TextInput
        label={'E-mail'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label={'senha'}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button onPress={handleEntrar}>Entrar</Button>
    </View>
  );
};

export default Login;
