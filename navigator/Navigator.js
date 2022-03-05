import React from 'react'
import { LoginScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNavigator from './BottomNavigator'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Tabs' component={BottomNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default StackNavigator