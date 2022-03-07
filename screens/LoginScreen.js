import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../assets/styles/styles'

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