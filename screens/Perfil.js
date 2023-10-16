import { useState } from "react";
import { ContainerApp, LinhaHorizontal, ContainerTelas } from "../styles/StylesGlobal";
import { TextInputPerfil, ContainerPerfil, ContainerInput, ContainerBotao, TextEmail, TextTrocarSenha, TextTitulo } from "../styles/PerfilStyles"
import { Image } from 'react-native';
import Botao from "../components/Botao";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Perfil = () => {

    const [novasenha, setNovaSenha] = useState();
    const [senha, setSenha] = useState();

    return (
        <ContainerTelas>
              <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                extraHeight={100}
                >
            <LinhaHorizontal/>
                <TextTitulo>Perfil</TextTitulo>
                <ContainerPerfil>
                    <Image style={{ width: 100, height: 100, tintColor: '#B52178' }}
                        source={require('../assets/icone-usuario.png')} />
                </ContainerPerfil>

                <ContainerPerfil>
                    <TextEmail>E-mail</TextEmail>
                </ContainerPerfil>

                <ContainerPerfil>
                    <TextTrocarSenha>Trocar senha</TextTrocarSenha>
                </ContainerPerfil>

                <ContainerInput>
                    <ContainerPerfil>
                        <TextInputPerfil
                            label={'senha'}
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={(text) => setSenha(text)}
                            placeholder='Senha'
                            placeholderTextColor="#808080"
                        />
                        <TextInputPerfil
                            label={'novasenha'}
                            secureTextEntry={true}
                            value={novasenha}
                            onChangeText={(text) => setNovaSenha(text)}
                            placeholder='Nova Senha'
                            placeholderTextColor="#808080"
                        />
                    </ContainerPerfil>
                </ContainerInput>

                <ContainerBotao>
                    <Botao texto={"Salvar"} />
                </ContainerBotao>
            </KeyboardAwareScrollView>
        </ContainerTelas>
    );
};

export default Perfil;
