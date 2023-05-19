import React from 'react'
import { Link } from 'react-router-dom'
import { HastTagCards } from '../TagInput/HastTagCards';

export const ProjectCard = ({res}) => {

  return (
    <>
           <Link target='_blank' to={`projectdetail/${res._id}`} className='max-w-fit shadow-md hover:shadow-lg pb-1 gap-1 rounded-lg'>
        <img src={res.PROJECT_IMAGE_URL} alt="" className='h-52 w-72'/>
        <div className='flex flex-col justify-between mx-2 mt-1 text-lg text-gray-500'>
            <h5 className='font-semibold text-gray-900'>{res.PROJECT_NAME}</h5>
            <div className='flex flex-wrap gap-2'>
                {res.TAGS && res.TAGS.length > 0 && res.TAGS.map((ele, i)=>{
                    return <HastTagCards forDisplay={true} hashTag={ele}/>
                })}
            </div>
        </div>
        <button className='mx-2 my-1 bg-blue-400 text-white rounded-md py-1 px-2'>View More</button>
       </Link>
    </>
  )
}
