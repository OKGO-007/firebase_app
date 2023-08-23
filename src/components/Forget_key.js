import React, { useState } from "react";
import {
  Avatar,
  Alert,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { auth } from "./firebase";  // Firebaseの初期化設定をインポート
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Forget_key() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); //別のページ遷移するために利用する


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email)

    try {
        await sendPasswordResetEmail(auth, email); // 関数の呼び出し
        console.log("成功");
        setSuccess(true); // 成功フラグをセット
        setError(null); // エラーをクリア
      } catch (error) {
        console.log(error);
        console.log("失敗");
        setError("メール送信に失敗しました"); // エラーメッセージをセット
        setSuccess(false); // 成功フラグをクリア
      }

    //   await auth
    //   .sendPasswordResetEmail(email)
    //   .then((resp) => {
    //     // メール送信成功
    //   })
    //   .catch((error) => {
    //     // メール送信失敗
    //     console.log(error)
    //   })


  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          パスワード再設定
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            送信
          </Button>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
              <Link href="login" variant="body2">
                戻る
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">メールアドレスに送信しました</Alert>}
    </Container>
  );
}
