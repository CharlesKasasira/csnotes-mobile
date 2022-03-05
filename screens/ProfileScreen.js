import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const ProfileScreen = ({navigation}) => {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTitle: () => <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Profile</Text>
  })

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10}}>
        <Image 
            source={require('../assets/media/img/profile.jpg')}
            style={{
                height: 150,
                width: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: '#000'
            }}
        />
        <View
            style={{
                backgroundColor: 'black',
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15
            }}
        >
            <Icon name='camera' color='#fff' size={18}/>
        </View>
        
        <Text style={{fontWeight: 'bold', color: '#000', fontSize: 20}}>Charles Kasasira</Text>
      </View>

        {/* Name */}
      <View style={{marginBottom: 10, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Name</Text>
            <Icon name='edit' size={20} color='#000' />
          </View>
          <Text>Charles Kasasira</Text>
      </View>
        {/* Email */}
      <View style={{marginBottom: 10, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Email</Text>
            <Icon name='edit' size={20} color='#000' />
          </View>
          <Text>charleskasasira01@gmail.com</Text>
      </View>

      {/* Number */}
      <View style={{marginBottom: 10, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Phone Number</Text>
            <Icon name='edit' size={20} color='#000' />
          </View>
          <Text>+256750118523</Text>
      </View>

        {/* Name */}
      <View style={{marginBottom: 10, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Password</Text>
            <Icon name='edit' size={20} color='#000' />
          </View>
          <Text>**************</Text>
      </View>

      {/* Delete */}
      <View style={{marginBottom: 10, padding: 10, flexDirection: 'row', alignItems: 'baseline', backgroundColor: 'red'}}>
          <Text style={{marginRight: 10, color: '#fff'}}>√</Text>
          <Text style={{color: '#fff'}}>Delete</Text>
      </View>
        

      <Text>See all</Text>
      <Text>Digital Innovation and Computational Thinking</Text>
    </View>
  )
}

export default ProfileScreen