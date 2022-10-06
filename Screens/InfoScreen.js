import React from "react";
import { StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';




function MathScreen ({navigation}) {
    return(

          <View style={styles.container}> 
            <Text style={styles.text}>Инфорамция о приложении</Text>
            <Image style={{width:"95%",height:500}} source={{uri:('https://sun9-40.userapi.com/impf/m0OH-vWBKtFtRlb-rvwd7lB_n0Wurb18LWTT3Q/npQbePP6HPk.jpg?size=2560x1895&quality=96&sign=1b04ac4b8a2e496f10907d49f88cec24&type=album')}}/>
            <View style={styles.container_2}>
              <Text>
              Курсовая работа на тему: Приложение для видео курсов.{'\n'}    {'\n'}Работа выполнена студентом Финансового Университета при правительстве РФ Бодуновым Александром Сергеевичем{'\n'}  {'\n'}Группа Пи20-4{'\n'}  {'\n'}Научный руководитель: Крахмалёв Олег Николаевич{'\n'} {'\n'} {'\n'} {'\n'} {'\n'}        FinUnivCorp © 2022 Бодунов Александр
              </Text>
            </View>
          </View>
            
        );
                }
  const styles = StyleSheet.create({    

  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
    paddingBottom:25,
    flexDirection:'column',
    backgroundColor:'#fff',
  },
  container_2:{
    textAlign: 'center',
    
    padding: 20,
    backgroundColor:'#fff',
  },
 
  text: {
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily:'Palatino'
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

  });



export default MathScreen;
