/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';

const App = () => {

  return (

    <NavigationContainer>

      <NativeBaseProvider>

        <HomeScreen />

      </NativeBaseProvider>

    </NavigationContainer>

  );

};

const styles = StyleSheet.create({
  
});

export default App;
