import React from "react";
import { StyleSheet, View,Text,Image, TouchableOpacity,Alert} from 'react-native';
import Navigate from "../Components/Navigate";
import Constants from 'expo-constants';
import LoginScreen from "../Registration/LoginScreen";


function Menu ({navigation}) {
    return(
        
        <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style = {styles.img}source={{uri: ("https://pixy.org/src2/576/5765642.png")}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Вы уже авторизированы !')}>
                 <Image style = {[styles.img, {right:170}]}source={{uri: ("https://avatars.mds.yandex.net/i?id=53b291d30480a5652c4752b84286e4a1-2465206-images-thumbs&n=13&exp=1")}}/>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                 <Image style = {[styles.img, {right:-0,top:200}]}source={{uri: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4qZG98z-qDfCuXJIvwgh972iZeH5d46xxg&usqp=CAU")}}/>
        </TouchableOpacity>
        
        </View>

    )}
            
        
                
const styles = StyleSheet.create({    

    body:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: "50%",
        flexDirection:'row',
        
    },
    img:{
        position:'relative',
        width:150,
        height:140,
        resizeMode:'contain',
        borderWidth:3,
        borderColor:'#94B6FF',
        borderRadius:20,

    }

});
    


export default Menu;
