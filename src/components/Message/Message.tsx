import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../theme/theme"

interface Props { 
    text: string,
    from: string
}

export const Message = ({ text, from }: Props) => {
    return (
        <View style={{
            ...styles.messageContainer,
            alignSelf: (from === '123') ? 'flex-end' : 'flex-start',
            backgroundColor: (from !== '123') ? '#666' : theme.colors.primary
        }}>
            <Text style={ styles.text }>{ text }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 10,
        minWidth: 0,
        maxWidth: '80%',
        borderRadius: 5,
        alignSelf: 'flex-start'
    },

    text: {
        color: '#fff'
    }
})