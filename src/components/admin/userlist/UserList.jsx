import React from 'react'
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import { useGetUsersDetailQuery } from '../../../services/adminapi';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const UserList = () => {

  const { data, isSuccess, isError } = useGetUsersDetailQuery()
  
  console.log(data)

  return (
    <Box sx={{width:'100%',backgroundColor:'#fff',mt:'7rem'}}>
    <Container maxWidth={'md'} >
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell align="center">no.</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Gender</StyledTableCell>
          <StyledTableCell align="center">Phone number</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {isSuccess === true ? data.data?.map((element,i)=>{ return(
      <StyledTableRow key={i}>
      <StyledTableCell align="center">{element.id}</StyledTableCell>
      <StyledTableCell align="center">{element.name}</StyledTableCell>
      <StyledTableCell align="center">{element.email}</StyledTableCell>
      <StyledTableCell align="center">{element.gender}</StyledTableCell>
      <StyledTableCell align="center">{element.phone_num}</StyledTableCell>
      
          </StyledTableRow>
          )}) : null }
      </TableBody>
      {/* <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
    </Table>
  </TableContainer>
  </Container>
  </Box>
  )
}

export default UserList