import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, EventScreen, ForumScreen } from '../screens'
import Icon from 'react-native-vector-icons/Feather'

const BottomNavigator = () => {

    const Tab = createBottomTabNavigator()
  return (
      <Tab.Navigator initialRouteName='Home'
        tabBarOptions={{
            style: {
                height: 55
            },
            showLabel: false
        }}
      >
          <Tab.Screen name='Home' component={HomeScreen} 
            options={{
                headerShown: false,
                tabBarIcon: () => 
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='home' size={23} color='#000' />
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Home</Text>
                </View>}}
          />
          <Tab.Screen name='Events' component={EventScreen} 
            options={{tabBarIcon: () => 
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='calendar' size={23} color='#000' />
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Events</Text>
                </View>}}
          />
          <Tab.Screen name='Forum' component={ForumScreen} 
            options={{tabBarIcon: () => 
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='message-square' size={23} color='#000' />
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Forum</Text>
                </View>}}
          />
      </Tab.Navigator>
  )
}

export default BottomNavigator