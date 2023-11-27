import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { TextInputLogin, TextTitleLogin, ContainerInput, ContainerBotao, ContainerCadastrar, Logo, TextCadastrar, TextAindaNaoPossui } from '../styles/LoginStyles';
import { ContainerApp } from '../styles/StylesGlobal';
import { Image } from 'react-native';
import Botao from '../components/Botao';
import UserContext from '../contexts/UserContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const {handleLogin} = useContext(UserContext);

  const handleEntrar = () => {
    handleLogin(email,senha);
    
  };

const navigation = useNavigation();

  return (
    <ContainerApp>
       <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                extraHeight={100}
                >
      <Logo>
        <Image  style={{width:250, height:180}}
        source={require('../assets/logo-no-background.png')} />
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
        <TextAindaNaoPossui>Não possui conta? <TextCadastrar onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</TextCadastrar></TextAindaNaoPossui>
      </ContainerCadastrar>
      </KeyboardAwareScrollView>
    </ContainerApp>
  );
};

export default Login;
