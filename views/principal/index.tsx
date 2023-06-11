import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button } from "native-base";
import React, {useState, useEffect} from 'react';
import ViewTerapias from '../terapias';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function ViewInicio({ navigation }: any) {
    return (
        <NativeBaseProvider>
            <View style={{ flex:1, backgroundColor: 'transparent' }}>
                <View>
                    <Image style={{ height: height, width: width, position: 'absolute', top:0, left:0 }} source={require('../../assets/fundo_azul.png')} />
                </View>
                <ScrollView style={{ flex:1 }}>
                    <VStack 
                        space={4} 
                        alignItems="center"
                        style={{marginTop: 80}}
                    >
                        <Center>
                            <Text style={{color: '#fff', fontSize: 18}}>Clique na opção que</Text>
                            <Text style={{color: '#fff', fontSize: 18}}>deseja para interagir</Text>
                        </Center>
                        <Center>                        
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                onPress={() => {
                                    console.log("click action");
                                    navigation.navigate('ViewTerapias');
                                }}
                            >                            
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_terapias.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                            >  
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_nutricao.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                            >  
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_video.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{marginBottom: 30}}
                            >  
                                <Image               
                                    style={{
                                        height: 180,
                                        marginHorizontal: '20%',
                                        resizeMode: 'contain' 
                                    }}                
                                    source={require('../../assets/ico_btn_referencias.png')} 
                                />
                            </TouchableOpacity>
                        </Center>
                    </VStack>
                </ScrollView>  
            </View>
            
        </NativeBaseProvider>        
    );
}