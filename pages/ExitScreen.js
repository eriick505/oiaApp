import React from 'react';
import { View, Text, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ExitScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Screen 2',
        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                name="change-history"
                size={24}
                style={{color: tintColor}}>
                </MaterialIcons>
            );
        }
    }
    render () {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color:'yellow'}}> screen 2</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title='Open Drawer'
                />
            </View>
        );
    }
}