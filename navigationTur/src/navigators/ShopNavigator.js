import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';


const Stack = createStackNavigator(); 

const shopNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {CategoriesScreen}/>
        <Stack.Screen name = "List" component = {CategoryBreadScreen}/>
        <Stack.Screen name = "Detail" component = {BreadDetailScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default shopNavigator

