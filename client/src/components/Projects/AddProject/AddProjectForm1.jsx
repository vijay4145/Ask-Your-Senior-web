import { TextField, TextareaAutosize } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddProjectSlice } from '../../../store/AddProjectSlice';
import { MySnackbar } from '../../MySnackbar';
import { AddTagInput } from '../../TagInput/AddTagInput';
import { HastTagCards } from '../../TagInput/HastTagCards';


export const AddProjectForm1 = ({setSelectedForm}) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [isErrorSnackbar, setIsErrorSnackbar] = useState(false);
  const dispatch = useDispatch();
  const {PROJECT_NAME, TAGS, DESCRIPTION} = useSelector(state=>state.AddProjectSlice);
  
  useEffect(() => {
    console.log(tags);
  }, [])
  
  useEffect(() => {
    if(PROJECT_NAME !== null && PROJECT_NAME !== '') setProjectName(PROJECT_NAME);
    if(DESCRIPTION !== null && DESCRIPTION !== '') setDescription(DESCRIPTION);
    if(TAGS && TAGS.length > 0) setTags(TAGS);
  }, [PROJECT_NAME])
  


  

  const next = ()=>{
    if(projectName !== '' && description !== '' && tags.length > 0){
      dispatch(setAddProjectSlice({
        PROJECT_NAME: projectName,
        DESCRIPTION: description,
        TAGS: tags,
      }))
      setSelectedForm(1);
    }else{
      setIsErrorSnackbar(true);
    }
  }

  

  return (
    <>
    <div className='flex flex-col gap-4 items-center max-w-lg'>


        <TextField
            fullWidth
            label="Project Name"
            type="text"
            variant="outlined"
            required
            value={projectName}
            onChange={(e)=>{setProjectName(e.target.value)}}
            InputLabelProps={{
                shrink: true,
              }}
            />
        
        <AddTagInput setHashTags={setTags} hashTags={tags}/>
        <div className='flex gap-2 flex-wrap max-w-full items-start w-full'>
          {tags && tags.length > 0 && tags.map((tag,i)=>{
            return <HastTagCards key={i} keys={i} hashTags={tags} setHashTags={setTags} hashTag={tag}/>
          })}
        </div>

        <TextareaAutosize
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        minRows={3}
        required
        placeholder='Description*'
        className='box-border w-full p-2 border-2 rounded-lg border-gray-400'
        />

     

      <button onClick={next} className='px-5 py-1 rounded-lg text-white bg-green-500 max-w-min'>Next</button>
    </div>
    <MySnackbar isOpen={isErrorSnackbar} setOpen={setIsErrorSnackbar} msg={"Please Complete All Fields"} severity='error'/>
    

    </>
  )
}
