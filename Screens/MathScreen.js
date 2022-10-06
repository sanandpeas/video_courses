
import { StyleSheet, ScrollView, View, TouchableOpacity, Image,Text,Linking} from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

function MathScreen ({navigation}) {
  
  const video = React.useRef(null);
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Математика</Text>
      <ScrollView>
      <Text style={{fontSize:20}}>Интегралы</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=e1nxhJQyLYI&ab_channel=NancyPi')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/e1nxhJQyLYI/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Теория вроятностей</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=KzfWUEJjG18&ab_channel=mathantics')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/KzfWUEJjG18/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Линейные операции с матрицой</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=RYP9Bg-03Gg&ab_channel=eHowEducation')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/RYP9Bg-03Gg/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Математическая статистика</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=TqM0oUJM2XM&ab_channel=ProfessorKnudson')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/TqM0oUJM2XM/maxresdefault.jpg')}}
        />
      </TouchableOpacity>
      <Text style={{fontSize:20}}>Геометрические вектора</Text>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=O2p9YTWHbBA&ab_channel=ABCNewsIn-depth')}}>
      <Image
        style={styles.video}
        source={{uri:('https://i.ytimg.com/vi/O2p9YTWHbBA/maxresdefault.jpg')}}
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
export default MathScreen;