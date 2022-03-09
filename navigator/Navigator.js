import React from 'react'
import { LoginScreen, ProfileScreen, TimeTableScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNavigator from './BottomNavigator'
import Icon from 'react-native-vector-icons/Feather'
import Time from '../components/Time'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}  />
            <Stack.Screen name='Profile' component={ProfileScreen} options={{
                headerShown: true,
                headerLeft: () => <Icon name='home' />,
                headerStyle: {
                    backgroundColor: '#000',
                }
            }} />
            <Stack.Screen name='Time Table' component={TimeTableScreen} />
            <Stack.Screen name='Time' component={Time} />
            <Stack.Screen name='Tabs' component={BottomNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default StackNavigator