import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const BookCard = ({res}) => {
  useEffect(() => {
    console.log(res);
  }, [])
  
  return (
    <>
       <Link target='_blank' to={`bookdetail/${res._id}`} className='max-w-fit shadow-md hover:shadow-lg pb-1 gap-1 rounded-lg'>
        <img src={res.BOOK_IMAGE_URL} alt="" className='h-52 w-72'/>
        <div className='flex justify-between mx-2 mt-1 text-lg font-semibold text-gray-500'>
            <h5>{res.BOOK_NAME}</h5>
            <h5>{res.PRICE}</h5>
        </div>
        <p className='ml-2'>{res.PUBLICATION}</p>
        <button className='mx-2 my-1 bg-blue-400 text-white rounded-md py-1 px-2'>View More</button>
       </Link>
    </>
  )
}

