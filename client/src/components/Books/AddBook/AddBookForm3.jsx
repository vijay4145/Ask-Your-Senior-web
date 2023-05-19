import { TextareaAutosize } from '@mui/material'
import { AiOutlineFileAdd } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddBookSlice } from '../../../store/AddBookSlice';
import { MySnackbar } from '../../MySnackbar';
import { ref, getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../config/firebase-config'
import Lottie from 'lottie-react';
import loading_animation from '../../../assets/loading.json';
import { postBook } from '../../../http';


export const AddBookForm3 = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState(null);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const dispatch = useDispatch();
  const json = useSelector(state=> state.AddBookSlice);

  useEffect(() => {
    if(json.DESCRIPTION !== null) setDescription(json.DESCRIPTION);
  }, [json])
  

  const addBook = ()=>{
    if(description !== null && file !== null){
      setIsLoading(true);
      const storageRef = ref(storage, `bookImages/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        snapshot =>{

        },
        error =>{
          setIsLoading(false);
          setIsSuccessfully(false);
          console.log(error);
        },
        ()=> {
          getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
            dispatch(setAddBookSlice({
              DESCRIPTION : description,
            }))
            let newjson = {...json};
            newjson.DESCRIPTION = description;
            newjson.BOOK_IMAGE_URL = url;

            postBook(newjson).then(res=>{
              setIsLoading(false);
              if(res.data.success)
                setIsSuccessfully(true);
              else{
                setIsFailed(true);
              }
            });

          })
        }
      );
    }else{
      setIsSnackBarOpen(true);
    }
  }

  return (
    <>
    {!isLoading && <div className='flex gap-3 flex-col items-center' data-aos="fade-left">
      <input 
        onChange={(e)=>setFile(e.target.files[0])}
        required type='file' 
        className='px-1 py-1 rounded-lg w-full' 
        style={{border: '1px solid #808080'}}/>
      <TextareaAutosize
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        minRows={3}
        required
        placeholder='Description*'
        className='box-border w-full p-2 border-2 rounded-lg border-gray-400'
        />
      
      <div onClick={addBook} className='cursor-pointer flex gap-1 items-center bg-green-600 text-white px-3 py-2 rounded-lg font-bold'>
        <AiOutlineFileAdd/>
        <button className=''>Add Book</button>
      </div>
      <MySnackbar isOpen={isSnackBarOpen} setOpen={setIsSnackBarOpen} msg='Please Complete All The Fields' severity='error'/>
      <MySnackbar isOpen={isFailed} setOpen={setIsFailed} msg='Unable to Upload Book. Please Retry again' severity='error'/>
      <MySnackbar isOpen={isSuccessfully} setOpen={setIsSuccessfully} msg='Uploaded Successfully' severity='success'/>
    </div>}
    {
      isLoading && <Lottie className='h-52 w-auto' animationData={loading_animation}/>
    }
    </>
  )
}
