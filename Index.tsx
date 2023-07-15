import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import { NativeBaseProvider, Center, Button, extendTheme } from "native-base";
import React, { useState, useEffect } from 'react';
import { NavigationContainer, createNavigationContainerRef, CommonActions, useFocusEffect } from '@react-navigation/native';
import { 
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import TelaInicial from './views/inicio/index';
import ViewInicio from './views/principal/index';
import ViewTerapias from './views/terapias';
import ViewQuimioterapia from './views/terapias/quimioterapia';
import ViewOQueEhQuimioterapia from './views/terapias/quimioterapia/01_o_que_e';
import ViewComoEhFeitaQuimioterapia from './views/terapias/quimioterapia/02_como_e_feita';
import ViewOQueEsperarQuimioterapia from './views/terapias/quimioterapia/03_o_que_esperar';
import ViewRadioterapia from './views/terapias/radioterapia';
import ViewOQueEhRadioterapia from './views/terapias/radioterapia/01_o_que_e';
import ViewComoEhFeitaRadioterapia from './views/terapias/radioterapia/02_como_e_feita';
import ViewOQueEsperarRadioterapia from './views/terapias/radioterapia/03_o_que_esperar';
import ViewSinaisSintomas from './views/terapias/sinais_sintomas';
import ViewFebreSinaisSintomas from './views/terapias/sinais_sintomas/01_febre';
import ViewDorSintomas from './views/terapias/sinais_sintomas/02_dor';
import ViewFadigaCansacoSinaisSintomas from './views/terapias/sinais_sintomas/03_fadiga_cansaco';
import ViewNauseaVomitoSinaisSintomas from './views/terapias/sinais_sintomas/04_nausea_vomito';
import ViewDisturbiosSonoSinaisSintomas from './views/terapias/sinais_sintomas/05_disturbio_sono';
import ViewDiarreiaSinaisSintomas from './views/terapias/sinais_sintomas/06_diarreia';
import ViewConstipacaoSinaisSintomas from './views/terapias/sinais_sintomas/07_constipacao';
import ViewDisturbiosPsicoemocionaisSinaisSintomas from './views/terapias/sinais_sintomas/08_disturbio_psicoemocionais';
import ViewConvulsoesSinaisSintomas from './views/terapias/sinais_sintomas/09_convulsoes';
import ViewDisturbiosSensoriaisSinaisSintomas from './views/terapias/sinais_sintomas/10_disturbios_sensoriais';
import ViewMucoseOralSinaisSintomas from './views/terapias/sinais_sintomas/11_mucose_oral';
import ViewAnorexiaSinaisSintomas from './views/terapias/sinais_sintomas/12_anorexia';
import ViewNeuropatiasSinaisSintomas from './views/terapias/sinais_sintomas/13_neuropatias';
import ViewSangramentosSinaisSintomas from './views/terapias/sinais_sintomas/14_sangramentos';
import ViewFaltaArSinaisSintomas from './views/terapias/sinais_sintomas/15_falta_ar';
import ViewAlopeciaSinaisSintomas from './views/terapias/sinais_sintomas/16_alopecia';
import ViewNutricao from './views/nutricao';
import ViewPassosNutricao from './views/nutricao/01_passos';
import ViewMitosNutricao from './views/nutricao/02_mitos';
import ViewSondasNutricao from './views/nutricao/03_sondas';
import ViewBaixar from './views/baixar';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ViewReturnedInBackPress } from './features/backpress/returnedback';
import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import { PaginaAtual, alterarPagina, paginaSelector } from "./features/pagina_atual/paginaAtualSlice";
import { useBackHandler } from '@react-native-community/hooks'
export const navigationRef = createNavigationContainerRef();

