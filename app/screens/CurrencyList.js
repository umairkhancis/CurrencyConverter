import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import currencies from '../data/Currencies'
import {ListItem, Separator} from "../components/List";

import {changeBaseCurrency, changeQuoteCurrency} from "../actions/currencies";

class CurrencyList extends React.Component {


    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    };

    handleItemClick = (currency) => {
        const { type } = this.props.navigation.state.params;
        
        if(type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        } else if(type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        
        this.props.navigation.goBack(null);
    };

    getRowItem = ({ item }) => {
        let comparisonCurrency = this.props.baseCurrency;

        const { type } = this.props.navigation.state.params;
        if(type === 'base') {
            comparisonCurrency = this.props.baseCurrency;
        } else if(type === 'quote') {
            comparisonCurrency = this.props.quoteCurrency;
        }

        return (
            <ListItem
                text={item}
                selected={item === comparisonCurrency}
                onPress={() => this.handleItemClick(item)}
                iconBackground={this.props.primaryColor}
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

const mapStateToProps = (state) => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor,
});


export default connect(mapStateToProps)(CurrencyList);