import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import { Icon } from '@rneui/themed';
import Navegacao from '../../../features/navegacao/navegacao';

export default function ViewSondasNutricao({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    Navegacao(31, 'ViewSondasNutricao'); 
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
                                    Sondas 
                                    alimentares
                                </Text> 
                            </Button>
                        </Center>
                        <Center> 
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '60%', marginVertical: 10}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                 
                                    source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_1.png')} 
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
                                            É um tubo usado para 
                                            alimentar e introduzir os 
                                            medicamentos necessários 
                                            ao tratamento, pelo nariz, 
                                            descendo até o estômago ou 
                                            intestino. É necessária, por 
                                            um determinado período, 
                                            quando há dificuldades para 
                                            engolir ou digerir o alimento.
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: newHeightView1 + 50,
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
                                            Cuidados essenciais
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
                                                textAlign: 'center',
                                                marginBottom: 20
                                            }}
                                        >
                                            <Icon
                                                size={14}
                                                name='arrow-right'
                                                type='font-awesome'
                                                color='#5e718b'
                                            /> 
                                            <Text>
                                                {" "}O paciente e seus 
                                                familiares devem receber 
                                                instruções da equipe de 
                                                Enfermagem sobre como 
                                                usar a sonda e indicar o 
                                                material para introdução dos 
                                                alimentos, que devem ser 
                                                lavados com água e sabão 
                                                antes e após seu uso;
                                            </Text>
                                        </Text>
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
                                                {" "}Em caso de entupimento 
                                                por alimentos ou remédios e 
                                                a saída acidental pelo nariz, 
                                                é necessário buscar a equipe 
                                                especializada no hospital de 
                                                tratamento.
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
                                    width: '80%',
                                    marginHorizontal: '10%',
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
                                    Deve-se comunicar
                                    imediatamente a equipe de
                                    saúde a ocorrência de febre
                                </Text>
                            </View>
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_2.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_3.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_4.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_5.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_6.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_7.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_8.png')} 
                            />
                            <Image               
                                style={{
                                    width: '100%',
                                    height: undefined,
                                    aspectRatio: 1,
                                    resizeMode: 'contain',
                                    marginBottom: 20
                                }}                
                                source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_9.png')} 
                            />
                        </Center>
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}