import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddBookSlice } from '../../../store/AddBookSlice';
import { MySnackbar } from '../../MySnackbar';

export const AddBookForm2 = (props) => {
    const [college, setCollege] = useState(null);
    const [branch, setBranch] = useState(null);
    const [semester, setSemester] = useState(null);
    const {COLLEGE, BRANCH, SEMESTER} = useSelector(state=> state.AddBookSlice);
    const dispatch = useDispatch();
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);


    const loadNextForm = ()=>{
        if(college !== null && branch !== null && semester !== null){
            dispatch(setAddBookSlice({
                COLLEGE: college,
                SEMESTER: semester,
                BRANCH: branch
            }))

            props.setSelectedForm(2)
        }else{
          setIsOpenSnackbar(true);
        }
    }
    useEffect(() => {
        if(COLLEGE !== null) setCollege(COLLEGE);
        if(BRANCH !== null) setBranch(BRANCH);
        if(SEMESTER !== null) setSemester(SEMESTER);
    }, [])
    
  return (
    <>
        <div className='flex flex-col gap-4 p-2 items-center' data-aos="fade-left">
        <TextField
            fullWidth
            label="College"
            type="text"
            variant="outlined"
            required
            value={college}
            onChange={(e)=>{setCollege(e.target.value)}}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            fullWidth
            label="Branch"
            type="text"
            variant="outlined"
            required
            value={branch}
            onChange={(e)=>{setBranch(e.target.value)}}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            fullWidth
            label="Semester"
            type="number"
            variant="outlined"
            required
            value={semester}
            onChange={(e)=>{setSemester(e.target.value)}}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <button onClick={loadNextForm} className='bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg max-w-fit'>Next</button>
        <MySnackbar isOpen={isOpenSnackbar} setOpen={setIsOpenSnackbar} msg='Please Complete All The Fields' severity='error'/>
    </div>
    </>
  )
}
