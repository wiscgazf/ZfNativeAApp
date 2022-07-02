import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLayout from './src/layout/MainLayout';
import Test from './src/views/Test';

const MainStackLayout = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStackLayout.Navigator
        screenOptions={({ route }) => ({
          header: () => null,
          gestureEnabled: true,
        })}>
        <MainStackLayout.Screen
          name={'MainLayout'}
          component={MainLayout}></MainStackLayout.Screen>
        <MainStackLayout.Screen
          name={'Test'}
          component={Test}></MainStackLayout.Screen>
      </MainStackLayout.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    color: '#b4b4b4',
  },
  tabLabelActive: {
    fontSize: 12,
    color: '#ff0',
  },
});

export default App;
