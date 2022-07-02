/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });
const ProviderApp = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent(appName, () => ProviderApp);
