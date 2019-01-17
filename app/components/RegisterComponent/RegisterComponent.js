import React, { Component } from 'react';
import { AsyncStorage, Button, Picker, ScrollView, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import RadioGroup from 'react-native-radio-buttons-group';
import prefskey from '../../utils/constants/prefskeys';
import prefsManager from '../../utils/prefsmanager';
import styles from './style';
import UserModel from '../../data/UserModel'

export default class RegisterComponent extends Component {

    state = {
        stateName: '',
        username: '',
        email: '',
        mobile: '',
        gender: '',
        address: '',

        options: {
            "0": "Select State",
            "1": "Gujarat",
            "2": "Ahmedabad",
            "3": "Rajkot",
            "4": "Surat",
        },

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

    onGenderSelected(value) {
        this.setState({ value: value })

        let selectedButton = this.state.data.find(e => e.selected == true);
        this.state.gender = selectedButton ? selectedButton.value : this.state.data[0].value;
    }
    // IMEI :356029080496960
    
    onStateSelected = (stateName) => {
        this.setState({ stateName: stateName })
    }

    _handlePress = async () => {

        this.refs.toast.show(this.state.username);

        UserModel.username = this.state.username
        UserModel.stateName = this.state.stateName
        UserModel.email = this.state.email
        UserModel.mobile = this.state.mobile
        UserModel.gender = this.state.gender
        UserModel.address = this.state.address

        console.log(this.state.username);
        console.log(this.state.password);

        this.props.navigation.navigate('UserList',
            { userData: UserModel }
        );

        await prefsManager.setValue(prefskey.username, this.state.username)

        console.log("username =>>", await prefsManager.getValue(prefskey.username));

    }

    render() {

        return (

            <ScrollView>

                <View style={styles.container}>

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
                                selectedValue={this.state.stateName} onValueChange={this.onStateSelected}>
                                {Object.keys(this.state.options).map((key) => {
                                    return (<Picker.Item label={this.state.options[key]} value={key} key={key} />) //if you have a bunch of keys value pair
                                })}
                            </Picker>

                        </View>

                    </View>

                    <View style={styles.radioGroupContainer}>
                        <Text style={styles.textLableStyle}>Select Gender</Text>

                        <RadioGroup style={alignItems = 'flex-start'} radioButtons={this.state.data}
                            onChange={this.onRadiochange}
                            onPress={this.onGenderSelected.bind(this)} />

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