import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
import HistoricJob from './HistoricJob';

const FlatHistoric = props => {
   const { vagas, onPressContainer } = props;
   return ( // NAO SEI SE O CODIGO VOLTA
        <FlatList 
            style={styles.container}
            data={vagas}
            renderItem={({ item }) => (
                <HistoricJob 
                 listVagas={item}
                 navigateToContainer={onPressContainer} />
            )}
            keyExtractor={item => item.title} />
    );
}

export default FlatHistoric;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
      }
});