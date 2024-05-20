import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './components/Home';
import Result from './components/Result';


const App = () => {
  const Stack = createNativeStackNavigator();
  // const [headerback,setHeaderback]= useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Result" options={{ headerShown: false }} component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
