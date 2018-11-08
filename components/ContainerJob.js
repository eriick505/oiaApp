import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
import JobList from './JobList';

const ContainerJob = props => {
   const { vagas, onPressContainer } = props;
   return ( // NAO SEI SE O CODIGO VOLTA
        <FlatList 
            style={styles.container}
            data={vagas}
            renderItem={({ item }) => (
                <JobList 
                 listVagas={item}
                 navigateToContainer={onPressContainer} />
            )}
            keyExtractor={item => item.title} />
    );
}

export default ContainerJob;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
      }
});