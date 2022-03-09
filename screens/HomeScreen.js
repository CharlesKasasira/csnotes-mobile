import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { linear } from 'react-native/Libraries/Animated/Easing'
import { GLOBAL_STYLES } from '../assets/styles/styles'

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View
            style={{
                backgroundColor: '#222',
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
                <View style={{flex: 0.7, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Digital Innovation and Computational Thinking</Text>
                </View>
                <View style={{flex: 0.3, padding: 10}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Business Canvas</Text>
                    <Text>10/03/2022 11:59pm</Text>
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
                <View style={{flex: 0.3, padding: 10}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Excel</Text>
                    <Text>10/03/2022 11:59pm</Text>
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
                <View style={{flex: 0.3, padding: 10}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Test 01</Text>
                    <Text>10/03/2022 11:59pm</Text>
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
                <View style={{flex: 0.7, backgroundColor: '#ececea', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Structured and Object Oriented Programming</Text>
                </View>
                <View style={{flex: 0.3, padding: 10}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Test 02</Text>
                    <Text>10/03/2022 11:59pm</Text>
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
                <View style={{flex: 0.7, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Communication Skills</Text>
                </View>
                <View style={{flex: 0.3, padding: 10}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Business Canvas</Text>
                    <Text>10/03/2022 11:59pm</Text>
                </View>
            </View>
        </ScrollView>

        <View 
            style={{flexDirection: 'row', justifyContent: 'space-between',
            marginHorizontal: 20, marginTop: 10
        }}
        >
            <Text style={{fontSize: 20}}
                onPress={() => navigation.navigate('Time Table')}
            >Time Table</Text>
            <Text style={{fontSize: 20}}>Track Progress</Text>
        </View>


        <View style={{backgroundColor: '#fff', marginTop: 20}}>
            <View style={{ flexDirection: 'row', paddingVertical: 10, paddingLeft: 10}}>
                <View style={{backgroundColor: '#ececea', height: 55, width: 55, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>CSC</Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>1109</Text>
                </View>
                <View>
                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>Digital Innovation</Text>
                    <Text>Last modified 14minutes ageo</Text>
                </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', paddingVertical: 10, paddingLeft: 10}}>
                <View style={{backgroundColor: '#ececea', height: 55, width: 55, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>CSC</Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>1100</Text>
                </View>
                <View>
                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>Computer Literacy</Text>
                    <Text>Last modified 14minutes ageo</Text>
                </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', paddingVertical: 10, paddingLeft: 10}}>
                <View style={{backgroundColor: '#ececea', height: 55, width: 55, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>CSC</Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>1104</Text>
                </View>
                <View>
                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>Computer Organization & Architecture</Text>
                    <Text>Last modified 14minutes ageo</Text>
                </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', paddingVertical: 10, paddingLeft: 10}}>
                <View style={{backgroundColor: '#ececea', height: 55, width: 55, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>CSC</Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>1102</Text>
                </View>
                <View>
                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>Structured & OOP</Text>
                    <Text>Last modified 14minutes ageo</Text>
                </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', paddingVertical: 10, paddingLeft: 10}}>
                <View style={{backgroundColor: '#e3e3e1', height: 55, width: 55, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>CSK</Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>1100</Text>
                </View>
                <View>
                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>Communication Skills</Text>
                    <Text>Last modified 14minutes ageo</Text>
                </View>
            </View>
        </View>
            
        


        
    </ScrollView>
  )
}

export default HomeScreen