import { View, Text } from 'react-native'
import React from 'react'

const Time = ({day, courseUnit1, courseUnit2, room1, room2}) => {
  return (
    <View>
      <View style={{paddingHorizontal: 10}}>
        <View>
          <Text style={{color: '#000', padding: 10, fontSize: 20, fontWeight: 'bold'}}>{day}</Text>
        </View>
        <View style={{backgroundColor: '#fff', elevation: 4, paddingHorizontal: 10, paddingVertical: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>5:00 - 7:00: </Text>
            <View>
              <Text style={{color: '#000', fontSize: 15}}>{courseUnit1}</Text>
              <Text style={{fontSize: 15}}>Room LLT {room1}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>7:00 - 9:00: </Text>
            <View>
              <Text style={{color: '#000', fontSize: 15}}>{courseUnit2}</Text>
              <Text style={{fontSize: 15}}>Room LLT {room2}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Time