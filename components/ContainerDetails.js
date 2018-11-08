import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const ContainerDetails = props => {
  return (
   <ScrollView> 
    <View style={styles.telaFundo}>
      <View style={styles.square}>

        
        <Text style={[styles.cell, styles.rectangle, styles.title]}>Jardineiro Profissional        <Icon name='content-cut' size={24} color='#808080'/></Text>
        

        <Text style={[styles.cell, styles.rectangle]}><Icon name='map-marker' size={20} color='#E75A4D'/>Recife, Pernambuco</Text> 
        <Text style={[styles.cell, styles.rectangle]}><Icon name='calendar-range' size={20} color='black'/>Prazo de 3 dias</Text>
       
        <View style={styles.description}>
          <Text style={styles.descricao}>Descrição</Text>
          <View style={styles.marker}>
            <Text style={styles.money}>R$ 3.400,00</Text>
            </View>
        </View>

        <Text style={[styles.cell, styles.rectangle]}> 
        Eu preciso preciso opreciso precio sdasiodas doaiso
        dasdasid oasiodiaso dao sddasiodasid osia sodsiosda sdd
        dasdasidoa siodiasodaos dasiodasidos iasodsio sdasdd
        Eu preciso preciso opreciso precio sdasiodas doaiso
        dasdasid oasiodiaso dao sddasiodasid osia sodsiosda sdd
        dasdasidoa siodiasodaos dasiodasidos iasodsio sdasdd
        iasodsio sdasdd
        </Text>
    
      </View>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}> QUERO ESSA OIA </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    
  );
}

export default ContainerDetails;


const styles = StyleSheet.create({
  telaFundo: {
    flex: 1,
    padding: 7,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  square: {
    borderRadius: 5,
    paddingTop: 5,
    backgroundColor: "#fff",
   // elevation: 5,
    marginBottom: 15
  },
  rectangle: {
    borderBottomWidth: 2,
    borderBottomColor: '#DFDFDF'
  },
  cell: {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 21,
    paddingBottom: 5,
    color: '#9f9f9f'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black'
  },
  description: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: 10,
  },
  descricao: {
    fontSize: 26,
    paddingBottom: 2,
    flex: 4,
    color: '#949496',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  marker: {
    backgroundColor: '#22B34E',
    borderTopEndRadius: 8,
    elevation: 4,
  },
  money: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    padding: 2
  },
  button: {
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#22B34E',
    padding: 15,
    width: 330
  },
});
