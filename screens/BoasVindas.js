import { Text, ScrollView } from 'react-native'
import { ContainerApp } from "../styles/StylesGlobal";
import { Titulo, ContainerTexto, SubTitulo, AgoraSubTitulo, Paragrafo, ImagemBoasVindas, ContainerBotao, ContainerBoasVindas } from '../styles/BoasVindasStyles';
import Botao from '../components/Botao';

const BoasVindas = ({ navigation }) => {
    return (
        <ContainerApp>
            <ScrollView>
                <ContainerBoasVindas>
                    <ImagemBoasVindas source={require('../assets/boasvindas.png')} />
                    <ContainerTexto>
                        <Titulo>Hábitos em Ação <Text>🙌</Text></Titulo>
                        <SubTitulo>O melhor momento para começar é</SubTitulo>
                        <AgoraSubTitulo>Agora!</AgoraSubTitulo>
                        <Paragrafo>Você deu o primeiro passo para mudar.{'\n'}Deixe-nos guiá-lo.</Paragrafo>
                    </ContainerTexto>
                    <ContainerBotao>
                        <Botao onPress={() => { navigation.navigate('Login') }} texto={"Começar!"} />
                    </ContainerBotao>
                </ContainerBoasVindas>
            </ScrollView>
        </ContainerApp>
    );
}

export default BoasVindas;