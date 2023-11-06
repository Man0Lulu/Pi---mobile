import { FlatList, View, StyleSheet, Text } from 'react-native';

import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import moment from 'moment';
import BotaoAdd from '../svg/BotaoAdd';
import { ContainerBotao, LinhaHorizontalHomeDireita } from '../styles/HomeStyles';
import { LinhaHorizontalHomeEsquerda } from '../styles/HomeStyles';
LinhaHorizontalHomeDireita



const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sáb'];
const days = [];
const currentDate = moment();

for (let i = 0; i < 7; i++) {
  const day = currentDate.clone().day(i);
  days.push(`${day.format('DD')}`)
}


const Home = () => {

  return (
    <ContainerTelas>
     <LinhaHorizontal />
     <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={daysOfWeek}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.dayCard}>
            <Text style={styles.dayText}>{item}</Text>
          </View>
        )}
      />
    </View>
    <View style={styles.container2}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={days}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.dayCard2}>
            <Text style={styles.dayText2}>{item}</Text>
          </View>
        )}
      />
    </View>

<LinhaHorizontalHomeEsquerda/>
    <ContainerBotao>
    <BotaoAdd />
    </ContainerBotao>
    <LinhaHorizontalHomeDireita/>
    </ContainerTelas>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCard: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 40,
    height: 50,
    marginTop: 20,
  },
  dayCard2: {
    padding: 10,
    borderRadius: 40,
    height: 50,
    marginRight: 4,
    marginTop: -13,
    paddingLeft: 13,
    paddingRight: 13,
  },
  dayText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: 'grey',
  },
  dayText2: {
    fontSize: 14,
    color: '#B52178',
    fontFamily: 'Inter-SemiBold',
  },
  container2: {
    flex:0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    paddingBottom: 10,
  },
});

export default Home;