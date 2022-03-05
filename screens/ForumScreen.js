import { View, Text, Image } from 'react-native'
import React from 'react'

const ForumScreen = () => {
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
                        <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>Forum</Text>
                    </View>
                </View>

                <View>
                    <Image 
                        source={require('../assets/media/img/profile.jpg')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                    />
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default ForumScreen