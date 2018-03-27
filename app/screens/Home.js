import React from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrencies, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'PKR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '11500';
const TEMP_CONVERSION_RATE = 115;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
    };

    handlePressBaseCurrency() {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    };

    handlePressQuoteCurrency() {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    };

    handleTextChange(amount) {
        // TODO: Make this work with actual this.props.dispatch
        console.log(changeCurrencyAmount(amount));
    };

    handlerSwapCurrencies() {
        // TODO: Make this work with actual this.props.dispatch
        console.log(swapCurrencies()); // dispatch the action 
    };

    handleOptionsOnPress() {
        this.props.navigation.navigate('Options');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header 
                    onPress={() => this.handleOptionsOnPress()}
                />
                <KeyboardAvoidingView behavior="padding">
                    <Logo/> 
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={() => this.handlePressBaseCurrency()}           
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                    />
                    <InputWithButton 
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={() => this.handlePressQuoteCurrency()} 
                        editable={false} 
                        defaultValue={TEMP_QUOTE_PRICE}
                        keyboardType='numeric'
                    />

                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        conversionRate={TEMP_CONVERSION_RATE}
                        date={TEMP_CONVERSION_DATE}
                    />

                    <ClearButton
                        text="Reverse Currencies"
                        onPress={() => this.handlerSwapCurrencies()}
                    />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Home;