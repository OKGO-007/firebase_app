import { useAuthContext } from '../context/useAuthContext'; 
import { Link } from "react-router-dom";
import React from 'react';
import { useNavigate } from "react-router-dom";

//このファイルはログインせずに/homeの方に入ろうとすると/loginに戻す役割
//useAuthContextから情報をもらっているのかな？

function AuthGuard({ children }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  if (typeof user === 'undefined') {
    return <div>読み込み中...</div>;
  }

  if (user === null) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
}

export default AuthGuard;
