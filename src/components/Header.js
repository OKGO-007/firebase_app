import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';// ここがmuiのstyledになっていないためバグが起きていた
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";

import { signOut } from "firebase/auth"; // Firebase Authentication関連のインポート
import { auth } from "./firebase"; // Firebase設定をインポート

import { useNavigate } from "react-router-dom";


const StyledAppBar = styled(AppBar)({
    background: "#333",
    
  });


const LogoutButton = styled(Button)({
    backgroundColor: "#f50057",
    color: "white",
    "&:hover": {
      backgroundColor: "#fc83ae",
    },
});

const Header = () => {
    
    const navigate = useNavigate();// 他のページに移れる様にする

    // const StyledAppBar = styled(AppBar)`
    //     background: black; /* 背景色を灰色に変更 */
    // `;


    // const LogoutButton = styled(Button)`
    //     background-color: #f50057; /* カッコよいピンク色に変更 */
    //     color: white;
    //     &:hover {
    //         background-color: #fc83ae; /* ホバー時の色を変更 */
    // }
    // `;


    const handleLogout = async () => {
        try {
            await signOut(auth); // ログアウト処理
            console.log("ログアウト成功");
            // ログアウト成功時の処理を追加（例: ページ遷移など）
            navigate("/login");
        } catch (error) {
            console.error("ログアウトエラー", error);
        }
    };

    return (
        <Stack >
            {/* ヘッダーUI */}
            <StyledAppBar>
                <Container maxWidth="md">
                <Toolbar>
                    <Button variant="outline" component={Link} to="/home" >Home</Button>
                    <Button variant="outline" component={Link} to="/history" sx={{ ml: "auto" }}>History</Button>
                    <LogoutButton  onClick={handleLogout} sx={{ ml: "auto" }}>ログアウト</LogoutButton>
                </Toolbar>
                </Container>
            </StyledAppBar>
            {/* AppBar の高さ分のスペース */}
            <Toolbar />
        </Stack>
    )

}

export default Header;