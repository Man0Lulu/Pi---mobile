import { useState } from 'react';
import { withTheme } from 'react-native-paper';
import Botao from '../components/Botao';
import { ContainerLogin, TextInputLogin, TextTitleLogin, LinhaHorizontalLogin, ContainerInput, ContainerBotao, ContainerCadastrar, Logo } from './LoginStyles';

const Login = (props) => {
  const { colors } = props.theme;

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEntrar = () => {
    console.log(email, senha);
    props.onLogin();
  };

  return (
    <ContainerLogin primaryColor={colors.primary}>
      <Logo source={require('../assets/snack-icon.png')}/>
      <TextTitleLogin>Entrar</TextTitleLogin>
      <LinhaHorizontalLogin/>
      <ContainerInput>
      <TextInputLogin
        label={'E-mail'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='E-mail'
      />
      <TextInputLogin
        label={'senha'}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder='Senha'
      />
      </ContainerInput>
      <ContainerBotao>
      <Botao onPress={handleEntrar} texto={"Acessar"} />
      </ContainerBotao>
      <LinhaHorizontalLogin/>
      <ContainerCadastrar>
        <TextTitleLogin>Cadastre-se</TextTitleLogin>
      </ContainerCadastrar>
    </ContainerLogin>
  );
};

export default withTheme(Login);
