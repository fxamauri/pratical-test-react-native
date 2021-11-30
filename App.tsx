import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato'

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  })


  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
      <ThemeProvider theme={theme} >
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
  );
}

