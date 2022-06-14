import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem('data'))
      ? JSON.parse(localStorage.getItem('data'))
      : []
  );
  const navigate = useNavigate();
  const Delete = (id) => {
    let a = rows.filter((item) => item.id !== id);
    setRows(a);
    localStorage.setItem('data', JSON.stringify(a));
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
              onClick={() => navigate('/add')}
            >
              ADD
            </Button>
          </Grid>

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
                          onClick={() => navigate(`/edit/${row.id}`)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          onClick={() => Delete(row.id)}
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
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
