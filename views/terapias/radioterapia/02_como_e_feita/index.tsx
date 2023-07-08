import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import Navegacao from '../../../../features/navegacao/navegacao';

export default function ViewComoEhFeitaRadioterapia({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    Navegacao(10, 'ViewComoEhFeitaRadioterapia');
    
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
                    Radioterapia
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
                        style={{marginTop: 20, width: '100%'}}
                    >
                        <Center> 
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
                                    source={require('../../../../assets/ICO_RADIO/COMO_E_FEITA_01.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%'
                                }}
                            >
                                <View style={{
                                    zIndex: 4,
                                    width: '100%',
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Button
                                        style={{
                                            width: '60%',
                                            height: 70,
                                            borderRadius: 70,
                                            backgroundColor: '#96b9e0'
                                        }}
                                    >
                                        <Text style={{ color: "white", fontSize: 19, fontWeight: '900' }}>Radioterapia externa</Text> 
                                        <Text style={{ color: "white", fontSize: 19, fontWeight: '900', textAlign: 'center' }}>(teleterapia)</Text> 
                                    </Button>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#edeff3',
                                        zIndex: 3,
                                        marginTop: 35,
                                        position: 'absolute',
                                        borderRadius: 30,
                                        width: '90%',
                                        marginHorizontal: 20                            
                                    }}
                                    onLayout={({ nativeEvent }) => {
                                        const { x, y, width, height } = nativeEvent.layout;
                                        setNewHeightView1(height);
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 60,
                                            paddingBottom: 20,
                                            borderRadius: 100,
                                            flex: 1
                                        }}
                                    >
                                        <Text 
                                            style={{ 
                                                color: '#5e718b',
                                                fontSize: 18, 
                                                fontWeight: '900', 
                                                textAlign: 'center'
                                            }}
                                        >
                                            A radiação é emitida por
                                            um aparelho direcionado
                                            ao local a ser tratado,
                                            com o paciente deitado.
                                            As aplicações são,
                                            geralmente, diárias e as
                                            seções são rápidas.
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center style={{ marginBottom: 10 }}> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%', marginTop: newHeightView1 + 20}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../../../assets/ICO_RADIO/COMO_E_FEITA_02.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',
                                    height: newHeightView1 + 60
                                }}
                            >
                                <View style={{
                                    zIndex: 4,
                                    width: '100%',
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Button
                                        style={{
                                            width: '60%',
                                            height: 50,
                                            borderRadius: 70,
                                            backgroundColor: '#96b9e0'
                                        }}
                                    >
                                        <Text style={{ color: "white", fontSize: 19, fontWeight: '900' }}>Braquiterapia</Text>
                                    </Button>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#edeff3',
                                        zIndex: 3,
                                        marginTop: 25,
                                        position: 'absolute',
                                        borderRadius: 30,
                                        width: '90%',
                                        marginHorizontal: 20                            
                                    }}
                                    onLayout={({ nativeEvent }) => {
                                        const { x, y, width, height } = nativeEvent.layout;
                                        console.log(nativeEvent);
                                        setNewHeightView2(height);
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingVertical: 40,
                                            borderRadius: 100,
                                            flex: 1
                                        }}
                                    >
                                        <Text 
                                            style={{ 
                                                color: '#5e718b',
                                                fontSize: 18, 
                                                fontWeight: '900', 
                                                textAlign: 'center'
                                            }}
                                        >
                                            Aplicadores são colocados
                                            próximos ao local a ser
                                            tratado, a radiação é emitida
                                            do aparelho para os
                                            aplicadores. Esse tratamento
                                            é feito no ambulatório
                                            (podendo necessitar de
                                            anestesia), de uma a duas
                                            vezes por semana. 
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}