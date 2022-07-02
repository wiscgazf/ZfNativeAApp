import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes, getLabel, ITabItem } from '../router/tab-router';

const Tab = createBottomTabNavigator();

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
              {getLabel(route.name)?.label}
            </Text>
          );
        },
        title: getLabel(route.name)?.label,
        headerTitleAlign: 'center',
        header: () => null,
      })}>
      {tabRoutes.map(({ name, Component }: ITabItem) => {
        return <Tab.Screen name={name} component={Component}></Tab.Screen>;
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 13,
    color: '#04081766',
    fontWeight: '500',
  },
  tabLabelActive: {
    fontSize: 13,
    color: '#040817',
    fontWeight: '500',
  },
  tabIcon: {
    marginBottom: -4,
  },
});

export default MainLayout;
