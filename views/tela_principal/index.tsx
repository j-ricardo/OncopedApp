import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NativeBaseProvider, Center, Button, extendTheme } from "native-base";
import React, {useState, useEffect} from 'react';

export default function TelaPrincipal({ navigation }: any){
    return (
        <Text style={{ 
            fontSize: 22,
            color: '#000'
          }}
          >
            Teste
        </Text>
    );
} 