import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextInputCadastro, ContainerInput, ContainerBotao, Logo, TextJaTemConta,
  TextAcessar, ContainerCadastro, ContainerIcone, TextTitleCadastro
} from '../styles/CadastroStyles';
import { ContainerTelas } from '../styles/StylesGlobal';
import { Image } from 'react-native';
import Botao from '../components/Botao';
import UserContext from '../contexts/UserContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Cadastro = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { handleCadastrar } = useContext(UserContext);
  const navigation = useNavigation();

  const onSubmit = (data) => {
    handleCadastrar(data.nome, data.email, data.dataNascimento, data.senha);
    navigation.navigate('Login');
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
          <Image style={{ width: 250, height: 180 }}
            source={require('../assets/logo-no-background.png')} />
        </Logo>

        <TextTitleCadastro>Cadastre-se!</TextTitleCadastro>
        <ContainerInput>
          <ContainerCadastro>
            <ContainerIcone>
              <Image style={{ width: 29, height: 29 }}
                source={require('../assets/icone-usuario.png')} />
            </ContainerIcone>

            <Controller
              control={control}
              render={({ field }) => (
                <TextInputCadastro
                  label={'Nome'}
                  value={field.value}
                  onChangeText={(text) => field.onChange(text)}
                  placeholder='Nome Completo'
                  placeholderTextColor="#808080"
                />
              )}
              name="nome"
              rules={{ required: 'Nome é obrigatório' }}
              defaultValue=""
            />
          </ContainerCadastro>
          {errors.nome && <Text style={{ color: 'red' }}>{errors.nome.message}</Text>}

          <ContainerCadastro>
            <ContainerIcone>
              <Image style={{ width: 29, height: 29 }}
                source={require('../assets/icone-email.png')} />
            </ContainerIcone>

            <Controller
              control={control}
              render={({ field }) => (
                <TextInputCadastro
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
          </ContainerCadastro>
          {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

          <ContainerCadastro>
            <ContainerIcone>
              <Image style={{ width: 25, height: 29, marginLeft: 3 }}
                source={require('../assets/icone-datanasc.png')} />
            </ContainerIcone>

            <Controller
              control={control}
              render={({ field }) => (
                <TextInputCadastro
                  label={'Data-Nasc'}
                  value={field.value}
                  onChangeText={(text) => field.onChange(text)}
                  placeholder='Data de Nascimento'
                  placeholderTextColor="#808080"
                />
              )}
              name="dataNascimento"
              rules={{ required: 'Data de Nascimento é obrigatória' }}
              defaultValue=""
            />
          </ContainerCadastro>
          {errors.dataNascimento && <Text style={{ color: 'red' }}>{errors.dataNascimento.message}</Text>}

          <ContainerCadastro>
            <ContainerIcone>
              <Image style={{ width: 29, height: 29 }}
                source={require('../assets/icone-senha.png')} />
            </ContainerIcone>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInputCadastro
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
          </ContainerCadastro>
          {errors.senha && <Text style={{ color: 'red' }}>{errors.senha.message}</Text>}
        </ContainerInput>
        <ContainerBotao>
          <Botao onPress={handleSubmit(onSubmit)} texto={"Cadastrar"} />
        </ContainerBotao>
        <TextJaTemConta>Já tem uma conta? <TextAcessar onPress={() => navigation.navigate('Login')}>Acessar</TextAcessar></TextJaTemConta>
      </KeyboardAwareScrollView>
    </ContainerTelas>
  );
};

export default Cadastro;
