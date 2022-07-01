import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes, getLabel, ITabItem } from './src/router/tab-router';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return <Text>aa</Text>;
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={styles[`tabLabel${focused ? 'Active' : ''}`]}>
                {getLabel(route.name)}
              </Text>
            );
          },
          header: () => null,
        })}>
        {tabRoutes.map(({ name, Component }: ITabItem) => {
          return <Tab.Screen name={name} component={Component}></Tab.Screen>;
        })}
      </Tab.Navigator>
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
