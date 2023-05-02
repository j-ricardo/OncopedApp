import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button } from "native-base";
import React, {useState, useEffect} from 'react';


export default function ViewTerapias(){
    return (
        <NativeBaseProvider>
            <ScrollView>
                <VStack 
                    space={4} 
                    alignItems="center"
                    style={{marginTop: 80}}
                >
                    <Center >
                        <Text>Selecione a opção que</Text>
                        <Text>você deseja conhecer</Text>
                    </Center>
                    <Center>
                        <Button>Quimioterapia</Button>
                    </Center>
                    <Center>
                        <Button>Radioterapia</Button>
                    </Center>
                    <Center>
                        <Button>Sinais e sintomas</Button>
                    </Center>
                </VStack>
            </ScrollView>  
        </NativeBaseProvider>        
    );
}