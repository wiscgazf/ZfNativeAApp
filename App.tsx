import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes, IRouteItem } from './src/router/routes';

const MainStackLayout = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStackLayout.Navigator
        screenOptions={() => ({
          header: () => null,
          gestureEnabled: true,
        })}>
        {routes.map(({ name, Component }: IRouteItem) => {
          return (
            <MainStackLayout.Screen
              name={name}
              component={Component}></MainStackLayout.Screen>
          );
        })}
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
