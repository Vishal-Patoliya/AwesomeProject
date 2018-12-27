import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Picker, ScrollView, Button } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class Home extends Component {

    state = {
        stateName: '',
        username: '',
        email: '',
        mobile: '',
        gender: '',
        address: '',

        data: [
            {
                label: 'male',
                value: "Male",
            },
            {
                label: 'female',
                value: "Female",
            }
        ],
    }

    // update state
    onPress = data => this.setState({ data });

    updateUser = (stateName) => {
        this.setState({ stateName: stateName })
    }

    _handlePress() {

        this.refs.toast.show(this.state.username);

        console.log(this.state.username);
        console.log(this.state.password);

        this.props.navigation.navigate('UserList',
        {
            username:this.state.username,
            password:this.state.password
        });
        
    }

    render() {
        return (

            <ScrollView>

                <View style={styles.container}>

                    <Text style={styles.welcome}>Register</Text>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Name"
                        onChangeText={(username) => this.setState({ username })}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Email Address"
                        onChangeText={(email) => this.setState({ email })}

                    />

                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder="Enter Mobile Number"
                        onChangeText={(mobile) => this.setState({ mobile })}
                    />

                    <View>

                        <View>
                            <Text style={styles.textLableStyle}>State</Text>
                        </View>

                        <View>

                            <Picker
                                mode="dropdown"
                                selectedValue={this.state.stateName} onValueChange={this.updateUser}>
                                <Picker.Item label="Select State" value="1" />
                                <Picker.Item label="Gujarat" value="2" />
                                <Picker.Item label="Rajasthan" value="3" />
                                <Picker.Item label="M.P" value="4" />
                                <Picker.Item label="U.P" value="5" />
                                <Picker.Item label="Hariyana" value="6" />
                                <Picker.Item label="Karnataka" value="7" />
                            </Picker>

                        </View>

                    </View>

                    <View style={styles.radioGroupContainer}>

                        <Text style={styles.textLableStyle}>Select Gender</Text>

                        <RadioGroup style={alignItems = 'flex-start'} radioButtons={this.state.data} onPress={this.onPress} />

                    </View>

                    <TextInput
                        style={styles.multilineTextInput}
                        placeholder="Enter Address"
                        numberOfLines={4}
                        onChangeText={(address) => this.setState({ address })}
                    />

                    <View style={{ width: "100%", alignItems: 'center' }}>
                        <Button
                            onPress={() => this._handlePress()}
                            title="Submit"
                            style={styles.buttonStyle}
                        />
                    </View>

                    <Toast
                        ref="toast"
                        position='top'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.8}
                    />

                </View>

            </ScrollView>


        );
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