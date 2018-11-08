import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const CustomButtom = ({ onPress, text, style }) => (
    <TouchableOpacity
       onPress={onPress} 
       style={[styles.button, style]} >
            <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderWidth: 1,
        padding: 15,
        width: 330
    },
    text: {
        fontSize: 19,
        color: '#6F2B8F',
        fontWeight: 'bold',
    }
});

export default CustomButtom;