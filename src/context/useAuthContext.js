import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react';
  import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Authentication関連のインポート
  

  // AuthGuardと連携して使っているブックマークに追加してあるので確認
  const AuthContext = createContext();
  
  const initialState = {//初期状態
    user: undefined,
  };
  
  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);
  
    useEffect(() => {
      try {
        const auth = getAuth();
        return onAuthStateChanged(auth, (user) => {
          setUser({
            user,
          });
        });
      } catch (error) {
        setUser(initialState);
        throw error;
      }
      console.log(user)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
  };
  
  export const useAuthContext = () => useContext(AuthContext);
  