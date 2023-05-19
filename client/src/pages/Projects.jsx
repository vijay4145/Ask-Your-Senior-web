import React from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ProjectList } from '../components/Projects/ProjectList';
import { Filters } from '../components/Projects/Filters';

export const Projects = () => {
  return (
    <>
    <div className='flex gap-3 flex-col mx-3'>
      <Link to='/addProject' className='px-3 py-2 flex items-center gap-1 bg-blue-400 hover:cursor-pointer hover:bg-blue-500  rounded-lg text-white max-w-fit'>
        <MdLibraryAdd className='h-5 w-5'/>
        <button >Add Project</button>
      </Link>
      <Filters/>
      <ProjectList/>
    </div>
    </>
  )
}
