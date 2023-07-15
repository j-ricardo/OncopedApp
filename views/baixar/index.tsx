import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, HStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import Navegacao from '../../features/navegacao/navegacao';

export default function ViewBaixar({ navigation }: any){
    Navegacao(32, 'ViewBaixar');

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
                    {"   "}
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
                    Para baixar
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
                                    paddingVertical: 15,
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
                                  Baixe e imprima para pintar e se divertir!
                                </Text>
                            </Button>
                        </Center>
                        <HStack space={3} justifyContent="center">
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%', height: 'auto'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1J-yBkt8Gn08zaqdWdJh91qt1lakF6lUG/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: 130,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-1.png')} 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1AQFF4YbRQ8m-nVsDuXiGYODjE3SsyLwU/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',      
                                        height: 130,                                      
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-2.png')} 
                                />
                            </TouchableOpacity>
                        </HStack>
                        <HStack space={3} justifyContent="center">
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%', height: 'auto'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1PB2aDdHFjoADy2z5x7cF5ReIaS9u9v-a/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: 130,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-3.png')} 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/17-GrNPyt6woF96QRUiLV1zpij0myQyBh/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',      
                                        height: 130,                                      
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-4.png')} 
                                />
                            </TouchableOpacity>
                        </HStack>
                        <HStack space={3} justifyContent="center">
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%', height: 'auto'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1q6hSLwWIySm82CjxXJpZla-vV2nh089s/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: 130,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-5.png')} 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1mub8VVO8__poG4uE7Uwqk-5au-OEq6mi/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',      
                                        height: 130,                                      
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-6.png')} 
                                />
                            </TouchableOpacity>
                        </HStack>
                        <HStack space={3} justifyContent="center">
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%', height: 'auto'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1vbrqpSgZ5COPK-qHondhQSB_Vnl7_g4n/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: 130,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-7.png')} 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1mPE0Zzj70PwmIJcDzXuthdNM_aDGn4tE/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',      
                                        height: 130,                                      
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-8.png')} 
                                />
                            </TouchableOpacity>
                        </HStack>
                        <HStack 
                            space={3} 
                            justifyContent="center"
                            style={{ marginBottom: 20 }}
                        >
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%', height: 'auto'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1oCk_O90g43_EjygmX4CIi3GUVVmPX44f/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: 130,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-9.png')} 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '40%'}}
                                onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1fGFCOeQfJerqBeQkcHUOedDopSXZoVQt/view?usp=sharing')}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',      
                                        height: 130,                                      
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ICO_BAIXAR/modelo-10.png')} 
                                />
                            </TouchableOpacity>
                        </HStack>
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}