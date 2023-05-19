import { Autocomplete, Slider, TextField } from '@mui/material';
import React, { useState } from 'react'
import {FcSearch} from 'react-icons/fc';
import {MySnackbar} from './MySnackbar'

export const MainForm = () => {
  const [isOpen, setIsOpen] = useState(false); //for snackbar

  const search = ()=>{
    if(name !== '' && branch !== '' && sem !== ''){
    const currentUrl = window.location.href;
    const params = {
      college: name,
      branch: branch,
      sem: sem,
    };

    const updatedUrl = new URL(currentUrl);
    Object.keys(params).forEach((param) => {
      updatedUrl.searchParams.set(param, params[param]);
    });

    // Open the updated URL
    window.location.href = updatedUrl.toString();
  }else {
    setIsOpen(true);
  }
  }
    const [name, setName] = useState('');
    const [branch, setBranch] = useState('');
    const [sem, setSem] = useState('');
    const [collegeNames, setCollegeNames] = useState(["Terna Engineering College"])
  return (
    <>
    <div className='p-4 rounded-xl flex flex-col gap-6 w-52 min-w-[80vw] md:min-w-[50vw]'>
        <div className='flex gap-1 items-center'>
            <FcSearch className='w-7 h-7'/>
            <h1 className='text-xl font-semibold'>Please Select College and Branch</h1>
        </div>
        <Autocomplete
          fullWidth
          freeSolo
          id="college_name"
          onChange={(e,v)=>setName(v)}
          options={collegeNames}
          renderInput={(params) => <TextField {...params} label="College Name" />}
        />

        <div id="branch" className="flex gap-1 flex-wrap ">
          <span onClick={()=>setBranch('computer-engineering')} className={`${branch === 'computer-engineering' ? 'bg-blue-600':'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Computer Engineering</span>
          <span onClick={()=>setBranch('mechanical-engineering')}  className={`${branch === 'mechanical-engineering' ? 'bg-blue-600':'bg-blue-400'} px-3 py-1 bg-blue-400 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Mechanical Engineering</span>
          <span onClick={()=>setBranch('it-engineering')}  className={`${branch === 'it-engineering'  ? 'bg-blue-600':'bg-blue-400'} px-3 py-1 bg-blue-400 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>IT Engineering</span>
          <span onClick={()=>setBranch('electrical-engineering')}  className={`${branch === 'electrical-engineering'  ? 'bg-blue-600':'bg-blue-400'} px-3 py-1 bg-blue-400 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Electrical Engineering</span>
        </div>
        

        <div id="Semester" className="flex gap-1 flex-wrap ">
          <span onClick={()=>setSem('1')} className={`${sem === '1' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 1</span>
          <span onClick={()=>setSem('2')} className={`${sem === '2' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 2</span>
          <span onClick={()=>setSem('3')} className={`${sem === '3' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 3</span>
          <span onClick={()=>setSem('4')} className={`${sem === '4' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 4</span>
          <span onClick={()=>setSem('5')} className={`${sem === '5' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 5</span>
          <span onClick={()=>setSem('6')} className={`${sem === '6' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 6</span>
          <span onClick={()=>setSem('7')} className={`${sem === '7' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 7</span>
          <span onClick={()=>setSem('8')} className={`${sem === '8' ? 'bg-blue-600': 'bg-blue-400'} px-3 py-1 hover:bg-blue-500 cursor-pointer text-white rounded-lg`}>Semester 8</span>
        </div>
        <div className='flex justify-center'>
          <button onClick={search} className='bg-blue-500 max-w-fit hover:bg-blue-600 text-white py-2 px-6 rounded-lg'>Search</button>
        </div>
        
    </div>

    <MySnackbar isOpen={isOpen} msg={'Please Complete All Fields'} severity='error' setOpen={setIsOpen}/>
    </>
  )
}
