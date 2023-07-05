import { StatusBar } from 'expo-status-bar';
import { BackHandler } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { PaginaAtual, alterarPagina, paginaSelector } from "../pagina_atual/paginaAtualSlice";
//import { navigationRef } from '../../Index';

export function useBackButton(handler: any) {    
    // const dispatch = useAppDispatch();
    // const viewSel = useAppSelector(paginaSelector);
    // const [ navegacao, setNavegacao ] = useState<PaginaAtual>();

    // useEffect(() => {
    //   setNavegacao(viewSel);
    //   console.log('useeffect', viewSel.id, viewSel.nome)

    // }, [viewSel])

    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handler);
  
      return () => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler
        );
      };

    }, [/*handler*/]);
}

export function ViewReturnedInBackPress(id: number): string{
    if (id === 1)
      return "ViewInicio";  
  
    else if (id >= 2 && id <= 3)
      return "ViewPrincipal";
  
    else if (id === 4 || id === 8 || id === 12)
      return "ViewTerapias";
  
    else if (id >= 5 && id <= 7)
      return "ViewQuimioterapia";
  
    else if (id >= 9 && id <= 11)
      return "ViewRadioterapia";
  
    else if (id >= 13 && id <= 28)
      return "ViewSinaisSintomas";
    
    else if (id >= 29 && id <= 31)
      return "ViewNutricao";
  
    else
      return "ViewInicio";
  }