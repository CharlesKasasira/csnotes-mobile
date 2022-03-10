import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../assets/styles/styles'
import { Btn } from '../components'

const SignUpScreen = ({navigation}) => {
  return (
      <View style={GLOBAL_STYLES.loginContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{alignItems: 'center', marginBottom: 30, backgroundColor: '#222', height: 80, width: 80, justifyContent: 'center', borderRadius: 40}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>J</Text>
            </View>
          </View>
          
          <View>
            <Text>Name</Text>
            <TextInput 
              style={GLOBAL_STYLES.inputField}
              placeholder='Enter Name'
            />
          </View>

          <View>
            <Text>Email</Text>
            <TextInput 
              style={GLOBAL_STYLES.inputField}
              placeholder='Enter Email'
            />
          </View>

          <View>
            <Text>Phone Number</Text>
            <TextInput 
              style={GLOBAL_STYLES.inputField}
              placeholder='Enter Phone Number'
            />
          </View>

          <View>
            <Text>Course</Text>
            <TextInput 
              style={GLOBAL_STYLES.inputField}
              placeholder='Enter course'
            />
          </View>

          <View>
            <Text>Year of study</Text>
            <TextInput 
              style={GLOBAL_STYLES.inputField}
              placeholder='Year of Study'
            />
          </View>

          <View>
            <Text>Password</Text>
            <TextInput
              style={GLOBAL_STYLES.inputField}
              placeholder='Create Password'
            />
          </View>

          <Btn
            text={'REGISTER'}
            pressed={() => navigation.navigate('Tabs')}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>Already Have an account, Sign In</Text>
            </TouchableOpacity>
          </View>
          
      </View>
  )
}

export default SignUpScreen