import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, BackHandler } from 'react-native';
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
import ViewQuimioterapia from './views/terapias/quimioterapia';
import ViewOQueEhQuimioterapia from './views/terapias/quimioterapia/01_o_que_e';
import ViewRadioterapia from './views/terapias/radioterapia';
import ViewSinaisSintomas from './views/terapias/sinais_sintomas';



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
          useLegacyImplementation
          initialRouteName="TelaInicial"
          backBehavior='order'
          screenOptions={{   
            headerTintColor: '#fff',            
            drawerPosition: 'left',
            drawerStyle: {height: '100%'},
            headerTransparent: true,
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
              title: 'Início',
              headerTitleStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewTerapias"
            component={ViewTerapias}
            options={{
              title: 'Terapias'
            }}
          />
          <Stack.Screen
            name="ViewQuimioterapia"
            component={ViewQuimioterapia}
            options={{
              title: 'Quimioterapia'
            }}
          />
          <Stack.Screen
            name="ViewOQueEhQuimioterapia"
            component={ViewOQueEhQuimioterapia}
            options={{
              title: 'O que é quimioterapia',
              headerTitleStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewRadioterapia"
            component={ViewRadioterapia}
            options={{
              title: 'Radioterapia'
            }}
          />
          <Stack.Screen
            name="ViewSinaisSintomas"
            component={ViewSinaisSintomas}
            options={{
              title: 'Sinais e Sintomas'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}
