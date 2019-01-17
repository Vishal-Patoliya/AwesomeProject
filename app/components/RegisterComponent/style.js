import {StyleSheet,Platform} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textInput: {
        height: 50,
        alignSelf: 'stretch',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        fontSize: 20
    },
    multilineTextInput: {
        alignSelf: 'stretch',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        fontSize: 20
    },
    radioGroupContainer: {
        flexDirection: 'row'
    },
    textLableStyle: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    buttonStyle: {
        height: 50,
        backgroundColor: "#841584",
        margin: 50
    }
});