import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Graph from './components/Graph';
import Graph2 from './components/Graph2';
import Input_weight from './components/Input_weight';
import Header from './components/Header';
import Routers from './Routers';
import { AuthProvider } from './context/useAuthContext';// これで囲まれたところは承認状態を取得することができる

import styled from "styled-components";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// レスポンシブに対応しなければいけない


root.render(
  <React.StrictMode>
     <AuthProvider>
        <Routers/ >
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
