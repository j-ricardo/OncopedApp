import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import useBackButton from '../../../../utils/navigation';
import { Icon } from '@rneui/themed';

export default function ViewFaltaArSinaisSintomas({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    const [ newHeightView3, setNewHeightView3 ] = useState<number>(0);
    const [ newHeightView4, setNewHeightView4 ] = useState<number>(0); 

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
                    Sinais e sintomas
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
                 <ScrollView
                    style={{
                        height: '80%'
                    }}
                 >
                    <VStack 
                        style={{marginTop: 20, width: '100%', height: '100%'}}
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
                                    Falta de Ar
                                </Text> 
                            </Button>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '60%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        marginVertical: 10
                                    }}                
                                    source={require('../../../../assets/ICO_SINAIS_E_SINTOMAS/15_FALTA_DE_AR.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                    height: 0
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
                                        <Text 
                                            style={{  
                                                fontSize: 19, 
                                                fontWeight: '900',
                                                color: '#5e718b',
                                            }}
                                        >
                                            O que é:
                                        </Text>  
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
                                        //if(newHeightView1 === 0){
                                            const { x, y, width, height } = nativeEvent.layout;
                                            console.log('view1', height);
                                            setNewHeightView1(height);
                                        //}                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 30,
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
                                            Dificuldade de respirar;
                                        </Text>
                                        
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <View
                                style={{
                                    width: '100%',                                    
                                    height: 0,
                                    marginTop: newHeightView1 + 70
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
                                        <Text 
                                            style={{  
                                                fontSize: 19, 
                                                fontWeight: '900',
                                                color: '#5e718b',
                                            }}
                                        >
                                            Quando ocorre:
                                        </Text>  
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
                                        //if(newHeightView2 === 0){
                                            const { x, y, width, height } = nativeEvent.layout;
                                            setNewHeightView2(height);
                                        //}                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 40,
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
                                            Em situações de estresse ou
                                            devido as terapias utilizadas; 
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <View
                                style={{
                                    width: '100%',                                    
                                    height: newHeightView3 + 50,
                                    marginTop: newHeightView2 + 60
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
                                        <Text 
                                            style={{  
                                                fontSize: 19, 
                                                fontWeight: '900',
                                                color: '#5e718b',
                                            }}
                                        >
                                            Como tratar e aliviar:
                                        </Text>  
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
                                        //if(newHeightView3 === 0){
                                            const { x, y, width, height } = nativeEvent.layout;
                                            console.log('view3', height);
                                            setNewHeightView3(height);
                                        //}                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 40,
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
                                            <Icon
                                                size={14}
                                                name='arrow-right'
                                                type='font-awesome'
                                                color='#5e718b'
                                            /> 
                                            <Text>
                                                {" "}Manter a cabeceira da
                                                cama elevada e o ambiente
                                                bem ventilado.
                                            </Text>  
                                        </Text>                                        
                                    </View>
                                </View> 
                            </View>
                        </Center>  
                        <Center>
                            <View
                                style={{
                                    backgroundColor: '#96b9e0', 
                                    padding: 20,
                                    borderRadius: 30,
                                    flex: 1,
                                    width: '90%',
                                    marginBottom: 20
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
                                    Se o desconforto respiratório
                                    persistir, procurar a equipe
                                    de saúde com urgência. 
                                </Text>
                            </View>
                        </Center>                      
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}