import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
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

        <View 
            style={{flexDirection: 'row', justifyContent: 'space-between',
            marginHorizontal: 20, marginTop: 10
        }}
        >
            <Text style={{fontSize: 20}}>Upcoming Events</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    height: 200,
                    width: 200,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    elevation: 10,
                    margin: 20,
                    overflow: 'hidden'
                }}
            >
                <View style={{flex: 0.7, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Digital Innovation and Computational Thinking</Text>
                </View>
                <View style={{flex: 0.3}}>
                    <Text>Nothing yet</Text>
                </View>
            </View>
            <View
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    elevation: 10,
                    margin: 20,
                    overflow: 'hidden'
                }}
            >
                <View style={{flex: 0.7, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Computer Literacy</Text>
                </View>
                <View style={{flex: 0.3}}>
                    <Text>Nothing yet</Text>
                </View>
            </View>
            <View
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    elevation: 10,
                    margin: 20,
                    overflow: 'hidden'
                }}
            >
                <View style={{flex: 0.7, backgroundColor: 'crimson', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Computer Organization and Architecture</Text>
                </View>
                <View style={{flex: 0.3}}>
                    <Text>Nothing yet</Text>
                </View>
            </View>

            <View
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    elevation: 10,
                    margin: 20,
                    overflow: 'hidden'
                }}
            >
                <View style={{flex: 0.7, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Structured and Object Oriented Programming</Text>
                </View>
                <View style={{flex: 0.3}}>
                    <Text>Nothing yet</Text>
                </View>
            </View>


            <View
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    elevation: 10,
                    margin: 20,
                    overflow: 'hidden'
                }}
            >
                <View style={{flex: 0.7, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Communication Skills</Text>
                </View>
                <View style={{flex: 0.3}}>
                    <Text>Nothing yet</Text>
                </View>
            </View>
        </ScrollView>


        
    </SafeAreaView>
  )
}

export default HomeScreen