import {
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { AiFillBackward } from 'react-icons/ai';
import React, { useState } from "react";
import { DiGithubAlt } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setAddProjectSlice } from "../../../store/AddProjectSlice";
import { MySnackbar } from '../../MySnackbar';
import { storage } from '../../../config/firebase-config';
import { ref, getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import { postProject } from "../../../http";
import Lottie from 'lottie-react';
import loading_animation from '../../../assets/loading.json';


export const AddProjectForm2 = ({setSelectedForm}) => {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState('')
  const [file, setFile] = useState(null);
  const json = useSelector(state=>state.AddProjectSlice)

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isFieldMissing, setIsFieldMissing] = useState(false);

  const dispatch = useDispatch();
  const addProject = ()=>{
    if(file !== null && github !== '' && linkedin != ''){
      setIsLoading(true)
      const storageRef = ref(storage, `ProjectImages/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        snapshot =>{

        },
        error =>{
          setIsLoading(false);
          setIsFailed(true);
          console.log(error);
        },
        ()=> {
          getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
            dispatch(setAddProjectSlice({
              GITHUB_LINK: github,
              LINKEDIN_LINK: linkedin
            }))
            let newjson = {...json};
            newjson.LINKEDIN_LINK = linkedin
            newjson.GITHUB_LINK = github;
            newjson.PROJECT_IMAGE_URL = url;
            console.log(newjson);

            postProject(newjson).then(res=>{
              setIsLoading(false);
              console.log(res.data);
              if(res.data.success){
                setIsSuccessful(true);
              }
              else setIsFailed(true);
            });

          })
        }
      );
    }else{
      setIsFieldMissing(true);
    }
  }


  return (
    <>
    {isLoading && isLoading ? 
      <Lottie animationData={loading_animation}/>
      :
      <>
      <div className="flex flex-col gap-4 items-center">
        <input 
          onChange={(e)=>setFile(e.target.files[0])}
          required type='file' 
          className='px-1 py-1 rounded-lg w-full' 
          style={{border: '1px solid #808080'}}/>

        <TextField
          fullWidth
          label="Project Github Link"
          type="text"
          variant="outlined"
          required
          value={github}
          onChange={(e) => {
            setGithub(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <DiGithubAlt />
                </IconButton>
              </InputAdornment>
            ),
          }}
          />
       
        <TextField
          fullWidth
          label="Your Linkedin Link"
          type="text"
          variant="outlined"
          required
          value={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <BsLinkedin />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div className="flex gap-2"> 
        
        <div onClick={()=>{setSelectedForm(0)}} className="cursor-pointer flex gap-1 items-center bg-red-100 px-3 py-2 rounded-xl hover:shadow-lg">
          <AiFillBackward className="text-lg"/>
          <button>Go Back</button>
        </div>
        <button onClick={addProject} className="bg-green-600 text-white px-3 py-2 rounded-xl hover:shadow-lg">Add Project</button>

        </div>
      </div>
      <MySnackbar isOpen={isFieldMissing} setOpen={setIsFieldMissing} msg='Please Complete all Fileds' severity='error'/>
      <MySnackbar isOpen={isSuccessful} setOpen={setIsSuccessful} msg='Uploaded successfully' severity='success'/>
      <MySnackbar isOpen={isFailed} setOpen={setIsFailed} msg='Failed To Upload' severity='error'/>
      
    </>}
  </>
  );
};
