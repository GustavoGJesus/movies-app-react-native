import React from 'react';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import { StatusBar } from 'expo-status-bar';

function App(){
  return(
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Routes />
    </NavigationContainer>
  )
};

export default App;