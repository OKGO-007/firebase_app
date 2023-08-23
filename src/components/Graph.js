import React, { useState, useEffect, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // ここにChartクラスをインポート
import App from '../App';
import { ApiContext } from '../context/ApiContext';
import { useAuthContext } from '../context/useAuthContext';

import { db, auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Authentication関連のインポート
//このdbの中にfirebaseのデータベースの情報が入っている(体重や身長など)

const Graph = (props) => {

    const { posts, setPosts, uid, setUid} = useContext(ApiContext);

    // const { user } = useAuthContext();
    // const [userData, setUserData] = useState(null);// userの情報を格納する

    // console.log(posts.map(post => (post.weight)))

    var date = new Date(); //日時取得
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    
    const yyyy = y.toString();
    const mm = ("00" + m).slice(-2);
    const dd = ("00" + d).slice(-2);
    
    const today = yyyy + "-" + mm + "-" + dd; // yyy-mm-ddの形に変換する
    console.log(today);



  

  useEffect(() => {
    // チャートを描画する前に既存のグラフを破棄
    // if (window.myChart)でwindow.myChartに値が存在するか確認
    // 前回描画したグラフを除去し新しくする
    // もしかしたらwindow.mychartはstateで置き換わるかもしれない
    // windowはグローバル変数なので他の関数からでも呼び出せる
    if (window.myChart) {
      window.myChart.destroy();
    }

    // 新しいチャートを描画
    const ctx = document.getElementById('weightChart').getContext('2d');
    const config = formatDataForChart();
    window.myChart = new Chart(ctx, config);
    // グラフの大きさを変更
    // window.myChart.canvas.parentNode.style.height = '128px';
    // window.myChart.canvas.parentNode.style.width = '128px';
    
  }, [posts]);
//   initialWeightDataが変更されたら起動


// これは関数
  const formatDataForChart = () => {
    // const dates = posts.map(data => data.date);
    // const weights = posts.map(data => data.weight);

    // const dates2 = posts.map(data => data.date);
    // const heights = posts.map(data => data.weight);
    // console.log("確認" + weights, heights)
    // console.log(typeof(weights));

    const dates = posts.map(data => data.date);
    const weights = posts.map(data => data.weight);
    const heights = posts.map(data => data.height);

    var BMI = [0];// BMIを計算したものを格納する
    for(let i = 0; i < weights.length; i++) {
      var m = heights[i] / 100
      BMI[i] = weights[i] / (m * m)
    }

    return {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: '体重',
            data: weights,
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: '身長',
            data: heights,
            fill: false,
            borderColor: 'rgba(23,255,62,1)',
          },
          {
            label: 'BMI',
            data: BMI,
            fill: false,
            borderColor: 'rgba(255,47,15,1)',
          },
        ],
      },
      options: {
       
        // maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
          },
        },
      },
    };
  };


// ここでhtmlの返している

//  <div className="app-container">
  return (
    <div className="container">
    <div className="app-container">
      <canvas id="weightChart"  className='element'></canvas>
    </div>
    </div>
  );
};

export default Graph;
