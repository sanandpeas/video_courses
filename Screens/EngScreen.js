import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image,Text,Linking} from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import Constants from 'expo-constants';

function EngScreen ({navigation}) {
  
  const video = React.useRef(null);
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Химия</Text>
      <ScrollView>
      <Text style={{fontSize:20}}>Вещества, молекулы, атомы</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=N4nU39BMjc8&ab_channel=%D0%A2%D0%92%D0%9E%D0%99%D0%98%D0%9D%D0%A2%D0%95%D0%A0%D0%9D%D0%95%D0%A2%D0%A0%D0%95%D0%9F%D0%95%D0%A2%D0%98%D0%A2%D0%9E%D0%A0%D0%BF%D0%BE%D1%85%D0%B8%D0%BC%D0%B8%D0%B8%C2%A9')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/cg6vRG5AafI/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Виды химических связей</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=FQEj97Je-T4&ab_channel=PROFIEDUCATION')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/FQEj97Je-T4/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Изотопы</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=N4nU39BMjc8&ab_channel=%D0%A2%D0%92%D0%9E%D0%99%D0%98%D0%9D%D0%A2%D0%95%D0%A0%D0%9D%D0%95%D0%A2%D0%A0%D0%95%D0%9F%D0%95%D0%A2%D0%98%D0%A2%D0%9E%D0%A0%D0%BF%D0%BE%D1%85%D0%B8%D0%BC%D0%B8%D0%B8%C2%A9')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/XwL2J4KXz18/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Электролиз</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=su5nwvkljK0&ab_channel=%D0%A5%D0%B8%D0%BC%D0%B8%D1%8F%D0%95%D0%93%D0%AD2022%3A%D0%9B%D0%B8%D1%8F%D0%9C%D0%B5%D0%BD%D0%B4%D0%B5%D0%BB%D0%B5%D0%B5%D0%B2%D0%B0%D0%B8%D0%AE%D0%BB%D1%8F%D0%9D%D0%B5%D0%BE%D0%BD')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/su5nwvkljK0/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Гидролиз</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=EE1wh2Zwxgk&ab_channel=%D0%A0%D0%BE%D1%81%D0%BE%D0%B1%D1%80%D0%BD%D0%B0%D0%B4%D0%B7%D0%BE%D1%80')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/lP4d0hlmYY4/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAH6v0fbzCkVTw-vYmQYM6J1oe1mw')}}
        />
      </TouchableOpacity>
      </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image style = {styles.img_footer} source={{uri:'https://www.pngmart.com/files/15/Home-Silhouette-PNG-Image.png'}}/>
            </TouchableOpacity>   
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image style = {styles.img_footer} source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32360.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <Image style = {styles.img_footer} source={{uri:'https://cdn-icons-png.flaticon.com/512/2452/2452149.png'}}/>
            </TouchableOpacity>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    paddingTop: 70,
    flexDirection:'column',
  },
  
  text: {
    textAlign:'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 25,
    fontFamily:'Palatino'
  },
  
  video: {
    width:360,
    height:200,
    resizeMode:'contain',
    zIndex:1,
    
   },
  
  footer:{
    flex:1,
    left: '-4%',
    bottom:'-265%',
    flexDirection:'row'
  },
  img_footer:{
    width:40,
    height:50,
    bottom:'30%',
    marginLeft:70,
    resizeMode:'contain',
  },
});
export default EngScreen;