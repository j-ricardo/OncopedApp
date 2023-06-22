import { StatusBar } from 'expo-status-bar';
import { BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';

export default function useBackButton(handler: any) {
    // Frustration isolated! Yay! 🎉
    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handler);
  
      return () => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler
        );
      };
    }, [handler]);
  }