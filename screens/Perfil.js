import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Image, TouchableOpacity, Text } from 'react-native';

import { LinhaHorizontal, ContainerTelas } from '../styles/StylesGlobal';

import { TextEmailUsuario, TextInputPerfil, ContainerPerfil, ContainerInput, ContainerBotao, TextEmail, TextTrocarSenha, TextTitulo } from '../styles/PerfilStyles';
import { ContainerDefaultHabitoImage,ContainerPosicaoDefaultImagem } from '../styles/CriarHabitoStyles';

import Botao from '../components/Botao';

import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserContext from '../contexts/UserContext';

const Perfil = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { usuario, handleAlterarFoto, foto, handleTrocarSenha, handleDeletarUsuario } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const onSubmit = (data) => {
    handleTrocarSenha(data.senha, data.novasenha);
  };

  useEffect(() => {
    if (foto !== null) {
      setSelectedImage(foto);
    }
  }, [foto]);


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
        <TouchableOpacity onPress={handleImagePicker}>
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
        <Text></Text>
        <ContainerPerfil>
          <TextEmailUsuario>{usuario.email}</TextEmailUsuario>
        </ContainerPerfil>

        <ContainerPerfil>
          <TextTrocarSenha>Trocar senha</TextTrocarSenha>
        </ContainerPerfil>

        <ContainerInput>
          <ContainerPerfil>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInputPerfil
                  label={'Senha'}
                  secureTextEntry={true}
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder='Senha'
                  placeholderTextColor='#808080'
                />
              )}
              name='senha'
              rules={{ required: 'Senha é obrigatória' }}
              defaultValue=''
            />
            {errors.senha && <Text style={{ color: 'red' }}>{errors.senha.message}</Text>}

            <Controller
              control={control}
              render={({ field }) => (
                <TextInputPerfil
                  label={'Nova Senha'}
                  secureTextEntry={true}
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder='Nova Senha'
                  placeholderTextColor='#808080'
                />
              )}
              name='novasenha'
              rules={{ required: 'Nova Senha é obrigatória' }}
              defaultValue=''
            />
            {errors.novasenha && <Text style={{ color: 'red' }}>{errors.novasenha.message}</Text>}
          </ContainerPerfil>
        </ContainerInput>

        <ContainerBotao>
          <Botao texto={'Salvar'} onPress={handleSubmit(onSubmit)} />
        </ContainerBotao>
      </KeyboardAwareScrollView>
    </ContainerTelas>
  );
};

export default Perfil;