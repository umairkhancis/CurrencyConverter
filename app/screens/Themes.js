import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {ListItem, Separator} from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends React.Component {
    
    handleThemPress = (color) => {
        console.log('handleThemPress:  ' + color);
    }
    
    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>

                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemPress(styles.$blue)}
                    selected={true}
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator/>

                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemPress(styles.$orange)}
                    selected={true}
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator/>

                <ListItem
                    text="Green"
                    onPress={() => this.handleThemPress(styles.$green)}
                    selected={true}
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator/>

                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemPress(styles.$purple)}
                    selected={true}
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator/>
                
            </ScrollView>
        );
    }
}

export default Themes;