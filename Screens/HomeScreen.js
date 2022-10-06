import React from "react";
import { StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';


function MathScreen ({navigation}) {
    return(

          <View> 
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
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 13,
      width: '30%',
      height: 60,
      left: '35%',
      backgroundColor: '#32DFFF',
  },
  text_1: {
    color: 'black',
    justifyContent: "center",
    textAlign: "center",
      fontSize: 25,
  },
  footer:{
    flex:1,
    
    bottom:'-200%',
    flexDirection:'row'
  },
  log_out:{
    flex:1,
    position: 'absolute',
    width:30,
    height:50,
    resizeMode:'contain',
    alignContent:'flex-end',
    alignItems:'flex-end',
    left: "90%",
    bottom:-85
  },
  img_footer:{
    width:40,
    height:50,
    bottom:'30%',
    marginLeft:70,
    resizeMode:'contain',
  },

  });



export default MathScreen;
