import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import { TextTitulo, TextTocarHabito, ContainerHabito, TextInputHabito, ContainerBotao, ContainerAlarme, TextImagemHabito } from '../styles/CriarHabitoStyles';
import { Image } from 'react-native';
import { useState } from 'react';
import Botao from '../components/Botao';
import BotaoAlarme from '../components/Switch';

const CriarHabito = () => {
    const [habito, setNomeHabito] = useState();
    const [horarioalarme, setHorarioAlarme] = useState();
    const [datahabito, setDataHabito] = useState();

    const handleCriarHabito = () => {

    };

    return (
        <ContainerTelas>
            <LinhaHorizontal />
            <TextTitulo>Novo Hábito</TextTitulo>
            <TextImagemHabito>Imagem do Hábito</TextImagemHabito>
            <Image style={{ margin: 16, width: 150, height: 150, tintColor: '#B52178' }} source={require('../assets/picture.png')} />
            <ContainerAlarme>
                <TextTocarHabito>Tocar Alarme?</TextTocarHabito>
                <BotaoAlarme></BotaoAlarme>
            </ContainerAlarme>
            <ContainerHabito>
                <TextImagemHabito>Nome do Hábito</TextImagemHabito>
                <TextInputHabito
                    label={'Nome do Hábito'}
                    secureTextEntry={true}
                    value={habito}
                    onChangeText={(text) => setNomeHabito(text)}
                    placeholder='Nome do Hábito'
                    placeholderTextColor="#808080"
                />
                <TextImagemHabito>Nome do Hábito</TextImagemHabito>
                <TextInputHabito
                    label={'Horário do Alarme'}
                    secureTextEntry={true}
                    value={horarioalarme}
                    onChangeText={(text) => setHorarioAlarme(text)}
                    placeholder='Horário do Alarme'
                    placeholderTextColor="#808080"
                />
                <TextImagemHabito>Data do Hábito</TextImagemHabito>
                <TextInputHabito
                    label={'Data do Hábito'}
                    secureTextEntry={true}
                    value={datahabito}
                    onChangeText={(text) => setDataHabito(text)}
                    placeholder='Data do Hábito'
                    placeholderTextColor="#808080"
                />
            </ContainerHabito>
            <ContainerBotao>
                <Botao onPress={handleCriarHabito} texto={"Criar"} />
            </ContainerBotao> 
        </ContainerTelas>
    );
}

export default CriarHabito;