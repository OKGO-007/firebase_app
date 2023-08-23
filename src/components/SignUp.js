import React, { useState } from "react";
import {Avatar,Alert,Button,CssBaseline,TextField,Box,Typography,Container,Link} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Authentication関連のインポート
import { auth } from "./firebase"; // Firebase設定をインポート

import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); //homeに遷移するために利用する


  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      // ユーザー登録処理
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("ユーザー登録成功", user);
      // ここでFirestoreにユーザー情報を保存する処理を追加できます
      navigate("/login");// 成功時の処理(ページ遷移)
    } catch (error) {
      setError("ユーザー登録に失敗しました"); // エラーメッセージを設定
      console.error("ユーザー登録エラー", error);
    }
  };

  return (
    <div>
        <Button component={Link} to="/">
            <Link href="/" >
                ←Topへ戻る
            </Link>
        </Button>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          BodyUp
        </div>
        <Typography component="h1" variant="h5">
          ユーザー登録
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "success.main" }}
          >
            ユーザー登録
          </Button>
        </Box>
      </Box>
    </Container>
    </div>
  );
}