import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import { Icon } from '@rneui/themed';
import Navegacao from '../../../features/navegacao/navegacao';

export default function ViewPassosNutricao({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    Navegacao(29, 'ViewPassosNutricao'); 

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
                                    Passos para uma 
                                    alimentação saudável
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
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/PASSOS/01_PASSOS.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: '#edeff3', 
                                    padding: 20,
                                    borderRadius: 50,
                                    width: '80%',
                                    flex: 1,
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
                                    Tornar como base da 
                                    alimentação os alimentos 
                                    naturais, como frutas, 
                                    verduras e legumes. Quanto 
                                    mais colorido o prato, mais 
                                    atrativo e nutritivo; 
                                </Text>
                            </View>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_2.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: '#edeff3', 
                                    padding: 20,
                                    borderRadius: 50,
                                    width: '80%',
                                    flex: 1,
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
                                    Utilizar óleos, gorduras, sal e 
                                    açúcar em pequenas 
                                    quantidades, evitar frituras e 
                                    empanados, utilizar 
                                    temperos naturais, preferir 
                                    suco da própria fruta e 
                                    comida feita em casa ao 
                                    invés de refeições prontas ou 
                                    industrializadas;
                                </Text>
                            </View>
                            
                        </Center>
                        <Center>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                    height: newHeightView1 + 30,
                                    marginBottom: 20
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
                                            Observar os rótulos: 
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
                                        //console.log('view1', height);
                                        setNewHeightView1(height);                                       
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
                                                {" "}Evitar produtos onde os 
                                                primeiros ingredientes da lista 
                                                são: gordura vegetal 
                                                hidrogenada, sacarose, açúcar, 
                                                glicose, xarope de milho ou de 
                                                glicose, farinha de trigo;
                                            </Text>
                                        </Text>
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
                                                {" "}Produtos diet ou light são 
                                                desbalanceados;
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
                                                {" "}Alimentos que parecem ser 
                                                saudáveis, mas não são: barra 
                                                de cereal, peito de peru, 
                                                iogurte, suco de caixinha, 
                                                guaraná natural, molho de 
                                                tomate, biscoitos integrais, 
                                                margarina, atum em lata, chás 
                                                gelados industrializados e 
                                                sobremesas lácteas.
                                            </Text>  
                                        </Text>
                                    </View>
                                </View> 
                            </View>
                        </Center>
                        <Center>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_4.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: '#edeff3', 
                                    padding: 20,
                                    borderRadius: 50,
                                    width: '80%',
                                    flex: 1,
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
                                    Comer com regularidade 
                                    e atenção;
                                </Text>
                            </View>
                            <TouchableOpacity                            
                                activeOpacity={0.5}
                                style={{ width: '80%', marginBottom: 20}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_3.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: '#edeff3', 
                                    padding: 20,
                                    borderRadius: 50,
                                    width: '80%',
                                    flex: 1,
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
                                    Reduzir o consumo de 
                                    alimentos processados e evitar 
                                    o consumo de alimentos 
                                    ultraprocessados (biscoitos 
                                    recheados, salgadinhos de 
                                    pacote e refrigerantes);
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={{ width: '80%'}}
                            >                            
                                <Image               
                                    style={{
                                        width: '100%',
                                        height: undefined,
                                        aspectRatio: 1,
                                        resizeMode: 'contain'
                                    }}                
                                    source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_5.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: '#edeff3', 
                                    padding: 20,
                                    borderRadius: 50,
                                    width: '80%',
                                    flex: 1,
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
                                    Cuidar da alimentação em 
                                    festas e comemorações, 
                                    evitando as bebidas 
                                    industrializadas e 
                                    açucaradas, não pulando 
                                    refeições para comer mais 
                                    nas festas;
                                </Text>
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
                                    source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_6.png')} 
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                    height: newHeightView2 + 30,
                                    marginBottom: 20
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
                                            height: 75,
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
                                            Controlar o peso 
                                            de forma consciente
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
                                        //console.log('view2', height);
                                        setNewHeightView2(height);                                       
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#edeff3', 
                                            paddingHorizontal: 20,
                                            paddingTop: 55,
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
                                                {" "}Conhecer seu peso e marcar 
                                                consulta com um nutricionista;
                                            </Text>
                                        </Text>
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
                                                {" "}Não tomar suplementos 
                                                alimentares por conta própria;  
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
                                                {" "}Ocupar o tempo com 
                                                atividades produtivas e 
                                                atividade física para evitar 
                                                descontar a ansiedade na 
                                                alimentação. 
                                            </Text>  
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