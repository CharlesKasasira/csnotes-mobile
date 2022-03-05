import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const EventScreen = ({ navigation }) => {
  return (
    <View>
      <View
            style={{
                backgroundColor: '#000',
            }}
        >
            <View style={{flexDirection: 'row', paddingHorizontal: 20, marginVertical: 20, justifyContent: 'space-between'}}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>Events</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Image 
                            source={require('../assets/media/img/profile.jpg')}
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default EventScreen