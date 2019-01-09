/**
 * User List
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppState, Platform, StyleSheet, Text, View } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { BackHandler } from 'react-native';

const TAG = "LifeCycle"

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class UserList extends Component {

    constructor() {
        super();

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

        console.log(TAG, "Constructor Called.");
    }

    componentWillMount() {
        console.log(TAG, "ComponentWillMount() Called.");
        //BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

    }

    render() {
        console.log(TAG, "render() Called.")
        const itemId = this.props.navigation.getParam('username', 'No-UserId');

        return (

            <View style={styles.container}>

                <Text style={styles.welcome}>{itemId = JSON.stringify(itemId)}</Text>

                <Toast
                    ref="toast"
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                />


            </View>
        );
    }

    shouldComponentUpdate(nextProp, nextState) {

        console.log(nextProp, nextState);

        console.log(this.props, this.state);

        return false;

    }

    componentWillUpdate() {
        console.log(TAG, 'ComponentWillUpdate Called', nextProp, nextState);
    }

    componentDidUpdate() {
        console.log(TAG, 'ComponentDidUpdate Called', prevProps, prevState);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentDidCatch(error, info) {
        console.log(TAG, 'componentDidCatch Called');
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});