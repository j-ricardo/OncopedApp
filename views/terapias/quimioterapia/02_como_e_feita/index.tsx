import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import Navegacao from '../../../../features/navegacao/navegacao';
import { useBackButton, ViewReturnedInBackPress } from '../../../../features/backpress/backpress';

export default function ViewComoEhFeitaQuimioterapia({ navigation }: any){
    Navegacao(6, 'ViewComoEhFeitaQuimioterapia');
    useBackButton(handler);   

    function handler(){
        console.log('backpress');
        const nav: string = ViewReturnedInBackPress(6);
        console.log('retornar para view', nav);
        navigation.navigate(nav);
        return true; 
    }

    return (
        <NativeBaseProvider>
            <View
                style={{
                    backgroundColor: '#96b9e0',
                    width: '100%',
                    height: '20%',
                    borderBottomColor: '#d2d9e2',
                    borderBottomWidth: 10,
                    
                }}
            >
                <Text 
                    style={{ 
                        color: "white", 
                        fontSize: 19, 
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginTop: '10%',
                        marginBottom: 20
                    }}
                >
                    Terapias
                </Text> 
                <Text 
                    style={{ 
                        color: "white", 
                        fontSize: 30, 
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginBottom: 20
                    }}
                >
                    Quimioterapia
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderLeftColor: '#d2d9e2',
                    borderLeftWidth: 10,
                    borderRightColor: '#d2d9e2',
                    borderRightWidth: 10,
                    height: '80%'
                }}
            >
                 <ScrollView>
                    <VStack 
                        space={4} 
                        style={{marginTop: 10, width: '100%'}}
                    >
                        <Center style={{ marginVertical: 10 }}> 
                            <Button
                                style={{
                                    width: '80%',
                                    height: 50,
                                    borderRadius: 70,
                                    backgroundColor: '#fea9a7'
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
                                    Como é feita?
                                </Text> 
                            </Button>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_01.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_02.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_03.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_04.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_05.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center style={{ marginBottom: 10 }}> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_06.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}