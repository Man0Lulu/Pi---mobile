import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInputLogin, TextTitleLogin, ContainerInput, ContainerBotao, ContainerCadastrar, Logo, TextCadastrar, TextAindaNaoPossui } from '../styles/LoginStyles';
import { ContainerTelas } from '../styles/StylesGlobal';
import { Image, Text} from 'react-native';
import Botao from '../components/Botao';
import UserContext from '../contexts/UserContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { handleLogin } = useContext(UserContext);
  const navigation = useNavigation();

  const onSubmit = (data) => {
    handleLogin(data.email, data.senha);
  };

  return (
    <ContainerTelas>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        extraHeight={100}
      >
        <Logo>
          <Image style={{ width: 250, height: 180 }} source={require('../assets/logo-no-background.png')} />
        </Logo>
        <TextTitleLogin>Entrar!</TextTitleLogin>
        <ContainerInput>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInputLogin
                label={'E-mail'}
                keyboardType={'email-address'}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
                placeholder='E-mail'
                placeholderTextColor="#808080"
              />
            )}
            name="email"
            rules={{ required: 'E-mail é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' } }}
            defaultValue=""
          />
          {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
          <Controller
            control={control}
            render={({ field }) => (
              <TextInputLogin
                label={'Senha'}
                secureTextEntry={true}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
                placeholder='Senha'
                placeholderTextColor="#808080"
              />
            )}
            name="senha"
            rules={{ required: 'Senha é obrigatória', minLength: { value: 4, message: 'A senha deve ter pelo menos 4 caracteres' } }}
            defaultValue=""
          />
          {errors.senha && <Text style={{ color: 'red' }}>{errors.senha.message}</Text>}
        </ContainerInput>
        <ContainerBotao>
          <Botao onPress={handleSubmit(onSubmit)} texto={"Acessar"} />
        </ContainerBotao>
        <ContainerCadastrar>
          <TextAindaNaoPossui>Não possui conta? <TextCadastrar onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</TextCadastrar></TextAindaNaoPossui>
        </ContainerCadastrar>
      </KeyboardAwareScrollView>
    </ContainerTelas>
  );
};

export default Login;