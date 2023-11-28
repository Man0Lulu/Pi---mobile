import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import {
  TextTitulo,
  TextTocarHabito,
  ContainerHabito,
  TextInputHabito,
  ContainerBotao,
  ContainerAlarme,
  TextImagemHabito,
  ContainerDefaultHabitoImage,
  ContainerPosicaoDefaultImagem,
} from '../styles/CriarHabitoStyles';
import { Image, Text } from 'react-native';
import { useContext, useState } from 'react';
import Botao from '../components/Botao';
import BotaoAlarme from '../components/Switch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HabitoContext from '../contexts/HabitoContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import SearchBar from '../components/SearchBar';

const AlterarHabito = () => {
  const { control, formState: { errors } } = useForm();
  const [habito, setNomeHabito] = useState('');
  const [horarioalarme, setHorarioAlarme] = useState('');
  const [datahabito, setDataHabito] = useState('');
  const [tocarAlarme, setTocarAlarme] = useState(false);
  const { handleAlterarHabito } = useContext(HabitoContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSwitchChange = (novoValor) => {
    setTocarAlarme(novoValor);
  };

 /*  const handleAlterarHabitoBotao = () => {
    handleAlterarHabito(habito, tocarAlarme, horarioalarme, datahabito, selectedImage);
  }; */

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].base64);
    }
  };

  const onSubmit = (data) => {
    handleAlterarHabito(data.habito, data.tocarAlarme, data.horarioalarme, data.datahabito, selectedImage);
  };

  return (
    <ContainerTelas>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        extraHeight={100}
      >
        <LinhaHorizontal />
        <TextTitulo>Editar Hábito</TextTitulo>
        <SearchBar />

        <TextImagemHabito>Imagem do Hábito</TextImagemHabito>
        <TouchableOpacity onPress={() => handleImagePicker()}>
          {selectedImage ? (
            <Image style={{ marginLeft: 30, marginTop: 8, width: 120, height: 120, borderRadius: 20, overflow: 'hidden' }} source={{ uri: 'data:image/jpeg;base64,' + selectedImage }} />
          ) : (
            <>
              <ContainerPosicaoDefaultImagem>
                <Image style={{ width: 40, height: 40, tintColor: '#B52178' }} source={require('../assets/habito-default.png')} />
              </ContainerPosicaoDefaultImagem>
              <ContainerDefaultHabitoImage />
            </>
          )}
        </TouchableOpacity>
        <ContainerAlarme>
          <TextTocarHabito>Tocar Alarme?</TextTocarHabito>
          <BotaoAlarme value={tocarAlarme} onValueChange={handleSwitchChange} />
        </ContainerAlarme>
        <ContainerHabito>
          <TextImagemHabito>Alterar Nome</TextImagemHabito>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInputHabito
                label={'Nome do Hábito'}
                value={field.value}
                onChangeText={(text) => {
                  setNomeHabito(text);
                  field.onChange(text);
                }}
                placeholder='Nome do hábito'
                placeholderTextColor="#808080"
              />
            )}
            name="habito"
            rules={{ required: 'Nome do hábito é obrigatório' }}
            defaultValue={habito}
          />
          {errors.habito && <Text style={{ color: 'red' }}>{errors.habito.message}</Text>}

          <TextImagemHabito>Alterar Hora</TextImagemHabito>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInputHabito
                label={'Horário do Alarme'}
                value={field.value}
                onChangeText={(text) => {
                  setHorarioAlarme(text);
                  field.onChange(text);
                }}
                placeholder='Horário do alarme ex: 12:00'
                placeholderTextColor="#808080"
              />
            )}
            name="horarioalarme"
            rules={{ required: 'Horário do alarme é obrigatório' }}
            defaultValue={horarioalarme}
          />
          {errors.horarioalarme && <Text style={{ color: 'red' }}>{errors.horarioalarme.message}</Text>}

          <TextImagemHabito>Data do Hábito</TextImagemHabito>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInputHabito
                label={'Data do Hábito'}
                value={field.value}
                onChangeText={(text) => {
                  setDataHabito(text);
                  field.onChange(text);
                }}
                placeholder='Selecione a data do hábito'
                placeholderTextColor="#808080"
              />
            )}
            name="datahabito"
            rules={{ required: 'Data do hábito é obrigatória' }}
            defaultValue={datahabito}
          />
          {errors.datahabito && <Text style={{ color: 'red' }}>{errors.datahabito.message}</Text>}
        </ContainerHabito>
        <ContainerBotao>
          <Botao onPress={onSubmit} texto={"Salvar"} />
        </ContainerBotao>
      </KeyboardAwareScrollView>
    </ContainerTelas>
  );
};

export default AlterarHabito;