import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import { ContainerHome } from '../styles/HomeStyles'; 
import { Image } from 'react-native';

const Home = () => {
  return (
    <ContainerTelas>
      <LinhaHorizontal />
      <ContainerHome>
        <Image style={{width: 250, height: 250}}
          source={require('../assets/homesemhabito.png')} />
      </ContainerHome>
    </ContainerTelas>
  );
}

export default Home;