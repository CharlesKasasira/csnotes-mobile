import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Time from '../components/Time'

const TimeTableScreen = () => {
  return (
    <ScrollView>
      <Time 
        day='Monday'
        courseUnit1='Computer Literacy'
        room1='6B'
        courseUnit2='Computer Literacy'
        room2='6B'
      />
      <Time 
        day='Tuesday'
        courseUnit1='Digital Innovation and Computer Thinking'
        room1='1B'
        courseUnit2='Maths for computer science'
        room2='4A'
      />
      <Time 
        day='Wednesday'
        courseUnit1='Computer Orgnisation & Architecture'
        room1='3B'
        courseUnit2='Computer Organisation & Architecture'
        room2='3B'
      />
      <Time 
        day='Thursday'
        courseUnit1='Digital Innovation and Computer Thinking'
        room1='1B'
        courseUnit2='Maths for computer science'
        room2='4A'
      />
      <Time 
        day='Friday'
        courseUnit1='Structured & Object Oriented Programming'
        room1='1B'
        courseUnit2='Communication Skills'
        room2='4A'
      />
      <Time 
        day='Saturday'
        courseUnit1='Structured & OOP'
        room1='1B'
        courseUnit2='Communication Skills'
        room2='4A'
      />
    </ScrollView>
  )
}

export default TimeTableScreen