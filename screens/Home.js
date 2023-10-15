import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import { ContainerHome } from '../styles/HomeStyles';
import { Image, TouchableOpacity } from 'react-native';
import { ContainerBotao } from '../components/BotaoAddStyles';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

  const navigation = useNavigation();

  return (
    <ContainerTelas>
      <LinhaHorizontal />

      <ContainerHome>
        <Image style={{ width: 250, height: 250 }} source={require('../assets/homesemhabito.png')} />
      </ContainerHome>

      <ContainerBotao>
        <TouchableOpacity onPress={() => navigation.navigate('CriarHabito')}>
        <Image style={{ tintColor: '#B52178' }} source={require('../assets/botaoadd.png')} />
        </TouchableOpacity>
      </ContainerBotao>

    </ContainerTelas>
  );
}

export default Home;