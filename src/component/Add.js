import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
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

function Add() {
  const list = JSON.parse(localStorage.getItem('data'))
    ? JSON.parse(localStorage.getItem('data'))
    : [];
  const navigate = useNavigate();
  const [data, setData] = useState('');
  console.log(list);
  const handelAdd = () => {
    list.push({ id: uuid(), text: data });
    localStorage.setItem('data', JSON.stringify(list));
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
            onClick={handelAdd}
          >
            Add task
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Add;
