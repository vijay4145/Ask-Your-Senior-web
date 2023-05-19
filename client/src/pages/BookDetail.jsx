import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {ImBook} from 'react-icons/im'
import { getBookDetailsById } from '../http';
import loading_animation from '../assets/loading.json';
import Lottie from 'lottie-react';

export const BookDetail = () => {
  const location = useLocation();
  const [resp, setResp] = useState(null);
  useEffect(() => {
    const id = location.pathname.split('/')[2];
    getBookDetailsById(id).then(res=>{
      if(!res.data.hasOwnProperty('success')){
        setResp(res.data);
      }
    });
  }, [])

  const opengmail = ()=>{
    const email = resp.POSTED_BY;
    const subject = `${resp.BOOK_NAME} from AskYourSenior`;

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = url;
  }
  
  return (
    <>
 <div className='flex flex-col items-center bg-gray-50 min-h-[95vh] gap-4 md:gap-8 md:px-5 px-3 py-1'>
      <div className='bg-white p-3 md:m-2 m-1 shadow-sm w-full rounded-xl'>
      {resp && resp !== null &&  <p className='text-base md:text-lg px-5 text-gray-500'>{`Home > Book > ${resp.BOOK_NAME}`}</p>}
      </div>
      {resp && resp !== null &&  
       <div className='flex flex-col md:flex-row gap-7 items-center'>
        <img src={resp.BOOK_IMAGE_URL} alt="" className='lg:h-96 md:h-72 md:w-auto w-full h-auto'/>
        <div>
          <h1 className='font-bold text-4xl'>{resp.BOOK_NAME}</h1>
          <div className='flex items-center text-lg gap-1'>
            <ImBook/>
            <h5 className='text-lg'>{resp.PUBLICATION} Publication</h5>
          </div>
          <h5 className='text-lg'>2022 Edition</h5>
          <p className='text-gray-500 mt-2'>{resp.DESCRIPTION}</p>
          <div className='grid grid-cols-2 max-w-fit mt-2'>
            <h5>Posted On: </h5> <p>{resp.POSTED_ON.split('T')[0]}</p>
            <h5>College: </h5> <p>{resp.COLLEGE}</p>
            <h5>Branch: </h5> <p>{resp.BRANCH}</p>
            <h5>Semester: </h5> <p>{resp.SEMESTER}</p>
          </div>
          <button onClick={opengmail} className='px-4 py-1 text-white bg-blue-400 rounded-lg mt-3 font-mono text-xl'>Contact</button>
        </div>
      </div>}
      {
        resp === null && <Lottie animationData={loading_animation}/>
      }

    </div>
    </>
  )
}


const def_img = 'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?size=626&ext=jpg&ga=GA1.1.393029470.1679581827&semt=robertav1_2_sidr'
