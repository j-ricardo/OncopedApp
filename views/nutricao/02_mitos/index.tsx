import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import { Icon } from '@rneui/themed';
import Navegacao from '../../../features/navegacao/navegacao';

export default function ViewMitosNutricao({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    const [ newHeightView3, setNewHeightView3 ] = useState<number>(0);
    const [ newHeightView4, setNewHeightView4 ] = useState<number>(0); 
    Navegacao(30, 'ViewMitosNutricao'); 
    
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
                    {" "}
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
                    Nutrição
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
                                    height: 90,
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
                                    Os mitos da 
                                    alimentação durante o 
                                    tratamento do câncer
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
                                        resizeMode: 'contain'
                                    }}                 
                                    source={require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_1.png')} 
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
                                            Mito 1
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
                                        marginHorizontal: '10%',          
                                    }}
                                    onLayout={({ nativeEvent }) => {
                                        const { x, y, width, height } = nativeEvent.layout;
                                        //console.log('view1', height);
                                        setNewHeightView1(height);                                       
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 35,
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
                                            “Carboidratos (pães, farinha 
                                            de trigo, açúcar, arroz) 
                                            alimentam o tumor”{"\n\n"}
                                            A principal função dos 
                                            carboidratos é fornecer 
                                            energia para as células e 
                                            quando você deixa de 
                                            consumir, o organismo pode 
                                            usar proteínas dos músculos, 
                                            causando perda de peso que 
                                            pode gerar prejuízo para o 
                                            corpo e o tratamento. 
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={{ width: '60%', marginTop: newHeightView1 + 50, marginBottom: 20}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_2.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                    height: newHeightView2 + 50,
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
                                                textAlign: 'center'
                                            }}
                                        >
                                            Mito 2
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
                                        marginHorizontal: '10%',
                                        marginBottom: 20    
                                    }}
                                    onLayout={({ nativeEvent }) => {
                                        const { x, y, width, height } = nativeEvent.layout;
                                        //console.log('view2', height);
                                        setNewHeightView2(height);                                       
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 35,
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
                                            “Carboidratos (pães, farinha 
                                            de trigo, açúcar, arroz) 
                                            alimentam o tumor”{"\n\n"}
                                            A principal função dos 
                                            carboidratos é fornecer 
                                            energia para as células e 
                                            quando você deixa de 
                                            consumir, o organismo pode 
                                            usar proteínas dos músculos, 
                                            causando perda de peso que 
                                            pode gerar prejuízo para o 
                                            corpo e o tratamento. 
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={{ width: '60%', marginBottom: 20}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_3.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                    height: newHeightView3 + 50,
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
                                                textAlign: 'center'
                                            }}
                                        >
                                            Mito 3
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
                                        marginHorizontal: '10%'
                                    }}
                                    onLayout={({ nativeEvent }) => {
                                        const { x, y, width, height } = nativeEvent.layout;
                                        //console.log('view3', height);
                                        setNewHeightView3(height);                                       
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 35,
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
                                            “Proteínas de origem animal 
                                            (carne vermelha, ovos, 
                                            queijos) devem ser cortadas 
                                            da alimentação, pois 
                                            alimentam o tumor”{"\n\n"}
                                            Ingerir proteínas em 
                                            quantidades adequadas, 
                                            além de garantir a 
                                            manutenção de diversas 
                                            atividades do corpo, 
                                            mantém os músculos 
                                            saudáveis. 
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={{ width: '70%' }}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_4.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',
                                    height: newHeightView4 + 50,
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
                                                textAlign: 'center'
                                            }}
                                        >
                                            Mito 4
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
                                        marginHorizontal: '10%',
                                        marginBottom: 20    
                                    }}
                                    onLayout={({ nativeEvent }) => {
                                        const { x, y, width, height } = nativeEvent.layout;
                                        //console.log('view4', height);
                                        setNewHeightView4(height);                                       
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 35,
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
                                            “Cogumelo do sol, noni, 
                                            graviola, chá de graviola, chá 
                                            verde, dentre outros muitos 
                                            alimentos, curam o câncer”{"\n\n"}
                                            Não existem alimentos que, 
                                            milagrosamente, curam o 
                                            câncer.
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