const Stack = createDrawerNavigator();
const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function CustomDrawerContent(props: any) {
  const navigation = useNavigation<any>();
  const [ expandirBotaoTerapias, setExpandirBotaoTerapias ] = useState<boolean>(false);
  const [ expandirBotaoNutricao, setExpandirBotaoNutricao ] = useState<boolean>(false);

  const btnExpandirBotaoTerapias = () => {
    if(expandirBotaoTerapias){
      setExpandirBotaoTerapias(false);
    } else { setExpandirBotaoTerapias(true); }
  }

  const btnExpandirBotaoNutricao = () => {
    if(expandirBotaoNutricao){
      setExpandirBotaoNutricao(false);
    } else { setExpandirBotaoNutricao(true); }
  }

  return (
    <DrawerContentScrollView {...props}>
      <Center
        bg={{
          linearGradient: {
            colors: ['#fff', '#fef1f0'],
          }}}
      >
        <Image 
          style={{ 
            width: '80%', 
            height: 180, 
            resizeMode: 'contain'
          }} 
          source={require('./assets/logo_01.png')} 
        />
      </Center>
      <View style={styles.viewStyle}>
         <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewInicio');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_inicio.png')}/> 
            <Text style={styles.textStyle}>
              Início
            </Text>
          </TouchableOpacity>        
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity                            
          activeOpacity={0.5}
          style={styles.touchStyle}
          onPress={() => {
            navigation.navigate('ViewTerapias');
          }}
        >
          <Image style={styles.imgStyled} source={require('./assets/ico_nav_terapias.png')}/> 
          <Text style={styles.textStyle}>
            Terapias
          </Text>
        </TouchableOpacity>  
        <Text 
          style={styles.icoStyle}
          onPress={btnExpandirBotaoTerapias}
        >
          <Icon
            size={25}
            name={(expandirBotaoTerapias? 'arrow-up' : 'arrow-down')}
            type='simple-line-icon'
            color='#fea9a7'
          />    
        </Text>
      </View>
      <View style={{
        display: (expandirBotaoTerapias? 'flex' : 'none')
      }}>
        <View style={styles.viewSubStyle}>
          <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewQuimioterapia');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_quimeo.png')}/> 
            <Text style={styles.textStyle}>
              Quimioterapia
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSubStyle}>
          <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewRadioterapia');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_radio.png')}/> 
            <Text style={styles.textStyle}>
              Radioterapia
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSubStyle}>
          <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewSinaisSintomas');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_sinais_sintomas.png')}/> 
            <Text style={styles.textStyle}>
              Sinais e sintomas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewStyle}>
         <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewNutricao');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_nutricao.png')}/> 
            <Text style={styles.textStyle}>
              Nutrição
            </Text>
          </TouchableOpacity>  
          <Text 
            style={styles.icoStyle}
            onPress={btnExpandirBotaoNutricao}
          >
            <Icon
              size={25}
              name={(expandirBotaoNutricao? 'arrow-up' : 'arrow-down')}
              type='simple-line-icon'
              color='#fea9a7'
            />    
          </Text>      
      </View>
      <View style={{
        display: (expandirBotaoNutricao? 'flex' : 'none')
      }}>
        <View style={styles.viewSubStyle}>
          <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewPassosNutricao');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_passos.png')}/> 
            <Text style={styles.textStyle}>
              Passos para uma 
              alimentação saudável
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSubStyle}>
          <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewMitosNutricao');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_mitos_alimentacao.png')}/> 
            <Text style={styles.textStyle}>
              Os mitos da alimentação durante o tratamento do câncer
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSubStyle}>
          <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewSondasNutricao');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_sondas_alimentares.png')}/> 
            <Text style={styles.textStyle}>
              Sondas alimentares
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewStyle}>
         <TouchableOpacity                            
            activeOpacity={0.5}
            style={styles.touchStyle}
            onPress={() => {
              navigation.navigate('ViewBaixar');
            }}
          >
            <Image style={styles.imgStyled} source={require('./assets/ico_nav_para_baixar.png')}/> 
            <Text style={styles.textStyle}>
              Para baixar
            </Text>
          </TouchableOpacity>        
      </View>
      <Button
        size={"xs"}
        style={{
          width: '90%',
          borderRadius: 70,
          marginTop: 10,
          marginLeft: '5%',
          marginRight: '5%',
          backgroundColor: '#fea9a7'
        }}
        onPress={() => BackHandler.exitApp()}
      >
          <Text
            style={{ 
              color: "white", 
              fontSize: 19, 
              fontWeight: '900', 
              textAlign: 'center',
              textTransform: 'uppercase'
            }}
          >
            Sair
          </Text>
      </Button>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '90%',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#96b9e0',
    display: 'flex', 
    flexDirection: 'row'
  },
  viewSubStyle: {
    width: '100%',
    backgroundColor: '#96b9e0',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    display: 'flex', 
    flexDirection: 'row'
  },
  touchStyle: {
    display: 'flex', 
    flexDirection: 'row'
  },
  imgStyled: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  textStyle: {
    marginLeft: 20,
    height: '100%',
    width: 195,
    fontSize: 19, 
    fontWeight: '900',
    color: '#5e718b',
    textAlignVertical: 'center'
  },
  icoStyle: {
    marginLeft: 'auto',
    textAlignVertical: 'center',
    paddingRight: 15
  }

});

