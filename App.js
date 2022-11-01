import React, { TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/src/view/screens/HomeScreens';
import CourseScreen from './app/src/view/screens/CourseScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: null}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerLeft: () => <Icon name="sort" size={25} style={{marginLeft: 20}} />,
          headerRight: () => <Image style={{height:40, width: 40, marginRight: 20}} source={require("./app/src/assets/person.jpg")}/>,
        }}></Stack.Screen>
        <Stack.Screen name='CourseScreen' component={CourseScreen} 
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity  activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-ios" size={25} style={{marginLeft: 20}} />
              </TouchableOpacity>
            ),            
            headerRight: () => <Icon name="more-vert" size={25} style={{marginRight: 20}} />
          })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;
