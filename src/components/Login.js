import React, { useState } from "react";
import {Avatar,Alert,Button,CssBaseline,TextField,Box,Typography,Container,Grid,Link,} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase Authentication関連のインポート
import { auth } from "./firebase"; // Firebase設定をインポート

// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); //homeに遷移するために利用する

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // ログイン処理
      await signInWithEmailAndPassword(auth, email, password);
      console.log("ログイン成功");
      navigate("/home");
      <Alert severity="success">ログインしました</Alert>;
      // ログイン成功時の処理を追加（例: ページ遷移など）
    } catch (error) {
      setError("ログインに失敗しました"); // エラーメッセージを設定
      console.error("ログインエラー", error);
      error && <Alert severity="error">ログインできませんでした</Alert>;
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
          ログイン
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
            sx={{ mt: 3, mb: 2 }}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="reset_key" variant="body2">
                パスワードを忘れた方
              </Link>
            </Grid>
            <Grid item>
              <Link  href="signup" variant="body2">
                アカウントをお持ちでない方
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </div>
  );
}






// import React from 'react';
// import '../App.css';
// import { signInWithPopup } from 'firebase/auth';
// import { auth } from "./firebase";
// import { db, provider } from './firebase';
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";

// const Login = () =>{

//     const [user] = useAuthState(auth);

//     return(
//         <div className="Login">
//             <h1>App ログイン画面</h1>
//             {user ? (
//                 <>
//                     <UserInfo />
//                     <SignOutButton />
//                     <br></br>
//                     <Button variant="contained" component={Link} to="/home">
//                         <p>管理画面へ</p>
//                     </Button>
//                 </>
//             ) : (
//                 <SignInButton />
//             )}
//         </div>
//     );
// };

// export default Login;

// // サインイン
// function SignInButton(){
//     const signInWithGoogle = () =>{
//         //firebaseを使ってgoogleでサインイン
//         signInWithPopup(auth, provider);
//     }

//     return(
//         <Button onClick={signInWithGoogle} variant="contained" >
//                 <p>Googleでサインイン</p>
//         </Button>
//     )
// }

// // サインアウト
// function SignOutButton(){

//     // auth.signOutがもうすでに用意してあり実行するだけでサインアウトができる
//     return(
//         <button onClick={() => auth.signOut()}>
//             <p>サインアウト</p>
//             {console.log("アウト")}
//         </button>
//     )
// }


// function UserInfo(){

//     return(
//         <div className='userInfo'>
//             <img src={auth.currentUser.photoURL} alt="" />
//             <p>{auth.currentUser.displayName}</p>
//         </div>
//     );
// }