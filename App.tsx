import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux/es/exports';
import { store } from './app/store/store';
import Index from './Index';

export default function App() { 
  return (
    <Provider store={store}>
        <Index />
    </Provider>
  );
}
