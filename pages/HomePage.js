import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ContainerJob from '../components/ContainerJob';

export default class HomePage extends React.Component{
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
              {
                id: 3,
                thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
                title: 'Professor',
                local: 'FG - CCO6MA',
                price: 'R$ Mais que Raoni',
                description: 'Necessita de professor que dê aula nas quintas-feiras, pois estamos sem...',
                published: '69 hours ago'
              },
              {
                id: 4,
                thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
                title: 'Desenvolvedor React',
                local: 'Salvador, BA',
                price: 'R$ 232,93',
                description: 'Vaga para trabalhar e relaxar e tudo maiss asdasd...',
                published: '69/69/69'
              },
              {
                id: 5,
                thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
                title: 'Desenvolvedor React',
                local: 'Salvador, BA',
                price: 'R$ 232,93',
                description: 'Vaga para trabalhar e relaxar e tudo maiss asdasd...',
                published: '69/69/69'
              },
        ],
    };

    render (){
        return(
         <View style={styles.container}>
            <ContainerJob
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
        backgroundColor: '#fff',
        padding: 9 // altera o tamanhho do container das vagas
    }
});