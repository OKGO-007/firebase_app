import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

import { Grid } from "@mui/material";

import { db } from './firebase';
import { collection, getDocs, addDoc, query, orderBy, limit } from "firebase/firestore";

import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Authentication関連のインポート
//このdbの中にfirebaseのデータベースの情報が入っている(体重や身長など)


const Button_dection = styled(Button)({
    backgroundColor: "#3d3d3d",
    color: "white",
    "&:hover": {
      backgroundColor: "#b8b8b8",
    },
});


const Title = styled('h4')({
    textAlign: 'left',
  });
  
  const Input = styled("input")({
    margin: '1%',
  });
  
  const ButtonDiv = styled('div')({
    textAlign: 'right',
  });
  
  const ErrorMessage = styled('div')({
    color: 'red',
  });
  
//   const DivParallel = styled('div')({
//     display: 'flex',
//     alignItems: 'center',
//   });



const Input_weight = () => {
    const { posts, setPosts, uid, Uid} = useContext(ApiContext);
    const reversedPosts = [...posts].reverse();
    const latest_height = reversedPosts.map((data) => data.height)


    const [input_date, setInput_date] = useState("");//数値
    const [input_weight, setInput_weight] = useState(0);//数値
    const [input_height, setInput_height] = useState(0);//数値

    const [errorMessage_date, setErrorMessage_date] = useState('');// dateのエラーメッセージ
    const [errorMessage_weight, setErrorMessage_weight] = useState('');// weightのエラーメッセージ
    const [errorMessage_height, setErrorMessage_height] = useState('');// heightのエラーメッセージ



    useEffect(() => {


        // 数値以外のデータが入っている場合のエラーメッセージ
        if (!isNaN(input_weight)) {
            setErrorMessage_weight('');
          } else {
            setErrorMessage_weight('※ 数字を入力してください');
          }


        if (!isNaN(input_height)) {
            setErrorMessage_height('');
        } else {
            setErrorMessage_height('※ 数字を入力してください');
        }
    },[input_date, input_weight, input_height]);



    const decide2 = async() => {
        decide2 : {
        console.log("click!")
        if(input_date === ''){
            setErrorMessage_date(`中身が空です`)
            var empty_date = 0
        } else{
            setErrorMessage_date(``)
            var empty_date = 1
        }

        if(input_weight === ''){
            setErrorMessage_weight(`中身が空です`)
            var empty_weight = 0
        } else{
            setErrorMessage_weight(``)
            var empty_weight = 1
        }

        if(input_height === ''){
            setErrorMessage_height(`中身が空です`)
            var empty_height = 0
        } else{
            setErrorMessage_height(``)
            var empty_height = 1
        }

        if(empty_date===0 || empty_height===0 || empty_weight===0 ){
            break decide2;
        }


        // ここでfirebaseにデータを送る
        try {
            const docRef = await addDoc(collection(db, uid), {
              date: input_date,
              weight: input_weight,
              height: input_height,
            });

            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
        console.log("click complete!")
        }
    };

    return (
        <div className='element_input_weight'>


            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Title>日付</Title>
                    {/* ↓onChangeを追加 */}
                
                    <Input 
                        type="date"
                        value={input_date}
                        placeholder="日付を入力"
                        onChange={(event) => setInput_date(event.target.value)}
                    />
                    <ErrorMessage>{errorMessage_date}</ErrorMessage>

                </Grid>
                <Grid item xs={4}>
                    <Title>体重</Title>
                    {/* ↓onChangeを追加 */}
                    <Input 
                        type="text"
                        step="0.1"
                        value={input_weight}
                        placeholder="体重を入力"
                        onChange={(event) => setInput_weight(event.target.value)}
                    />
                    <ErrorMessage>{errorMessage_weight}</ErrorMessage>
                </Grid>
                <Grid item xs={4}>
                    <Title>身長</Title>
                    {/* ↓onChangeを追加 */}
                    <Input 
                        type="text"
                        step="0.1"
                        value={input_height}
                        placeholder="身長を入力"
                        onChange={(event) => setInput_height(event.target.value)}
                    />
                    <ErrorMessage>{errorMessage_height}</ErrorMessage>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ButtonDiv>
                <Button_dection variant="contained" onClick={decide2} >決定</Button_dection>
            </ButtonDiv>
            
        </div>
      );

}

export default Input_weight;