import {createStackNavigator} from 'react-navigation';
import { LoginPage } from "./pages";

export default createStackNavigator({
    'Login' : {
        screen: LoginPage,
        navigationOptions: {
            headerStyle: {
                 display: 'none', 
            },
        }
    },
}, {
    navigationOptions: {

    },
    headerTitleStyle: {
        
    }
});