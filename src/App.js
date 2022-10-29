import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './routes';
import AuthProvider from './contexts/auth';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#FE7122'} barStyle={'light-content'} showHideTransition={'slide'} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};
