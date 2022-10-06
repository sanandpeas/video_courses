import React from "react";
import MainScreen from '../Screens/MainScreen';
import MathScreen from '../Screens/MathScreen';
import EngScreen from '../Screens/EngScreen';
import ProgrammScreen from '../Screens/ProgrammScreen';
import InfoScreen from '../Screens/InfoScreen';
import HomeScreen from '../Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Registration/LoginScreen';
import RegScreen from '../Registration/RegScreen';
import Menu from "../Screens/Menu";


const Stack = createNativeStackNavigator();

export default function Navigate() {
    return( <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Reg" component={RegScreen} />
            <Stack.Screen name="Math" component={MathScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Programm" component={ProgrammScreen} />
            <Stack.Screen name="Eng" component={EngScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
            
            
        </Stack.Navigator>
    </NavigationContainer>
    )
};