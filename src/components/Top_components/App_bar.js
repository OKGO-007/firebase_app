import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#333',  // より抑えたカラ-
  marginBottom: theme.spacing(4),
}));


const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f50057",
  color: "white",
  "&:hover": {
    backgroundColor: "#fc83ae",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const App_bar = () => {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BodyUp
          </Typography>
          
          <Button color="inherit" component={Link} to="/signup">サインイン</Button>
          <LoginButton color="inherit" component={Link} to="/login">ログイン</LoginButton>
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default App_bar;
