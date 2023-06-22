import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import useBackButton from '../../../../utils/navigation';

export default function ViewOQueEhRadioterapia({ navigation }: any){
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
                    borderBottomColor: '#d2d9e2',
                    borderBottomWidth: 10
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
                    height: '100%'
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                >
                    <Image               
                        style={{
                            height: 240,     
                            margin: 'auto',
                            resizeMode: 'contain' 
                        }}                
                        source={require('../../../../assets/ICO_RADIO/RADIOTERAPIA_O_QUE_E.png')} 
                    />
                </View>       
                <View style={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                }}>
                    <View style={{
                        zIndex: 4,
                        width: '100%',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button
                            style={{
                                width: '50%',
                                height: 50,
                                borderRadius: 70,
                                backgroundColor: '#fea9a7'
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 19, fontWeight: '900' }}>O que é?</Text> 
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
                    >
                        <View
                            style={{
                                backgroundColor: '#edeff3', 
                                paddingHorizontal: 60,
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
                                É o tratamento em que se
                                utiliza um tipo de energia
                                para destruir ou impedir
                                que as células do tumor
                                aumentem: os raios
                                ionizantes (raio-x, por
                                exemplo).
                            </Text>
                        </View>
                    </View> 
                </View>   
            </View>
        </NativeBaseProvider>        
    );
}