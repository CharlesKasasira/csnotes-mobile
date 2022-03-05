import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{fontFamily: 'Roboto-Bold'}}>LoginScreen</Text>
      <Icon name='home' size={25} color='black' />
      <Button 
        title='Login'
        color='#000'
        onPress={() => navigation.navigate('Tabs')}
      >
      </Button>
    </View>
  )
}

export default LoginScreen