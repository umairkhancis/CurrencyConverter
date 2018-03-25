import React from 'react';
import { ScrollView, StatusBar, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import {ListItem, Separator} from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes');
    }

    handleSitePress = () => {
        this.props.navigation.navigate('Themes');
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem 
                    text="Themes" 
                    onPress={() => this.handleThemesPress()}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>}
                />
                <Separator/>
                <ListItem 
                    text="Fixer.io" 
                    onPress={() => this.handleSitePress()}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>}
                />
            </ScrollView>
        );
    }
}

export default Options;