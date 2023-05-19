import React, { useState } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { TopBar } from '../components/Projects/AddProject/TopBar';
import { AddProjectForm1 } from '../components/Projects/AddProject/AddProjectForm1';
import { AddProjectForm2 } from '../components/Projects/AddProject/AddProjectForm2';

export const AddProject = () => {
    const [selectedForm, setSelectedForm] = useState(0);
    AOS.init({
        offset: 20
      });
  return (
    <>
       <div className='bg min-w-fit min-h-screen flex items-center justify-center'>
      <div className='flex flex-col bg-white md:p-6 p-3 rounded-lg shadow-2xl gap-5 overflow-hidden'>
        <TopBar selectedForm={selectedForm} setSelectedForm={setSelectedForm}/>
          {selectedForm === 0 && <AddProjectForm1 setSelectedForm={setSelectedForm}/>}
          {selectedForm === 1 && <AddProjectForm2 setSelectedForm={setSelectedForm}/>}
      </div>
    </div>
    </>
  )
}
