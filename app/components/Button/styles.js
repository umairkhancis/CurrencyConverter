import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 19,
        margin: 11,
    },
    text: {
        color: '$white',
        fontSize: 19,
        fontWeight: '300',
        paddingVertical: 20,
    },        
});