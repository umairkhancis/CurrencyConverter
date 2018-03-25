import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        },
    },
    Themes: {
        screen: Themes, 
        navigationOptions: {
            headerTitle: 'Themes',
        },
    },
});

const CurrencyListNavigator = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({navigation}) => {
            return {
                title: navigation.state.params.title,
            };
        },
    },
});

const Navigator = StackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListNavigator,
    },
}, {
    mode: 'modal',
    paddingTop: StatusBar.currentHeight,
    headerMode: 'none', 
});

export default Navigator;