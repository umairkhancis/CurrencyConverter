import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const Navigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({navigation}) => {
            return {
                title: navigation.state.params.title,
            };
        },
    },
}, {
    mode: 'modal',
    paddingTop: StatusBar.currentHeight,
});

export default Navigator;