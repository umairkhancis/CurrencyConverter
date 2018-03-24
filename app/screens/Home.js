import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'PKR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '11500';
const TEMP_CONVERSION_RATE = 115;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {

    handlePressBaseCurrency() {
        console.log('handlePressBaseCurrency');
    };

    handlePressQuoteCurrency() {
        console.log('handlePressQuoteCurrency');
    };

    onTextChange(text) {
        console.log('text is changing' + text);
    };

    handlerSwapCurrencies() {
        console.log('swap currency');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Logo/> 
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}           
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.onTextChange}
                />
                <InputWithButton 
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency} 
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
                    text="Reverse Curruncies"
                    onPress={this.handlerSwapCurrencies}
                />
            </Container>
        );
    }
}

export default Home;