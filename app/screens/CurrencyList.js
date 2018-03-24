import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";

import currencies from '../data/Currencies'
import {ListItem, Separator} from "../components/List";

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends React.Component {

    handleItemClick = () => {
        console.log('handle on item click');
    };

    getRowItem = ({ item }) => {
        console.log("row item: " + item);
        return (
            <ListItem
                text={item}
                selected={item === TEMP_CURRENT_CURRENCY}
                onPress={this.handleItemClick}
                />
            );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="default" translucent={false}/>
                <FlatList 
                    data={currencies}
                    renderItem={ this.getRowItem }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
            
        );
    }
}



export default CurrencyList;