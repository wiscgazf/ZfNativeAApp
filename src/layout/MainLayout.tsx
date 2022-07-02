import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes, getLabel, ITabItem } from '../router/tab-router';
import PubHeader from '../components/PubHeader';

const Tab = createBottomTabNavigator();
const batteryBarH = (StatusBar.currentHeight ?? 40) + 50;

const MainLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const url = focused
            ? getLabel(route.name)?.selectIcon
            : getLabel(route.name)?.icon;
          return <Image source={url} style={styles.tabIcon}></Image>;
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backfaceVisibility: 'hidden',
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text style={styles[`tabLabel${focused ? 'Active' : ''}`]}>
              {route.name}
            </Text>
          );
        },
        header: () => (
          <View style={{ backgroundColor: '#fff', height: batteryBarH }}>
            <PubHeader />
          </View>
        ),
      })}>
      {tabRoutes.map(({ name, Component }: ITabItem) => {
        return (
          <Tab.Screen name={name} component={Component} key={name}></Tab.Screen>
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    color: '#04081766',
    fontWeight: '600',
    marginBottom: 2,
  },
  tabLabelActive: {
    fontSize: 12,
    color: '#040817',
    fontWeight: '600',
    marginBottom: 2,
  },
  tabIcon: {
    marginBottom: -5,
  },
});

export default MainLayout;
