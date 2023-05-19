import React from 'react'
import Lottie from 'lottie-react'
import not_found_icon from '../assets/not_found.json'

export const NotFound = ({msg}) => {
  return (
    <>
    <div className='flex flex-col text-center'>
        <Lottie animationData={not_found_icon} className='h-64 w-auto'/>
        <p className='text-gray-600 text-lg'>{msg}</p>

    </div>
    </>
  )
}
