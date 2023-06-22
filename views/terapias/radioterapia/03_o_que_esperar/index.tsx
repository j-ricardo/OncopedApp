import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import useBackButton from '../../../../utils/navigation';

export default function ViewOQueEsperarRadioterapia({ navigation }: any){
    const backAction = () => {
        navigation.pop();
        navigation.navigate('ViewInicio');        
        return true;
    };

    //useBackButton(backAction);

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
                        style={{marginTop: 10, width: '100%'}}
                    >
                        <Center style={{ marginVertical: 10 }}> 
                            <Button
                                style={{
                                    width: '80%',
                                    height: 50,
                                    borderRadius: 70,
                                    backgroundColor: '#fea9a7',
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
                                    O que esperar sobre a dor?
                                </Text> 
                            </Button>
                            <View
                                style={{
                                    backgroundColor: '#edeff3', 
                                    padding: 20,
                                    borderRadius: 30,
                                    flex: 1,
                                    width: '80%'
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
                                    Não causa dor nem
                                    desconforto.
                                </Text>
                            </View>
                        </Center>
                        <Center> 
                            <Button
                                style={{
                                    width: '80%',
                                    height: 50,
                                    borderRadius: 70,
                                    backgroundColor: '#fea9a7',
                                    marginVertical: 20
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
                                    E os efeitos colaterais?
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
                                    source={require('../../../../assets/ICO_RADIO/EFEITOS_COLATERAIS_01.png')} 
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
                                    source={require('../../../../assets/ICO_RADIO/EFEITOS_COLATERAIS_02.png')} 
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
                                    source={require('../../../../assets/ICO_RADIO/EFEITOS_COLATERAIS_03.png')} 
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
                                    source={require('../../../../assets/ICO_RADIO/EFEITOS_COLATERAIS_04.png')} 
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
                                    source={require('../../../../assets/ICO_RADIO/EFEITOS_COLATERAIS_05.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}