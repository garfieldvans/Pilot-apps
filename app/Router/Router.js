import * as React from 'react';
import {  Text, Platform,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import LoginScreen from '../Screens/Login/LoginScreen';
import LoginAdminScreen from '../Screens/Login/LoginAdminScreen';
import TabNavigation from './Tabs/TabNavigation';
import Greets from './Greets';


const Stack = createNativeStackNavigator();


export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='greet' component={Greets} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='LoginAdmin' component={LoginAdminScreen} />
        <Stack.Screen name='tabs' component={TabNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
