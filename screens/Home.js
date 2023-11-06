import { FlatList, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';

import moment from 'moment';

import BotaoAdd from '../svg/BotaoAdd';
import { ContainerBotao, LinhaHorizontalHomeDireita } from '../styles/HomeStyles';
import { LinhaHorizontalHomeEsquerda } from '../styles/HomeStyles';
import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';




const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sáb'];

const Home = ({ navigation }) => {
  const todayIndex = moment().day(); // Obtém o índice do dia da semana atual (0 para domingo, 1 para segunda, etc.)

  const [selectedDay, setSelectedDay] = useState(todayIndex);

  const handleDayPress = (index) => {
    setSelectedDay(index);
  };

  const days = [];
  const currentDate = moment();

  for (let i = 0; i < 7; i++) {
    const day = currentDate.clone().day(i);
    days.push(day.format('DD'));
  }

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
          )}/>
      </View>
      <View style={styles.container2}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={days}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => handleDayPress(index)}
              style={[
                styles.dayCard2,
                selectedDay === index ? styles.selectedDayCard : null
              ]}
            >
              <Text style={[styles.dayText2, selectedDay === index ? styles.selectedDayText : null]}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <Image style={{ width: 250, height: 250, marginTop: 90, alignSelf: 'center' }} source={require('../assets/homesemhabito.png')} />
      </View>

      <LinhaHorizontalHomeEsquerda />
      <ContainerBotao>
        <TouchableOpacity onPress={() => navigation.navigate('CriarHabito')}>
          <BotaoAdd />
        </TouchableOpacity>
      </ContainerBotao>
      <LinhaHorizontalHomeDireita />
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
    height: 30,
    marginTop: 10, 
    marginBottom: 7,
  },
  dayCard2: {
    borderRadius: 40,
    marginRight: 4,
    marginTop: 0,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 10,
    paddingBottom:10,
    
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
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    paddingBottom: 10,
  },
  selectedDayCard: {
    backgroundColor: '#B52178',
    borderWidth: 1,
    borderColor: '#B52178',
    height:42,
    width: 43,
  },
  selectedDayText: {
    color: '#FFF',
    fontFamily: 'Inter-SemiBold',
    width:40,
  },
});

export default Home;