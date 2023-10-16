import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import { TextTitulo, TextTocarHabito, ContainerHabito, TextInputHabito, ContainerBotao, ContainerAlarme, TextImagemHabito, ContainerDefaultHabitoImage,ContainerPosicaoDefaultImagem } from '../styles/CriarHabitoStyles';
import { Image } from 'react-native';
import { useContext, useState } from 'react';
import Botao from '../components/Botao';
import BotaoAlarme from '../components/Switch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HabitoContext from '../contexts/HabitoContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


const CriarHabito = () => {
    const [habito, setNomeHabito] = useState();
    const [horarioalarme, setHorarioAlarme] = useState();
    const [datahabito, setDataHabito] = useState();
    const [tocarAlarme, setTocarAlarme] = useState(false);
    const { handleCriarHabito } = useContext(HabitoContext);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSwitchChange = (novoValor) => {
        setTocarAlarme(novoValor);
    };

    const handleCriarHabitoBotao = () => {
        handleCriarHabito(habito, tocarAlarme, horarioalarme, datahabito, selectedImage);
        console.log(selectedImage);
    };
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
                <TextTitulo>Novo Hábito</TextTitulo>
                <TextImagemHabito>Imagem do Hábito</TextImagemHabito>
                <TouchableOpacity onPress={() => handleImagePicker()}>
                    {selectedImage ? ( 
                        <Image style={{ marginLeft: 30, marginTop: 8, width: 120, height: 120, borderRadius: 20, overflow: 'hidden'}} source={{ uri: 'data:image/jpeg;base64,' + selectedImage }} />
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
                    <TextImagemHabito>Nome do Hábito</TextImagemHabito>
                    <TextInputHabito
                        label={'Nome do Hábito'}
                        value={habito}
                        onChangeText={(text) => setNomeHabito(text)}
                        placeholder='Nome do hábito'
                        placeholderTextColor="#808080"
                    />
                    <TextImagemHabito>Horário do Alarme</TextImagemHabito>
                    <TextInputHabito
                        label={'Horário do Alarme'}
                        value={horarioalarme}
                        onChangeText={(text) => setHorarioAlarme(text)}
                        placeholder='Horário do alarme ex: 12:00'
                        placeholderTextColor="#808080"
                    />
                    <TextImagemHabito>Data do Hábito</TextImagemHabito>
                    <TextInputHabito
                        label={'Data do Hábito'}
                        value={datahabito}
                        onChangeText={(text) => setDataHabito(text)}
                        placeholder='Selecione a data do hábito'
                        placeholderTextColor="#808080"
                    />
                </ContainerHabito>
                <ContainerBotao>
                    <Botao onPress={handleCriarHabitoBotao} texto={"Criar"} />
                </ContainerBotao>
            </KeyboardAwareScrollView>
        </ContainerTelas>
    );
}

export default CriarHabito;