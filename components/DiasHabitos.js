import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const DiasHabitos = (dayOfWeek) => {
    const currentDate = moment();
    const dayDate = currentDate.day(dayOfWeek);

    return (
        <View style={styles.card}>
            <Text style={styles.dayOfWeek}>{dayDate.format('dddd')}</Text>
            <Text style={styles.date}>{dayDate.format('DD')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    dayOfWeek: {
        fontSize: 18,
    },
    date: {
        fontSize: 24,
    },
});

export default DiasHabitos;