import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { setAddBookSlice } from '../../../store/AddBookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MySnackbar } from '../../MySnackbar';

export const AddBookForm = (props) => {
    const {BOOK_NAME, PUBLICATION, PRICE, EDITION} = useSelector(state=> state.AddBookSlice)
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [edition, setEdition] = useState(null);
    const [publication, setPublication] = useState(null);
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
    const dispatch = useDispatch();
    
    const loadNextForm = ()=>{
        // if all fields are completed
        if(name && price && edition && publication && name !== null && price !== null && edition !== null && publication !== null){
            dispatch(setAddBookSlice({
                BOOK_NAME : name,
                PUBLICATION : publication, 
                PRICE : price,
                EDITION: edition
            }))

            props.setSelectedForm(1)
        }else{
          setIsOpenSnackbar(true);
        }
    }

    useEffect(() => {
        if(BOOK_NAME !== null) setName(BOOK_NAME);
        if(PUBLICATION !== null) setPublication(PUBLICATION);
        if(PRICE !== null) setPrice(PRICE);
        if(EDITION !== null) setEdition(EDITION);
    }, [])
    
  return (
    <>
    <div className='flex flex-col gap-4 p-2 items-center' data-aos="fade-left">
        <TextField
            fullWidth
            id="filled-search"
            label="Book Name"
            type="text"
            variant="outlined"
            required
            placeholder='Operating System'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            fullWidth
            id="filled-search"
            label="Book Price"
            type="text"
            variant="outlined"
            required
            placeholder='₹250'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            fullWidth
            id="filled-search"
            label="Book Edition"
            type="text"
            variant="outlined"
            required
            placeholder='2022 edition'
            value={edition}
            onChange={(e)=>setEdition(e.target.value)}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            fullWidth
            id="filled-search"
            label="Book Publication"
            type="text"
            variant="outlined"
            required
            value={publication}
            placeholder='Technknowledge'
            onChange={(e)=>setPublication(e.target.value)}
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
