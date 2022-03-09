import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../assets/styles/styles'
import { Btn } from '../components'

const LoginScreen = ({navigation}) => {
  return (
      <View style={GLOBAL_STYLES.loginContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{alignItems: 'center', marginBottom: 30, backgroundColor: '#222', height: 80, width: 80, justifyContent: 'center', borderRadius: 40}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>J</Text>
            </View>
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
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text>Don't have an account, Sign Up</Text>
            </TouchableOpacity>
          </View>
          
      </View>
  )
}

export default LoginScreen