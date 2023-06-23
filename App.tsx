import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, BackHandler } from 'react-native';
import { NativeBaseProvider, Center, Button, extendTheme } from "native-base";
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator,
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

const Stack = createDrawerNavigator();
const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function CustomDrawerContent(props: any) {  

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
           
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator 
          id="LeftDrawer"
          useLegacyImplementation
          initialRouteName="initialRoute"
          backBehavior='order'
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
              }
            }}
          />
          <Stack.Screen
            name="ViewTerapias"
            component={ViewTerapias}
            options={{
              title: 'Terapias'
            }}
          />
          <Stack.Screen
            name="ViewQuimioterapia"
            component={ViewQuimioterapia}
            options={{
              title: 'Quimioterapia'
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
              title: 'Radioterapia'
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
              title: 'Sinais e Sintomas'
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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
