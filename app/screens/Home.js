import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'PKR';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '115';

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
            </Container>
        );
    }
}

export default Home;