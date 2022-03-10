import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../assets/styles/styles'
import { Btn } from '../components'

const ForgotPasswordScreen = ({navigation}) => {
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

          <Btn
            text={'SUBMIT'}
            pressed={() => navigation.navigate('Tabs')}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>Remember the Password, Login</Text>
            </TouchableOpacity>
          </View>
          
      </View>
  )
}

export default ForgotPasswordScreen