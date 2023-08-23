import Box from '@mui/material/Box';
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../context/ApiContext';


const DataButtonList = ({ dates, weights, heights, label }) => (
    <div>
      <h3>{label}</h3>
      <div>
        {dates.map((value, index) => (
          <button key={index} onClick={() => console.log(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );

const Sorting = () => {
    const { posts, setPosts, } = useContext(ApiContext);

    const dates = posts.map(data => data.date);
    const weights = posts.map(data => data.weight);
    const heights = posts.map(data => data.height);

  return (
    <div>
    <DataButtonList dates={dates} weights={weights} heights={heights} label="Dates" />
  </div>
  );
};

export default Sorting;




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'date', headerName: '日付', width: 130 },
//   { field: 'weight', headerName: '体重', type: 'number', width: 130 },
//   {
//     field: 'height',
//     headerName: '身長',
//     type: 'number',
//     width: 90,
//   },
// ];

// const rows = [
//   { id: 1, date: '2023-07-01', weight: 60, height: 170 },
//   // 他の行データも追加
// ];


// export default function Sorting() {
//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//         onSelectionModelChange={(newSelectionModel) => {
//           // newSelectionModelには選択された行のIDが含まれる
//           // 選択された行のIDを使って対応する行の情報を取得し、コンソールに表示
//           const selectedRowIds = newSelectionModel;
//           const selectedRows = rows.filter(row => selectedRowIds.includes(row.id));
//           selectedRows.forEach(row => {
//             console.log('Selected ID:', row.id);
//             console.log('Selected Date:', row.date);
//             // 他のカラム情報も表示する場合は追加
//           });
//         }}
//       />
//     </Box>
//   );
// }




// const DataButtonList = ({ data, label }) => (
//     <div>
//       <h3>{label}</h3>
//       <div>
//         {data.map((value, index) => (
//           <button key={index} onClick={() => console.log(value)}>
//             {value}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

// const Sorting = () => {
//     const { posts, setPosts, } = useContext(ApiContext);

//     const dates = posts.map(data => data.date);
//     const weights = posts.map(data => data.weight);
//     const heights = posts.map(data => data.height);

//   return (
//     <div>
//     <DataButtonList data={dates} label="Dates" />
//     <DataButtonList data={weights} label="Weights" />
//     <DataButtonList data={heights} label="Heights" />
//   </div>
//   );
// };

// export default Sorting;