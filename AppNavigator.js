import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import RegisterComponent from './app/components/RegisterComponent';
import UserList from './UserList.js';

const AppNavigator = createStackNavigator({
    RegisterComponent: {
        screen: RegisterComponent,
        navigationOptions: ({ navigation }) => ({
            title: 'Registration',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center',
                width: '100%',
            },
        })
    },
    UserList: {
        screen: UserList,
        navigationOptions: ({ navigation }) => ({
            title: 'User Details'
        })
    }
},
    {
        initialRouteName: 'RegisterComponent'
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;