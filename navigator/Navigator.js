import React from 'react'
import { LoginScreen, ProfileScreen, TimeTableScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNavigator from './BottomNavigator'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Time Table' component={TimeTableScreen} />
            <Stack.Screen name='Tabs' component={BottomNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default StackNavigator