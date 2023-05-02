import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button } from "native-base";
import React, {useState, useEffect} from 'react';
import ViewTerapias from '../terapias';

export default function ViewInicio({ navigation }: any) {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <VStack 
                    space={4} 
                    alignItems="center"
                    style={{marginTop: 20}}
                >
                    <Center >
                        <Text>Clique na opção que</Text>
                        <Text>deseja para interagir</Text>
                    </Center>
                    <Center>
                        <Button
                            onPress={() => {
                                console.log("click action");
                                navigation.navigate('ViewTerapias');
                            }}
                        >
                            Terapias
                        </Button>
                    </Center>
                    <Center>
                        <Button>Nutrição</Button>
                    </Center>
                    <Center>
                        <Button>Vídeo</Button>
                    </Center>
                    <Center>
                        <Button>Referências</Button>
                    </Center>
                </VStack>
            </ScrollView>  
        </NativeBaseProvider>        
    );
}