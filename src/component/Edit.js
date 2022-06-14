import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Home from './Home';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
  const id = useParams().id;
  const list = JSON.parse(localStorage.getItem('data'));

  const navigate = useNavigate();
  const [data, setData] = useState(list.find((item) => item.id === id).text);

  const handelEdit = () => {
    console.log(data);
    let a = list.map((item) => {
      return item.id === id ? { id: id, text: data } : item;
    });
    localStorage.setItem('data', JSON.stringify(a));
    navigate('/');
  };

  return (
    <div>
      <Home />
      <Modal
        open={true}
        onClose={() => navigate('/')}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TextField
            label='Add Task'
            id='outlined-size-small'
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Button
            variant='contained'
            sx={{ margin: '10px' }}
            onClick={handelEdit}
          >
            Edit task
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
