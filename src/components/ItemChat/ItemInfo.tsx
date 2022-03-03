import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ItemInfo = () => {
    return (
        <View style={ styles.infoChat }>
            <Text style={ styles.info }>2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoChat: {
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    
    info: {
        color: '#fff'
    }
})