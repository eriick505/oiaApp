import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FlatHistoric from '../components/FlatHistoric';

export default class HistoricoScreen extends React.Component{
    state = {
        listVagas: [
            {
                id: 1,
                thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
                title: 'Jardineiro Profissional',
                local: 'Recife, PE',
                price: 'R$ 150,00',
                description: 'Necessita de jardineiro para limpar daninhas em lotes de 50km...',
                published: '50 min ago ·'
              },
              {
                id: 2,
                thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
                title: 'Programador PHP Jedai',
                local: 'Osasco, SP',
                price: 'R$ 4115,00',
                description: 'Programador fullstak, desenvolver codigos nativos para naves espaciais...',
                published: '13 min ago ·'
              },
        ],
    };

    render (){
        return(
         <View style={styles.container}>
            <FlatHistoric
                vagas={this.state.listVagas}
                onPressContainer={pageParams => {
                this.props.navigation.navigate('JobDetail', pageParams);
                }}/>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 9 // altera o tamanhho do container das vagas
    }
});