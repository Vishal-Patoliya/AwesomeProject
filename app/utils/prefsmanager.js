import { AsyncStorage } from 'react-native';

const setValue = async (key, value) => {
    await AsyncStorage.setItem(key, value);
}

const getValue = async (key) => {
    let value = '';
    try {
        value = await AsyncStorage.getItem(key) || 'none';
    } catch (error) {
        // Error retrieving data 
        console.log(error.message);
    }
    return value;
};

const prefsmanager = {
    setValue,
    getValue
}
export default prefsmanager; 