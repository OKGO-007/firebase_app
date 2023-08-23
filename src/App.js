import './App.css';
import React, { useState, useEffect } from 'react';



import Graph from './components/Graph';
import Graph2 from './components/Graph2';//このファイルは使わない
import Input_weight from './components/Input_weight';
import Header from './components/Header';
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import Card_data from './components/Card_data';
import Sorting from './components/Sorting';

import { auth } from './components/firebase';
import { useNavigate } from "react-router-dom";

import AuthGuard from './components/AuthGuard';// ログインしていないuserが入ると/loginに戻る様に設定。


// chakra uiも気になる
// メモ: Tailwind CSSというものあるので使ってみよ
// 使用したモジュール MUI,React,npm i react-firebase-hooks,などなど


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const RoundedPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '10px', // 角を丸くする
  margin: theme.spacing(0), // 余白を追加
}));


const App = () => {
  const navigate = useNavigate();


  // homeにログインしていないuserが入ってきた場合にlogin画面に戻す(今回はAuthGardを使いlogin画面に戻す)
  // auth.onAuthStateChanged((user) => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // });

    return (
      <div>
      <AuthGuard>
      <div >
        <Header />
        <br></br>
        <Graph />
        <br></br>
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <RoundedPaper>
              <Input_weight />
            </RoundedPaper>
          </Grid>
          <Grid xs={6}>
            <RoundedPaper>
              <Card_data />
            </RoundedPaper>
          </Grid>
          <Grid xs={6}>
          </Grid>
          
        </Grid> */}
      </div>
      </AuthGuard>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <RoundedPaper>
              <Input_weight />
            </RoundedPaper>
          </Grid>
          <Grid item xs={6}>
            <RoundedPaper>
              <Card_data />
            </RoundedPaper>
          </Grid>
        </Grid>
      </div>
    );
};

export default App;