import EStylesheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

export default EStylesheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        '@media ios': {
            paddingTop: 40,
        },
    },
    button: {
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    icon: {
        width: 18,
    },
});