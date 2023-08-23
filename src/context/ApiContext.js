import React, { createContext, useState, useEffect } from "react";
// import { useAuthContext } from "./useAuthContext";

import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Authentication関連のインポート
  
import { db } from "../components/firebase";
import { collection, getDocs, onSnapshot, doc, query, orderBy, limit } from "firebase/firestore";
//このdbの中にfirebaseのデータベースの情報が入っている(体重や身長など)

export const ApiContext = createContext();

const ApiContextProvider = (props) => {

    const [posts, setPosts] = useState([]);//firebaseのdbを格納する
    //const [userData, setUserData] = useState(null);

    const [uid, setUid] = useState()

    const getUid = async () => {
        // useridを取得する
        try {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUid(user.uid)
        } else {
        }
        });
    } catch (error){
        console.error('Error uid:', error);
    }
    }
    


    useEffect(() => {
        //user id を取得する
        getUid()


        // データベースからデータ取得
        // const postData = collection(db, "posts");

        // getDocs(postData).then((data) => {
        //     // console.log(data.docs.map((doc) => ({ ...doc.data() })));
        //     setPosts(data.docs.map((doc) => ({ ...doc.data() })))
        // });

        // // リアルタイムでデータベースからデータを取得する
        // onSnapshot(postData, (post) =>{
        //     setPosts(post.docs.map((doc) => ({ ...doc.data()})))
        // })


        // asc:昇順 desc:降順
        // ここでfirebaseからデータを取ってくる
        if(uid){//uid がまだ何も入っていない状態で下の関数が動いてしまうためuidに何か入ったら起動するようにif文を使った
        const q = query(collection(db, uid), orderBy('date', 'asc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const updatedData = [];
            querySnapshot.forEach((doc) => {
                // doc.data()にデータ、doc.idにドキュメントIDが含まれる
                const dataWithId = { id: doc.id, ...doc.data() };//idも含める様にする(deleteする時に使う)
                updatedData.push(dataWithId);
            });
            setPosts(updatedData);
        });

        return () => {
        // コンポーネントがアンマウントされるときにリスナーをクリーンアップ
        unsubscribe();
        };
        } else{
            console.log("pause")
        }

    },[uid]);
    
    
    return (
        <ApiContext.Provider
        value={{
            posts,
            setPosts,
            uid,
            setUid,

        }}
        >
        {props.children}
        </ApiContext.Provider>
  );
};


export default ApiContextProvider;