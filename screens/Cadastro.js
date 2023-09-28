import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { TextInputCadastro, ContainerInput, ContainerBotao, Logo, TextJaTemConta, TextAcessar } from '../styles/CadastroStyles';
import { ContainerApp } from '../styles/StylesGlobal';
import { Image } from 'react-native';
import Botao from '../components/Botao';
import UserContext from '../contexts/UserContext';

const Cadastro = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [nome, setNome] = useState();
    const [data, setData] = useState();

    const { handleCadastro } = useContext(UserContext);

    const handleCadastrar = () => {
        handleCadastro();
    };

const navigation = useNavigation();    

    return (
        <ContainerApp>
            <Logo>
                <Image style={{ width: 250, height: 180 }}
                    source={require('../assets/logo-no-background.png')} />
            </Logo>
            <ContainerInput>
                <TextInputCadastro
                    label={'Nome'}
                    secureTextEntry={true}
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    placeholder='Nome'
                    placeholderTextColor="#808080"
                />
                <TextInputCadastro
                    label={'E-mail'}
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder='E-mail'
                    placeholderTextColor="#808080"
                />
                <TextInputCadastro
                    label={'Data-Nasc'}
                    keyboardType={'numeric'}
                    value={data}
                    onChangeText={(text) => setData(text)}
                    placeholder='Data de Nascimento'
                    placeholderTextColor="#808080"
                />
                <TextInputCadastro
                    label={'senha'}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    placeholder='Senha'
                    placeholderTextColor="#808080"
                />
            </ContainerInput>
            <ContainerBotao>
                <Botao onPress={handleCadastrar} texto={"Cadastrar-se"} />
            </ContainerBotao>
            <TextJaTemConta>Ja tem uma conta?<TextAcessar onPress={() => navigation.navigate('Login')}> Acessar</TextAcessar></TextJaTemConta>
        </ContainerApp>
    );
};

export default Cadastro;
