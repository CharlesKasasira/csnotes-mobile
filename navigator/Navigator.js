import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomNavigator = () => {

    const TabNavigator = createBottomTabNavigator()
  return (
      <TabNavigator.Navigator>
          
      </TabNavigator.Navigator>
  )
}

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator