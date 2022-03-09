import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../assets/styles/styles'
import { Btn } from '../components'

const LoginScreen = ({navigation}) => {
  return (
      <View style={GLOBAL_STYLES.loginContainer}>
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Text>Login</Text>
          </View>
          <View>
            <Text>Email</Text>
            <TextInput 
              style={GLOBAL_STYLES.inputField}
            />
          </View>

          <View>
            <Text>Password</Text>
            <TextInput
              style={GLOBAL_STYLES.inputField}
            />
          </View>

          <Btn
            text={'LOGIN'}
            pressed={() => navigation.navigate('Tabs')}
          />
      </View>
  )
}

export default LoginScreen