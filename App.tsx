import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NativeBaseProvider, Center, Button, extendTheme } from "native-base";
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import TelaInicial from './views/inicio/index';
import ViewInicio from './views/principal/index';
import ViewTerapias from './views/terapias';

const Stack = createDrawerNavigator();
const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Center
        bg={{
          linearGradient: {
            colors: ['#fff', '#fef1f0'],
          }}}
      >
        <Image 
          style={{ 
            width: '80%', 
            height: 180, 
            resizeMode: 'contain'
          }} 
          source={require('./assets/logo_01.png')} 
        /> 
      </Center>
           
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator 
          id="LeftDrawer"
          initialRouteName="TelaInicial"
          useLegacyImplementation
          screenOptions={{               
              drawerPosition: 'left',
              drawerStyle: {height: '100%'},
              headerTransparent: true,
              headerTitleStyle: {
                color: 'transparent'
              }
          }}          
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >          
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{ 
              headerShown: false, 
              drawerItemStyle: {
                display: 'none'
              }
            }} 
          />
          <Stack.Screen
            name="ViewInicio"
            component={ViewInicio}
            options={{
              title: 'Início'
            }}
          />
          <Stack.Screen
            name="ViewTerapias"
            component={ViewTerapias}
            options={{
              title: 'Terapias'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}
