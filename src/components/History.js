import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';

import Header from './Header';
import Card_data from './Card_data';

import { db } from './firebase';
import { doc, deleteDoc } from "firebase/firestore";

const Button_div = styled('div')({
    textAlign: "right",
    marginRight: "10%",
});

const DeleteButton = styled(Button)({
    backgroundColor: "#3d3d3d",
    color: "white",
    "&:hover": {
      backgroundColor: "#b8b8b8",
    },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const History = () => {

    const { posts, setPosts, uid, setUid } = useContext(ApiContext);


    // Modal用
    const [open, setOpen] = React.useState(false);// openステイトでmodalを開いたり閉じたりする
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Reverse the posts array to display the latest date first
    const reversedPosts = [...posts].reverse();


    // コレクション?ドキュメント?のidを使ってデータ除去
    const Delete = async(id) =>{
        console.log(id)
        await deleteDoc(doc(db, uid, id));
        handleClose();
    }

    return (
        <div >
            <Header />
            {reversedPosts.map((data, index) => (
                <Card key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', marginBottom: '10px' }}>
                    <CardContent sx={{ display: 'flex', margin: "1%",}}>
                        <Typography variant="body2" color="text.secondary">
                            日付: {data.date}{'/ /'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            体重: {data.weight}{'/ /'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            身長: {data.height}
                        </Typography>
                    </CardContent>

                    <Button_div>
                        <DeleteButton onClick={handleOpen} variant="contained" size="small" color="primary">
                            除去
                        </DeleteButton>
                    </Button_div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                本当に除去しますか？
                            </Typography>
                            <br></br>
                            <DeleteButton onClick={() => Delete(data.id)} variant="contained" size="small" color="primary">
                                除去
                            </DeleteButton>
                            <DeleteButton onClick={handleClose} sx={{margin: "5%",}} variant="contained" size="small" color="primary">
                                キャンセル
                            </DeleteButton>
                        </Box>
                    </Modal>
                </Card>
            ))}
        </div>
    );
};

export default History;