import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';


export default function ViewSinaisSintomas(){
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
                        source={require('../../../assets/ico_btn_sinais_sintomas.png')} 
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
                            style={{marginTop: 10, width: '100%'}}
                        >
                            <Center style={{ width: '100%' }}>
                                <Text style={{color: '#fea9a7', fontSize: 18}}>Selecione a opção</Text>
                                <Text style={{color: '#fea9a7', fontSize: 18}}>que você deseja saber</Text>
                                <Text style={{color: '#fea9a7', fontSize: 18}}>mais informações</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Febre</Text> 
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Dor</Text> 
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Fadiga / cansaço</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Nausea e Vômito</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Distúrbios do sono</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Diarréia</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Constipação</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Distúrbios Psicoemocionais</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Convulsões</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Distúrbios Sensoriais</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Mucose Oral</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Anorexia</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Neuropatias</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Sangramentos</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Falta de Ar</Text>
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
                                    <Text style={{ color: "white", fontSize: 18,}}>Alopécia</Text>
                                </Button>
                            </Center>
                        </VStack>
                    </ScrollView> 
                </View>                 
            </View>            
        </NativeBaseProvider>        
    );
}