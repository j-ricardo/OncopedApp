import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { VStack, Spacer, Center, NativeBaseProvider, Button} from "native-base";
import React, {useState, useEffect} from 'react';
import { Icon } from '@rneui/themed';
import Navegacao from '../../../../features/navegacao/navegacao';
import { useBackButton, ViewReturnedInBackPress } from '../../../../features/backpress/backpress';

export default function ViewDiarreiaSinaisSintomas({ navigation }: any){
    const [ newHeightView1, setNewHeightView1 ] = useState<number>(0);
    const [ newHeightView2, setNewHeightView2 ] = useState<number>(0);
    const [ newHeightView3, setNewHeightView3 ] = useState<number>(0);

    Navegacao(18, 'ViewDiarreiaSinaisSintomas');
    useBackButton(handler);   

    function handler(){
        console.log('backpress');
        const nav: string = ViewReturnedInBackPress(18);
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
                                    Diarréia
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
                                    source={require('../../../../assets/ICO_SINAIS_E_SINTOMAS/06_DIARREIA.png')} 
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
                                            São evacuações onde as fezes 
                                        </Text>
                                        <Text 
                                            style={{ 
                                                color: '#5e718b',
                                                fontSize: 18, 
                                                fontWeight: '900', 
                                                textAlign: 'center'
                                            }}
                                        >
                                            são pastosas ou líquidas; 
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
                                            Após quimioterapia,
                                            radioterapia, infecção ou
                                            sensibilidade a certos alimentos;
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
                                                marginHorizontal: '12%',
                                                height: 45,
                                                color: '#5e718b',
                                                fontSize: 18, 
                                                fontWeight: '900', 
                                                textAlign: 'center',
                                                textAlignVertical: "center",
                                                borderRadius: 70,
                                                borderWidth: 3,
                                                borderColor: '#5e718b',
                                                flex: 1,
                                                flexDirection: 'row',                        
                                            }}
                                        >
                                            <Icon
                                                size={14}
                                                name='arrow-right'
                                                type='font-awesome'
                                                color='#5e718b'
                                            /> 
                                            <Text>
                                                {" "}Beber líquidos
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
                                            De preferência os líquidos claros
                                            (água, água de coco e suco);
                                        </Text>
                                        <Text 
                                            style={{ 
                                                marginHorizontal: '12%',
                                                height: 45,
                                                color: '#5e718b',
                                                fontSize: 18, 
                                                fontWeight: '900', 
                                                textAlign: 'center',
                                                textAlignVertical: "center",
                                                borderRadius: 70,
                                                borderWidth: 3,
                                                borderColor: '#5e718b',
                                                flex: 1,
                                                flexDirection: 'row',                        
                                            }}
                                        >
                                            <Icon
                                                size={14}
                                                name='arrow-right'
                                                type='font-awesome'
                                                color='#5e718b'
                                            /> 
                                            <Text>
                                                {" "}Alimentação
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
                                            Ingerir frutas, legumes, cereais,
                                            chás, ovo cozido e carnes magras;
                                            evitar frituras, alimentos
                                            gordurosos, leite e derivados com
                                            alto teor de gordura, oleaginosas,
                                            enlatados, condimentados e
                                            apimentados, verduras cruas,
                                            algumas frutas (mamão, ameixa e
                                            laranja), farelos integrais e
                                            alimentos açucarados; 
                                        </Text>
                                        <Text 
                                            style={{ 
                                                marginHorizontal: '12%',
                                                height: 45,
                                                color: '#5e718b',
                                                fontSize: 18, 
                                                fontWeight: '900', 
                                                textAlign: 'center',
                                                textAlignVertical: "center",
                                                borderRadius: 70,
                                                borderWidth: 3,
                                                borderColor: '#5e718b',
                                                flex: 1,
                                                flexDirection: 'row',                        
                                            }}
                                        >
                                            <Icon
                                                size={14}
                                                name='arrow-right'
                                                type='font-awesome'
                                                color='#5e718b'
                                            /> 
                                            <Text>
                                                {" "}Soro caseiro
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
                                            Pode ser ingerido à vontade
                                            enquanto a diarreia e a sede
                                            persistirem (1 copo de água + 1
                                            colher de sopa rasa de açúcar + 1
                                            colher de chá rasa de sal). 
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
                                    Se a diarreia for muito
                                    persistente e intensa (mais
                                    de 6 evacuações por dia)
                                    procurar atendimento.
                                </Text>
                            </View>
                        </Center>
                    </VStack>
                 </ScrollView>
            </View>
        </NativeBaseProvider>        
    );
}