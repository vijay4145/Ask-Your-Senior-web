import Lottie from "lottie-react";
import React, { useEffect } from 'react'
import * as empty_box from '../../assets/not_found.json';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export const Activities = ({data}) => {
  

  const book_url = (id)=>{
    const url = window.location.origin + '/bookdetail/' + id;
    console.log(url);
    window.open(url, '_blank');
  }
  const project_url = (id)=>{
    const url = window.location.origin + '/projects/projectdetail/' + id;
    window.open(url, '_blank');
  }
  
  return (
    <>
    <div className="ml-3 flex flex-col gap-2">

      <h5 className="text-blue-500 font-semibold text-2xl">Activities</h5>
      {data.BOOKS.length === 0 && data.REPOSITORIES.length === 0 &&
        <div id="no-activity" className="flex items-center flex-col">
          <Lottie animationData={empty_box} className='h-52'/>
          <h4 className="text-blue-500 font-bold text-lg">No activities</h4>
      </div>}
    <h1 className="text-blue-500 text-lg">Your Books:</h1>
    <div className="ml-2">

    {
          <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="right">Link&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.BOOKS.map((book) => (
            <StyledTableRow key={book.NAME}>
              <StyledTableCell component="th" scope="row">
                {book.NAME} 
              </StyledTableCell>
              <StyledTableCell align="right"> <span className="cursor-pointer hover:text-blue-400" onClick={()=>book_url(book.id)}>{`https://askyoursenior.netlify.app/bookdetail/${book.id}`}</span> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      }
    
    </div>
    <hr/>
    <h1 className="text-blue-500 text-lg font-semibold">Projects:</h1>
    <div className="ml-2">
    {
      // data.REPOSITORIES.length > 0 && data.REPOSITORIES.map(repo=>{
      //   return <h4 onClick={()=>{project_url(repo.id)}} className="text-blue-500 text-lg hover:underline">{repo.NAME}</h4>
      // })

      <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Link&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.REPOSITORIES.length > 0 && data.REPOSITORIES.map((repo) => (
            <StyledTableRow key={repo.NAME}>
              <StyledTableCell component="th" scope="row">
                {repo.NAME} 
              </StyledTableCell>
              <StyledTableCell align="right"> <span className="cursor-pointer hover:text-blue-400" onClick={()=>project_url(repo.id)}>{`https://askyoursenior.netlify.app/projectdetail/${repo.id}`}</span> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }
    </div>

    </div>
    </>
  )
}
