import { StackNavigator } from 'react-navigation';

import Home from './Home.js';
import UserList from './UserList.js';

export const AppNavigator = StackNavigator({
    Home: { screen: Home },
    UserList: { screen: UserList }   
});

export default AppNavigator;