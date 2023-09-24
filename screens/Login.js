import { useState } from 'react';

import { withTheme } from 'react-native-paper';
import { ContainerLogin, TextInputLogin, TextTitleLogin, ContainerInput, ContainerBotao, ContainerCadastrar, Logo, TextCadastrar, TextAindaNaoPossui } from '../styles/LoginStyles';
import Botao from '../components/Botao';
import LogoSVG from '../components/LogoSVG';

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
      <Logo>
        <LogoSVG width='250' height='160'/>
      </Logo>
      <TextTitleLogin>Entrar!</TextTitleLogin>
      <ContainerInput>
        <TextInputLogin
          label={'E-mail'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='E-mail'
          placeholderTextColor="#808080"
        />
        <TextInputLogin
          label={'senha'}
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder='Senha'
          placeholderTextColor="#808080"
        />
      </ContainerInput>
      <ContainerBotao>
        <Botao onPress={handleEntrar} texto={"Acessar"} />
      </ContainerBotao>
      <ContainerCadastrar>
        <TextAindaNaoPossui>Não possui conta? <TextCadastrar>Cadastre-se</TextCadastrar></TextAindaNaoPossui>
       
      </ContainerCadastrar>
    </ContainerLogin>
  );
};

export default withTheme(Login);
