import { StackNavigator } from 'react-navigation';

import Home from './Home.js';
import UserList from './UserList.js';

export const AppNavigator = StackNavigator({
    UserList: { screen: UserList },
    Home: { screen: Home }
});

export default AppNavigator;