import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image,Text,Linking} from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import Constants from 'expo-constants';

function ProgrammScreen ({navigation}) {
  
  const video = React.useRef(null);
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Программирование</Text>
      <ScrollView>
      <Text style={{fontSize:20}}>Введение в Python</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=hEgO047GxaQ&ab_channel=Telusko')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/hEgO047GxaQ/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Работа с массивами</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=nlP5kF1_efE&ab_channel=Simplilearn')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/nlP5kF1_efE/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Функции</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=NSbOtYzIQI0&ab_channel=CSDojo')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/NSbOtYzIQI0/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>ООП</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=qiSCMNBIP2g&ab_channel=Telusko')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/qiSCMNBIP2g/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Библиотеки</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=-29x_deQQus&ab_channel=Kite')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/-29x_deQQus/maxresdefault.jpg')}}
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
export default ProgrammScreen;