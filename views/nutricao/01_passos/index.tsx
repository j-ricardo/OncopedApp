import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import { Icon } from '@rneui/themed';
import Navegacao from '../../../features/navegacao/navegacao';
import { useBackButton, ViewReturnedInBackPress } from '../../../features/backpress/backpress';

export default function ViewPassosNutricao({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    Navegacao(29, 'ViewPassosNutricao'); 
    useBackButton(handler);   

    function handler(){
        console.log('backpress');
        const nav: string = ViewReturnedInBackPress(29);
        console.log('retornar para view', nav);
        navigation.navigate(nav);
        return true; 
    }

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
                                    Passos para uma{"\n"}
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
                                    Tornar como base da{"\n"}
                                    alimentação os alimentos{"\n"}
                                    naturais, como frutas,{"\n"}
                                    verduras e legumes. Quanto{"\n"}
                                    mais colorido o prato, mais{"\n"}
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
                                    Utilizar óleos, gorduras, sal e{"\n"}
                                    açúcar em pequenas{"\n"}
                                    quantidades, evitar frituras e{"\n"}
                                    empanados, utilizar{"\n"}
                                    temperos naturais, preferir{"\n"}
                                    suco da própria fruta e{"\n"}
                                    comida feita em casa ao{"\n"}
                                    invés de refeições prontas ou{"\n"}
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
                                        console.log('view1', height);
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
                                                {" "}Evitar produtos onde os{"\n"}
                                                primeiros ingredientes da lista{"\n"}
                                                são: gordura vegetal{"\n"}
                                                hidrogenada, sacarose, açúcar,{"\n"}
                                                glicose, xarope de milho ou de{"\n"}
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
                                                {" "}Produtos diet ou light são{"\n"}
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
                                                {" "}Alimentos que parecem ser{"\n"}
                                                saudáveis, mas não são: barra{"\n"}
                                                de cereal, peito de peru,{"\n"}
                                                iogurte, suco de caixinha,{"\n"}
                                                guaraná natural, molho de{"\n"}
                                                tomate, biscoitos integrais,{"\n"}
                                                margarina, atum em lata, chás{"\n"}
                                                gelados industrializados e{"\n"}
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
                                    Comer com regularidade{"\n"}
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
                                    Reduzir o consumo de{"\n"}
                                    alimentos processados e evitar{"\n"}
                                    o consumo de alimentos{"\n"}
                                    ultraprocessados (biscoitos{"\n"}
                                    recheados, salgadinhos de{"\n"}
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
                                    Cuidar da alimentação em{"\n"}
                                    festas e comemorações,{"\n"}
                                    evitando as bebidas{"\n"}
                                    industrializadas e{"\n"}
                                    açucaradas, não pulando{"\n"}
                                    refeições para comer mais{"\n"}
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
                                            Controlar o peso{"\n"}
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
                                        console.log('view2', height);
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
                                                {" "}Conhecer seu peso e marcar{"\n"}
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
                                                {" "}Não tomar suplementos{"\n"}
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
                                                {" "}Ocupar o tempo com{"\n"}
                                                atividades produtivas e{"\n"}
                                                atividade física para evitar{"\n"}
                                                descontar a ansiedade na{"\n"}
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