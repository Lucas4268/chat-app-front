import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../../theme/theme';

export const InputMessage = () => {
    return (
        <View style={ styles.inputContainer }>
            <TextInput style={ styles.input } placeholder='Ecriba un mensaje'/>
        </View>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: theme.colors.primary,
        height: 70,
        justifyContent: 'center'
    },

    input: {
        // borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 23,
        color: '#fff',
        padding: 10,
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginVertical: 10
    }
})
