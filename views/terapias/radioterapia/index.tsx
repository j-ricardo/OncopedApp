import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';


export default function ViewRadioterapia(){
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
                        source={require('../../../assets/ico_btn_radioterapia.png')} 
                    />
                </Center>
                <View
                    style={{
                        height: '100%',
                        backgroundColor: 'transparent'
                    }}
                >
                    <ScrollView>
                        <VStack 
                            space={4} 
                            alignItems="center"
                            style={{marginTop: 80, width: '100%'}}
                        >
                            
                            <Center style={{ width: '100%' }}>
                                <Button
                                    style={{
                                        width: '70%',
                                        height: 50,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0'
                                    }}
                                >
                                    <Text style={{ color: "white", fontSize: 18,}}>O que é?</Text> 
                                </Button>
                            </Center>
                            <Center style={{ width: '100%' }}>
                                <Button                                    
                                    style={{
                                        width: '70%',
                                        height: 50,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0'                                        
                                    }}
                                >
                                    <Text style={{ color: "white", fontSize: 18,}}>Como é feita?</Text> 
                                </Button>
                            </Center>
                            <Center style={{ width: '100%' }}>
                                <Button
                                    style={{
                                        width: '70%',
                                        height: 50,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0',
                                        marginBottom: 30
                                    }}
                                >
                                    <Text style={{ color: "white", fontSize: 18,}}>O que esperar?</Text>
                                </Button>
                            </Center>
                        </VStack>
                    </ScrollView> 
                </View>                 
            </View>            
        </NativeBaseProvider>        
    );
}