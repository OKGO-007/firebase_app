import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; // Typographyコンポーネントをインポート

import back_img from "./App_img.png"

import { Link } from "react-router-dom";

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${back_img}) center/cover`, // 画像を背景に設定
  margin: '20px', // 周りに少しだけ余白を残す
});

const AppTitle = styled('h1')({
  color: 'white',
  fontSize: '2rem',
  marginBottom: '1rem',
});

const GrayLoginButton = styled(Button)({
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '4px',

  backgroundColor: "#f50057",
  color: "white",
  "&:hover": {
    backgroundColor: "#fc83ae",
  },
});

const Main = () => {
  return (
    <MainContainer>
      <Typography variant="body1" sx={{ color: 'white', fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem' }}>
        あなたの体重を管理するためのアプリです。健康的な生活をサポートします。
      </Typography>
      <AppTitle>BodyUp</AppTitle>
      <GrayLoginButton component={Link} to="/login">ログイン</GrayLoginButton>
    </MainContainer>
  );
};

export default Main;
