import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';
import { HeaderChat } from '../components/HeaderChat/HeaderChat';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='RegisterScreen'
            screenOptions={{
                headerBackButtonMenuEnabled: true,
                title: 'ChatApp',
                headerStyle: {
                    backgroundColor: theme.colors.primary
                },
                headerTintColor: '#fff',
                contentStyle: {
                    backgroundColor: theme.colors.secondary
                },
                
            }}
        >
            <Stack.Screen name="RegisterScreen" component={ RegisterScreen } options={{headerShown: false}} />
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="ChatScreen" component={ ChatScreen } options={{header: HeaderChat}}/>
        </Stack.Navigator>
    );
}
