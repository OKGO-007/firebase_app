import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';

import { db } from './firebase';
import { doc, deleteDoc } from "firebase/firestore";



const DeleteButton = styled(Button)({
    backgroundColor: "#3d3d3d",
    color: "white",
    "&:hover": {
      backgroundColor: "#b8b8b8",
    },
});

const ScrollableContainer = styled('div')({
    maxHeight: "260px", /* スクロールする時の高さ */
    overflowY: "auto", /* Enable vertical scrolling */
  });


const Button_div = styled('div')({
    textAlign: "right",
    marginRight: "10%",
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

const Card_data = () => {
    const { posts, setPosts, uid, setUid} = useContext(ApiContext);


    // Modal用
    const [open, setOpen] = React.useState(false);// openステイトでmodalを開いたり閉じたりする
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // firebaseから受け取った情報を逆順に並べ替える(最新を最初に)
    const reversedPosts = [...posts].reverse();


    // firebaseから"posts"の指定のidを除去する
    // コレクション?ドキュメント?のidを使ってデータ除去
    const Delete = async(id) =>{
        console.log(id)
        await deleteDoc(doc(db, uid, id));
        handleClose();
    }

    return (
        <ScrollableContainer>
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
        </ScrollableContainer>
    );
}

export default Card_data;
