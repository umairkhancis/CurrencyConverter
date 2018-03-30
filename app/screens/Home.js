import React from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrencies, changeCurrencyAmount } from '../actions/currencies';

const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object,

    };

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type: 'base'});
    };

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type: 'quote'});
    };

    handleTextChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handlerSwapCurrencies = () => {
        this.props.dispatch(swapCurrencies()); // dispatch the action 
    };

    handleOptionsOnPress = () => {
        this.props.navigation.navigate('Options');
    };

    render() {
        let quotePrice = (this.props.rate * this.props.amount).toFixed(2);
        if(this.props.isFetching) {
            quotePrice = '...';
        }

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header 
                    onPress={this.handleOptionsOnPress}
                />
                <KeyboardAvoidingView behavior="padding">
                    <Logo/> 
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}           
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                    />
                    <InputWithButton 
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency} 
                        editable={false} 
                        defaultValue={quotePrice}
                        keyboardType='numeric'
                    />

                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
                        date={this.props.lastConvertedDate}
                    />

                    <ClearButton
                        text="Reverse Currencies"
                        onPress={this.handlerSwapCurrencies}
                    />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    // why it was not accessible through state.currencies.baseCurrency 
    const baseCurrency = state.baseCurrency;
    const quoteCurrency = state.quoteCurrency;
    const conversionSelector = state.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    return {
        baseCurrency,
        quoteCurrency,
        amount: state.amount,
        rate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    };
};

export default connect(mapStateToProps)(Home);