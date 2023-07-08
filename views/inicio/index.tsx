import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NativeBaseProvider, Center, Button, extendTheme } from "native-base";
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Navegacao from '../../features/navegacao/navegacao';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function TelaInicial({ navigation }: any)  {
  const [loadingFont, setLoadingFont] = useState<boolean>(false);
  Navegacao(0, 'TelaInicial');
 
  useEffect(()=>{    
    async function loadFonts(){
      await Font.loadAsync({
        'Montserrat': require("../../assets/fonts/Montserrat-Regular.ttf"),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf')
      }).then(res=>{
        console.log("FONTS LOADED!");
        setLoadingFont(true)
      }).catch(Err=>{
        setLoadingFont(true);
        console.log(Err);
      }); 
    }
    loadFonts();
  },[])

  return (
    <NativeBaseProvider config={config}>
      {
        loadingFont?
        <Center 
          style={styles.container}
          bg={{
          linearGradient: {
            colors: ['#fff', '#abcef7'],
          }
        }}>
          <Text style={{ 
            textTransform: 'uppercase', 
            color: '#fea9a7', 
            fontSize: 20}}
          >
            Bem vindo à
          </Text>
          <Image style={{ width: '80%', height: '18%', resizeMode: 'contain'}} source={require('../../assets/logo_01.png')} />
          <Button 
            size={"lg"}
            style={{ 
              width: '70%',
              borderWidth: 3,
              borderRadius: 15,
              borderColor: '#fff',
              backgroundColor: '#fea9a7'}}
            onPress={() => {
              console.log("click action");
              navigation.navigate('ViewInicio');
            }}
          >
            <Text 
              style={{ 
                color: "white", 
                fontSize: 22,
              }}
            >
              Entrar
            </Text>
          </Button>
          <StatusBar style="auto" />
        </Center>
        : <></>
      }       
    </NativeBaseProvider>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontFamily: 'Montserrat'
  },
});
