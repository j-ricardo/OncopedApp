import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Center, NativeBaseProvider, Button} from "native-base";
import React, { useState, useEffect } from 'react';
import Navegacao from '../../features/navegacao/navegacao';

export default function ViewNutricao({ navigation }: any){
    Navegacao(3, 'ViewNutricao');
    return (
        <NativeBaseProvider>
            <View style={{
                backgroundColor: '#fea9a7',
                zIndex: -999,
                height: '100%',
                width: '100%',
                position: 'absolute'
            }}>
                <View 
                    style={{
                        backgroundColor: '#fff',
                        height: '75%',
                        width: '100%',
                        marginTop: '25%',
                        borderTopRightRadius: 70,
                        borderTopLeftRadius: 70,
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }}
                />
            </View>
            <View style={{
                backgroundColor: 'transparent'
            }}>
                <Center 
                    style={{
                        width: '100%',
                        height: 300
                    }}
                >
                    <Image               
                        style={{
                            marginTop: '20%',
                            height: 220,
                            marginHorizontal: '20%',
                            resizeMode: 'contain' 
                        }}                
                        source={require('../../assets/ICO_NUTRICAO.png')} 
                    />
                </Center>
                <View
                    style={{
                        height: '62%',
                        backgroundColor: 'transparent'
                    }}
                >
                    <ScrollView>
                        <VStack 
                            space={4} 
                            alignItems="center"
                            style={{marginTop: 30, width: '100%'}}
                        >
                            <Center style={{ width: '100%' }}>
                                <Button
                                    style={{
                                        width: '70%',
                                        height: 110,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0'
                                    }}
                                    onPress={() => {
                                        console.log("click action");
                                        navigation.navigate('ViewPassosNutricao');
                                    }}
                                >
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Passos para uma{"\n"}
                                        alimentação saudável
                                    </Text> 
                                </Button>
                            </Center>
                            <Center style={{ width: '100%' }}>
                                <Button
                                    style={{
                                        width: '70%',
                                        height: 110,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0'
                                    }}
                                    onPress={() => {
                                        console.log("click action");
                                        navigation.navigate('ViewMitosNutricao');
                                    }}
                                >
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Os mitos da{"\n"}
                                        alimentação durante o{"\n"}
                                        tratamento do câncer
                                    </Text> 
                                </Button>
                            </Center>                            
                            <Center style={{ width: '100%' }}>
                                <Button
                                    style={{
                                        width: '70%',
                                        height: 110,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0',
                                        marginBottom: 20
                                    }}
                                    onPress={() => {
                                        console.log("click action");
                                        navigation.navigate('ViewSondasNutricao');
                                    }}
                                >
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Sondas{"\n"}
                                        alimentares
                                    </Text>
                                </Button>
                            </Center>
                        </VStack>
                    </ScrollView> 
                </View>                 
            </View>            
        </NativeBaseProvider>        
    );
}