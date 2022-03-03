import React from 'react';
import { ChatScreen } from './src/screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/router/StackNavigation';

export const App = () => {
  return (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
  );
};