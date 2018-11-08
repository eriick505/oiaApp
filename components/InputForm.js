import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputForm = ({ onChangeText, value, placeholder, secureTextEntry, multiline, keyboardType, maxLength, numberOfLines }) => (
    <TextInput 
        style={styles.Input}
        multiline={multiline}
        autoCorrect={false}
        maxLength={maxLength}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        onChangeText={onChangeText}
        value={value} />
    
);

const styles = StyleSheet.create({
    Input: {
        flex: 1,
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FFF",
    }
});

export default InputForm;