export default function Main() {
  const dispatch = useAppDispatch();    
  const viewSel = useAppSelector(paginaSelector);
  const [ ready, setReady ] = useState<boolean>(false);

  useBackHandler(() => {
    if(ready){
      const nav = ViewReturnedInBackPress(viewSel!.id);
      if(nav.id > -1){
        console.log('back press', nav);
        dispatch(alterarPagina(nav));
        navigationRef.navigate(nav.nome as never);
        return true
      } else {        
        BackHandler.exitApp();    
        return true;
      }  
    } else return false;
  })

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer 
        ref={navigationRef}
        onReady={() => {
          setReady(true)
        }}
      >
        <Stack.Navigator 
          id="LeftDrawer"
          useLegacyImplementation
          initialRouteName="initialRoute"
          backBehavior='none'
          detachInactiveScreens={true}
          screenOptions={{
            headerTintColor: '#fff',            
            drawerPosition: 'left',
            drawerStyle: {height: '100%'},
            headerTransparent: true,
          }}          
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >          
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{ 
              headerShown: false, 
              drawerItemStyle: {
                display: 'none'
              }
            }} 
          />
          <Stack.Screen
            name="ViewInicio"
            component={ViewInicio}
            options={{
              title: 'Início',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewTerapias"
            component={ViewTerapias}
            options={{
              title: 'Terapias', 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewQuimioterapia"
            component={ViewQuimioterapia}
            options={{
              title: 'Quimioterapia', 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewOQueEhQuimioterapia"
            component={ViewOQueEhQuimioterapia}
            options={{
              title: 'O que é quimioterapia?',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewComoEhFeitaQuimioterapia"
            component={ViewComoEhFeitaQuimioterapia}
            options={{
              title: 'Como é feita?',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewOQueEsperarQuimioterapia"
            component={ViewOQueEsperarQuimioterapia}
            options={{
              title: 'O que esperar?',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewRadioterapia"
            component={ViewRadioterapia}
            options={{
              title: 'Radioterapia', 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewOQueEhRadioterapia"
            component={ViewOQueEhRadioterapia}
            options={{
              title: 'O que é radioterapia?',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewComoEhFeitaRadioterapia"
            component={ViewComoEhFeitaRadioterapia}
            options={{
              title: 'Como é feita?',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewOQueEsperarRadioterapia"
            component={ViewOQueEsperarRadioterapia}
            options={{
              title: 'O que esperar?',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewSinaisSintomas"
            component={ViewSinaisSintomas}
            options={{
              title: 'Sinais e Sintomas', 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewFebreSinaisSintomas"
            component={ViewFebreSinaisSintomas}
            options={{
              title: 'Febre',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewDorSintomas"
            component={ViewDorSintomas}
            options={{
              title: 'Dor',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewFadigaCansacoSinaisSintomas"
            component={ViewFadigaCansacoSinaisSintomas}
            options={{
              title: 'Fadiga e cansaço',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewNauseaVomitoSinaisSintomas"
            component={ViewNauseaVomitoSinaisSintomas}
            options={{
              title: 'Nausea e vômito',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewDisturbiosSonoSinaisSintomas"
            component={ViewDisturbiosSonoSinaisSintomas}
            options={{
              title: 'Distúrbios do sono',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewDiarreiaSinaisSintomas"
            component={ViewDiarreiaSinaisSintomas}
            options={{
              title: 'Diarréia',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewConstipacaoSinaisSintomas"
            component={ViewConstipacaoSinaisSintomas}
            options={{
              title: 'Constipação',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewDisturbiosPsicoemocionaisSinaisSintomas"
            component={ViewDisturbiosPsicoemocionaisSinaisSintomas}
            options={{
              title: 'Distúrbios psicoemocionais',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewConvulsoesSinaisSintomas"
            component={ViewConvulsoesSinaisSintomas}
            options={{
              title: 'Convulsões',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewDisturbiosSensoriaisSinaisSintomas"
            component={ViewDisturbiosSensoriaisSinaisSintomas}
            options={{
              title: 'Disturbios sensoriais',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewMucoseOralSinaisSintomas"
            component={ViewMucoseOralSinaisSintomas}
            options={{
              title: 'Mucosite oral',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewAnorexiaSinaisSintomas"
            component={ViewAnorexiaSinaisSintomas}
            options={{
              title: 'Anorexia',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewNeuropatiasSinaisSintomas"
            component={ViewNeuropatiasSinaisSintomas}
            options={{
              title: 'Neuropatias',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewSangramentosSinaisSintomas"
            component={ViewSangramentosSinaisSintomas}
            options={{
              title: 'Sangramentos',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewFaltaArSinaisSintomas"
            component={ViewFaltaArSinaisSintomas}
            options={{
              title: 'Falta de ar',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewAlopeciaSinaisSintomas"
            component={ViewAlopeciaSinaisSintomas}
            options={{
              title: 'Alopécia',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewNutricao"
            component={ViewNutricao}
            options={{
              title: 'Nutrição', 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewPassosNutricao"
            component={ViewPassosNutricao}
            options={{
              title: 'Passos para uma alimentação saudável',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewMitosNutricao"
            component={ViewMitosNutricao}
            options={{
              title: 'Os mitos da alimentação durante o tratamento do câncer',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewSondasNutricao"
            component={ViewSondasNutricao}
            options={{
              title: 'Sondas alimentares',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
          <Stack.Screen
            name="ViewBaixar"
            component={ViewBaixar}
            options={{
              title: 'Baixar',
              headerTitleStyle: {
                display: 'none'
              }, 
              drawerItemStyle: {
                display: 'none'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
