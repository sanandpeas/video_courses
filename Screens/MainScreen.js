import React from "react";
import { StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';



function Main ({navigation}) {
    return(
          <View style={styles.body}> 
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Image style={styles.log_out} source={{uri:('https://static.tildacdn.com/tild3665-3134-4863-b132-626435376266/img_517622_-min.png')}}/>
              </TouchableOpacity>
            <Text style={styles.text}>Математика</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Math')}>
              <Image style={styles.img} source={{uri:('https://i.pinimg.com/originals/5c/60/bc/5c60bcddd50cc037cc3aeb75efc03c95.gif')}}/>
            </TouchableOpacity >
            <Text style={[styles.text,styles.bottom_pr]}>Программирование</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Programm')}>
              <Image style={[styles.img,styles.bottom_pr]} source={{uri:('https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif')}}/>
            </TouchableOpacity>
            <Text style={[styles.text,styles.bottom_him]}>Химия</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Eng')}>
              <Image style={[styles.img, styles.bottom_him]} source={{uri:('https://i.pinimg.com/originals/c9/ff/af/c9ffaff3f15bd19379a360edb33080d5.gif')}}/>
            </TouchableOpacity>
          </View>
            
        );
                }
        const styles = StyleSheet.create({    
        body:{
          flex: 1,
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#ecf0f1',
          alignItems: 'center',
          padding: 8,
          flexDirection:'column',
          backgroundColor:'#fff',
        },
        info:{
          flex:1,
          right:150,
         
          zIndex:1,
          bottom:30,
          resizeMode:'contain',
          width:40,
          height:50,
          position:'absolute'
        },

        bottom_him: {
          bottom: -25,

        },
        bottom_pr: {
          bottom: -15,

        },

        img:{
          width:300,
          height:200,
          resizeMode:'contain',
          zIndex:1,
        },
        text: {
          color: 'black',
          fontWeight:'bold',
          fontSize: 25,
          fontFamily:'Palatino'
        },

        footer:{
          flex:1,
          position:'absolute',
          bottom:'-231%',
          flexDirection:'row'
        },
        log_out:{
          flex:1,
          left:"40%",
          zIndex:1,
          bottom:30,
          resizeMode:'contain',
          width:32,
          height:50,
          position:'absolute'
        },
        img_footer:{
          width:40,
          height:50,
          bottom:'30%',
          marginLeft:70,
          resizeMode:'contain',
        },

        });
    


export default Main;
