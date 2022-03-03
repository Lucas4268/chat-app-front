import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { InputMessage } from '../components/InputMessage/InputMessage';
import { Message } from '../components/Message/Message';
import { messages } from '../messajes';

export const ChatScreen = () => {
    return (
        <View>

            {/* <KeyboardAvoidingView behavior='height'> */}
                <FlatList
                    data={ messages }
                    style={ styles.listMessage }
                    keyExtractor={ ({text}) => text }
                    inverted
                    renderItem={ ({ item }) => <Message {...item}/>}
                />

                <InputMessage />
            {/* </KeyboardAvoidingView> */}
        </View>
    );
};




const styles = StyleSheet.create({
    listMessage: {
        // justifyContent: 'flex-start',
        height: '92%',
    }
})