/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' />
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;
