import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import useBackButton from '../../../utils/navigation';

export default function ViewSinaisSintomas({ navigation }: any){
    const backAction = () => {
        navigation.pop();
        navigation.navigate('ViewInicio');
        return true;
    };

    //useBackButton(backAction);

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
                                <Text style={{ color: '#fea9a7', fontSize: 18, fontWeight: '900' }}>Selecione a opção</Text>
                                <Text style={{ color: '#fea9a7', fontSize: 18, fontWeight: '900' }}>que você deseja saber</Text>
                                <Text style={{ color: '#fea9a7', fontSize: 18, fontWeight: '900' }}>mais informações</Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Febre
                                    </Text> 
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Dor
                                    </Text> 
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Fadiga / cansaço
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Nausea e Vômito
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Distúrbios do sono
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Diarréia
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Constipação
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Distúrbios Psicoemocionais
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Convulsões
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Distúrbios Sensoriais
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Mucose Oral
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Anorexia
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Neuropatias
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Sangramentos
                                    </Text>
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
                                    <Text 
                                        style={{ 
                                            color: "white", 
                                            fontSize: 19, 
                                            fontWeight: '900', 
                                            textAlign: 'center' 
                                        }}
                                    >
                                        Falta de Ar
                                    </Text>
                                </Button>
                            </Center>
                            <Center style={{ width: '100%' }}>
                                <Button
                                    style={{
                                        width: '70%',
                                        height: 50,
                                        borderRadius: 70,
                                        backgroundColor: '#96b9e0',
                                        marginBottom: 20
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
                                        Alopécia
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