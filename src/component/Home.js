import {
  Button,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

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

let ids = '';

function Home() {
  const id = uuid();
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [data, setData] = useState({
    id: id,
    text: '',
  });

  const handelAdd = () => {
    let b = rows;
    b.push(data);
    setRows(b);
    setData({
      id: id,
      text: '',
    });
    setOpen(false);
  };
  const handelEdit = () => {
    let b = rows;
    b.splice(ids, 1, data);
    setRows(b);
    setData({
      id: id,
      text: '',
    });
    setOpen1(false);
  };

  const deleteTask = (id) => {
    let a = rows.filter((item) => item.id !== id);
    console.log(a);
    setRows(a);
  };

  const edit = (id, index) => {
    ids = index;
    let d = rows.filter((data) => data.id === id);
    setData(d[0]);
    setOpen1(true);
  };
  return (
    <Container maxWidth='lg'>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1
            style={{
              color: 'Highlight',
            }}
          >
            TO DO LIST
          </h1>
        </Box>
        <hr />
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant='contained'
              sx={{ float: 'right', margin: '5px' }}
              onClick={() => setOpen(true)}
            >
              ADD
            </Button>
          </Grid>
          {rows.length ? (
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell width='5%' align='center'>
                        SR.NO
                      </TableCell>
                      <TableCell width='80%' align='left'>
                        Task
                      </TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={row.id}>
                        <TableCell width='5%' align='center'>
                          {index + 1}
                        </TableCell>
                        <TableCell align='left'>{row.text}</TableCell>
                        <TableCell>
                          <Button
                            variant='contained'
                            onClick={() => edit(row.id, index)}
                          >
                            Edit
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant='contained'
                            onClick={() => deleteTask(row.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TextField
            label='Add Task'
            id='outlined-size-small'
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
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

      <Modal
        open={open1}
        onClose={() => setOpen1(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TextField
            label='Add Task'
            id='outlined-size-small'
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
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
    </Container>
  );
}

export default Home;
