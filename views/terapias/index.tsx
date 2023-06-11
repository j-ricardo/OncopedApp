import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button } from "native-base";
import React, {useState, useEffect} from 'react';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function ViewTerapias({ navigation }: any){
    return (
        <NativeBaseProvider>
            <View style={{ flex:1, backgroundColor: 'transparent' }}>
                <View>
                    <Image style={{ height: height, width: width, position: 'absolute', top:0, left:0 }} source={require('../../assets/fundo_rosa.png')} />
                </View>
                <ScrollView>
                    <VStack 
                        space={4} 
                        alignItems="center"
                        style={{marginTop: 80}}
                    >
                        <Center >
                            <Text style={{color: '#fff', fontSize: 18}}>Selecione a opção que</Text>
                            <Text style={{color: '#fff', fontSize: 18}}>você deseja conhecer</Text>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                onPress={() => {
                                    console.log("click action");
                                    navigation.navigate('ViewQuimioterapia');
                                }}
                            >                            
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_quimeoterapia.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                onPress={() => {
                                    console.log("click action");
                                    navigation.navigate('ViewRadioterapia');
                                }}
                            >                            
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_radioterapia.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{marginBottom: 30}}
                                onPress={() => {
                                    console.log("click action");
                                    navigation.navigate('ViewSinaisSintomas');
                                }}
                            >                            
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_sinais_sintomas.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                    </VStack>
                </ScrollView> 
            </View>
        </NativeBaseProvider>        
    );
}