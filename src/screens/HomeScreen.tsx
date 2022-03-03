import React from 'react';
import { Image, ScrollView, StatusBar } from 'react-native';
import { ItemChat } from '../components/ItemChat';
import { theme } from '../theme/theme';


export const HomeScreen = ( { navigation }: any) => {
    const handleClick = () => {
        navigation.navigate('ChatScreen')
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor={ theme.colors.primary } />
            
            <ItemChat handleClick={ handleClick }>
                <ItemChat.Img />

                <ItemChat.Text name='Lucas Montesino' text='En linea'/>

                {/* <ItemChat.Info /> */}
            </ItemChat> 
        </ScrollView>
    );
};
