import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.dark
  },
};

const App = () => {
  return (
      <NavigationContainer theme={MyTheme}>
        {/* <StatusBar barStyle="light-content"></StatusBar> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Start"
        >
          <Stack.Screen name="Start" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={CoffeeDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
