import { View, Text, StyleSheet, Image } from "react-native";

const Habitos = ({ item }) => {
    const horaFormatada = item.horarioAlarme ? item.horarioAlarme.substring(0, 5) : '';

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'data:image/jpeg;base64,' + item.imagem }} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.textColumn}>
                    <Text style={styles.titulo}>{item.nome}</Text>
                    <Text style={styles.status}>Concluído</Text>
                </View>
                <View style={styles.textColumn}>
                    <View style={styles.horaContainer}>
                        <Text style={styles.hora}>{horaFormatada}</Text>
                    </View>
                    <Text style={{textAlign:'left', paddingLeft: 10}}>Alarme</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 322,
        backgroundColor: 'rgba(181, 33, 120, 0.1)',
        paddingHorizontal: 10,
        marginHorizontal: 35,
        borderStyle: 'solid',
        borderColor: 'rgba(181, 33, 120, 0.1)',
        borderWidth: 2,
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    imageContainer: {
        marginRight: -2,
        borderWidth: 0.5,
        borderRadius:15,
        borderColor: 'rgba(181, 33, 120, 0.1)',
    },
    image: {
        width: 58,
        height: 58,
        borderRadius: 15,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textColumn: {
        flex: 1,
        paddingLeft: 15,
    },
    titulo: {
        fontSize: 18,
        color: '#B52178',
        fontWeight: 'bold',
        textAlign:"left"
    },
    status: {
        fontSize: 16,
        color: '#17C047',
        textAlign: "left",
    },
    horaContainer: {
        backgroundColor: '#b52178',
        width: 65,
        borderRadius: 10,
        borderColor: '#B52178',
        padding: 3,
    },
    hora: {
        fontSize: 16,
        color: '#FFF',
        textAlign: "center",
    },
});

export default Habitos;
