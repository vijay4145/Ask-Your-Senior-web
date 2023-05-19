import React, { useEffect, useState } from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ProjectList } from '../components/Projects/ProjectList';
import { Filters } from '../components/Projects/Filters';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Projects = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user !== null) {
        setIsLoggedIn(true);
      }
    });
  }, [])
  return (
    <>
    <div className='flex gap-3 flex-col mx-3'>
      {isLoggedIn && <Link to='/addProject' className='px-3 py-2 flex items-center gap-1 bg-blue-400 hover:cursor-pointer hover:bg-blue-500  rounded-lg text-white max-w-fit'>
        <MdLibraryAdd className='h-5 w-5'/>
        <button >Add Project</button>
      </Link>}
      <Filters/>
      <ProjectList/>
    </div>
    </>
  )
}
