import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import App_bar from './Top_components/App_bar';
import Main from './Top_components/Main';
import App_footer from './Top_components/App_footer';

import './Top_components/Top.css'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  marginBottom: theme.spacing(4),
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const TopPageContainer = styled('div')({
  background: 'black', // 黒い背景色
});

const TopPage = () => {
  return (
    <TopPageContainer>
      <App_bar />
      <Main />
      <App_footer />
    </TopPageContainer>
  );
};

export default TopPage;
