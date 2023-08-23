import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Signup from "./components/Singup";
import App from './App';
import History from "./components/History";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TopPage from "./components/TopPage";
import Forget_key from "./components/Forget_key";

// rfce最初にこれを打ち込むとReactの雛形が作成される

// firebaseの設定
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "./components/firebase";
//このdbの中にfirebaseのデータベースの情報が入っている(体重や身長など)

// context
import ApiContextProvider from "./context/ApiContext";



const Routers = () => {
    //ここのコードを消してもいいかもしれない
    // signInWithEmailAndPassword(auth, "test_mail@gmail.com", "testuser").then(
    //     (credential) => {
    //       const user = credential.user;
    //       if (user) {
    //         console.log("アプリにログインしました");
    //       }
    //     }
    //   );
    //
    return (
        <React.StrictMode>
            <ApiContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TopPage />} />
                        <Route path="/reset_key" element={<Forget_key />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<App />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </BrowserRouter>
            </ApiContextProvider>
        </React.StrictMode>
    );
};

export default Routers;
