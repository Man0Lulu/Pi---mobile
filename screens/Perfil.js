import { useContext, useEffect, useState } from "react";
import { LinhaHorizontal, ContainerTelas } from "../styles/StylesGlobal";
import { TextInputPerfil, ContainerPerfil, ContainerInput, ContainerBotao, TextEmail, TextTrocarSenha, TextTitulo, TextDeseja, TextDeletar, ContainerDeletar } from "../styles/PerfilStyles"
import { ContainerDefaultHabitoImage, ContainerPosicaoDefaultImagem } from '../styles/CriarHabitoStyles';
import { Image } from 'react-native';
import Botao from "../components/Botao";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserContext from "../contexts/UserContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import Aviso from "../components/Aviso";

const Perfil = () => {

    const [novasenha, setNovaSenha] = useState();
    const [senha, setSenha] = useState();
    const { usuario, handleAlterarFoto, foto, handleTrocarSenha, handleDeletarUsuario } = useContext(UserContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        if (foto !== null) {
            setSelectedImage(foto);
        }
    }, [foto]);

    const handleImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].base64);
            handleAlterarFoto(result.assets[0].base64)
        }
    }

    const handleTrocarSenhaButton = () => {
        handleTrocarSenha(senha, novasenha);
    }
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleDeletar = () => {
        handleDeletarUsuario(usuario.userId);
    }

    return (
        <ContainerTelas>
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                extraHeight={100}
            >
                <LinhaHorizontal />
                <TextTitulo>Perfil</TextTitulo>
                <TouchableOpacity onPress={() => handleImagePicker()}>
                    {selectedImage ? (
                        <Image style={{ marginLeft: 30, marginTop: 8, width: 120, height: 120, borderRadius: 20, overflow: 'hidden' }} source={{ uri: 'data:image/jpeg;base64,' + selectedImage }} />
                    ) : (
                        <>
                            <ContainerPosicaoDefaultImagem>
                                <Image style={{ width: 40, height: 40, tintColor: '#B52178' }} source={require('../assets/icone-usuario.png')} />
                            </ContainerPosicaoDefaultImagem>
                            <ContainerDefaultHabitoImage />
                        </>
                    )}
                </TouchableOpacity>

                <ContainerPerfil>
                    <TextEmail>E-mail</TextEmail>
                </ContainerPerfil>
                <ContainerPerfil>
                    <TextEmail>{usuario.email}</TextEmail>
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
                    <Botao texto={"Salvar"} onPress={handleTrocarSenhaButton} />
                </ContainerBotao>

                <ContainerDeletar>
                    <TextDeseja>Deseja deletar sua conta? <TextDeletar onPress={toggleModal}>Deletar</TextDeletar></TextDeseja>
                </ContainerDeletar>

                <Modal isVisible={isModalVisible}>
                    <Aviso texto={"a conta"} toggleModal={toggleModal} funcionalidade={handleDeletar}/>
                </Modal>
            </KeyboardAwareScrollView>
        </ContainerTelas>
    );
};

export default Perfil;
