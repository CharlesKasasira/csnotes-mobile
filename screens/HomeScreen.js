import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View
            style={{
                backgroundColor: '#000',
            }}
        >
            <View style={{flexDirection: 'row', paddingHorizontal: 20, marginVertical: 30, justifyContent: 'space-between'}}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#fff', fontSize: 22}}>Hello, </Text>
                        <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>CHARLES</Text>
                    </View>
                    <Text style={{color: '#fff', fontSize: 18}}>What's up</Text>
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
    </SafeAreaView>
  )
}

export default HomeScreen