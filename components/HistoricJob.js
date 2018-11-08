import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Historicjob = props => {
    const {listVagas, navigateToContainer} = props;
    const {title, local, published, description, price } = listVagas;
    return (
        <TouchableOpacity onPress={() => {
            navigateToContainer({ listVagas });
        }}> 
        <View style={styles.container}>
            <View style={styles.line}>
            <Text style={[styles.content, styles.cell, styles.jobTitle]}>{ title }</Text> 
            <Icon name='menu' size={20} color='#808080'/>
            </View>
            <View style={styles.line}>
                <Text style={[styles.cell, styles.content, styles.description]}>{ description }</Text>
            </View>
            <View style={styles.line}>
                <Text style={[styles.cell, styles.content]}>{ local }</Text>
            </View>
            <View style={styles.line}>
                <Text style={[styles.cell, styles.content, styles.price]}>{ price }</Text> 
                <Text style={styles.data}>{ published}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default Historicjob;

const styles = StyleSheet.create({
    container: {
        padding: 7, // 15
        paddingLeft: 5,
        backgroundColor: "#fff",
        // marginBottom: 5,
        height: 130, // 130
       // borderRadius: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#DFDFDF'
       // elevation: 5
       // flexDirection: "row",
       // alignItems: "center"
    },
    jobTitle: {
        marginBottom: 1,
        fontWeight: "bold",
        color: "black",
        fontSize: 18
    },
     line: {
        flexDirection: 'row', // muda a direçao em que os elementos seram adicionados
        paddingTop: 1,
        paddingBottom: 2,
    },
    cell: {
        fontSize: 14,
        color: '#808080'
       // paddingLeft: 1
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        color: 'black'
    },
    content: { // criado para fixar as celulas da tab em tamanho unico
        fontSize: 15,
        flex: 7, // dividiu o tamanho da Line por 4 
        paddingLeft: 1,
        color: '#6A6A6A'
    }, 
    longLabel: { // tratar o tamanho dos labels de caracteres grandes
        fontSize: 11
    }, 
    price: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 17
    },
    data: {
        fontSize: 12,
        color: '#808080'
    },
    description: {
        color: '#808080'
    }

});