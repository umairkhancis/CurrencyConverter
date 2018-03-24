import React from 'react';
import {View, Text, Image, ImageBackground, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

class Logo extends React.Component {

    constructor(props) {
        super(props);

        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount() {
        // keyboardWillShow and keyboardWillHide are not available in android but verify that again as well.
        let showListener = 'keyboardWillShow';
        let hideListener = 'keyboardWillHide';

        if(Platform.OS === 'android') {
            showListener = 'keyboardDidShow';
            hideListener = 'keyboardDidHide';
        }

        this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        /**
         * ToDo: this animations are not working because ImageBackground component is not available in Animated
         * But this code is still here to get it work in future.
         */
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    keyboardHide = () => {
        /**
         * ToDo: this animations are not working because ImageBackground component is not available in Animated
         * But this code is still here to get it work in future.
         */
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };


    render() {

        const containerImageWidth = [
            styles.containerImage,
            { width: this.containerImageWidth, height: this.containerImageWidth },
        ];

        const imageStyle = [
            styles.image,
            { width: this.imageWidth },
        ];

        return (
            <View style={styles.container}>
                {/* ToDo:
                    - ImageBackground is not available in Animated 
                    - Use containerImageWidth instead of styles.containerImage
                */}
                <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')}>
                    <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')}/>
                </ImageBackground>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;