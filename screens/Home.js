import { ContainerTelas, LinhaHorizontal } from '../styles/StylesGlobal';
import { FlatList, Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import moment from 'moment';



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
    </ContainerTelas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCard: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 40,
    height: 50,
    marginTop:20,
  },
  dayCard2: {
    padding: 10,
    borderRadius: 40,
    height: 50,
    marginRight: 4,
    paddingLeft:13,
    paddingRight:13,
  },
  dayText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: 'grey',
  },
  dayText2: {
    fontSize: 14,
    color: 'red',
    fontFamily: 'Inter-SemiBold'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 520,
    marginLeft:4,
    paddingBottom: 35,
  },
});

export default Home;