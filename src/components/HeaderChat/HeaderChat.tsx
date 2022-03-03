import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../theme/theme"

export const HeaderChat = () => {
    return ( 
        <View style={ styles.header }>
            <Text>Atras</Text>

            <View style={ styles.avatar }>
                <Text>Img</Text>
            </View>

            <Text style={ styles.name }>Lucas Montesino</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center'
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    name: {
        color: '#fff',
        fontSize: 19,
    }
})