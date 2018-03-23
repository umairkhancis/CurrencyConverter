import React from "react";
import { View, Text, TextInput, Button, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from './styles';
import color from 'color'

const InputWithButton = (props) => {
    const {buttonText, onPress, editable = true} = props;

    const containerStyles = [styles.container];
    if(editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
    
    return (
        <View style={containerStyles}>
            <TouchableHighlight 
                underlayColor={underlayColor}
                style={styles.buttonContainer}
                onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props}/>
        </View>
    );
}

InputWithButton.propTypes = {
    buttonText: PropTypes.string,
    onPress: PropTypes.func,
    editable: PropTypes.bool
}

export default InputWithButton;