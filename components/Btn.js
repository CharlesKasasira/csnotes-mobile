import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../assets/styles/styles'

const Btn = ({text, pressed}) => {
  return (
    <TouchableOpacity style={GLOBAL_STYLES.btn}
      onPress={pressed}
    >
      <Text style={GLOBAL_STYLES.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Btn