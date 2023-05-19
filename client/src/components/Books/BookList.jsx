import React, { useEffect, useState } from 'react'
import { BookCard } from './BookCard'
import { getBookList } from '../../http'
import Lottie from 'lottie-react';
import loading_animation from '../../assets/loading.json';
import AOS from "aos";
import "aos/dist/aos.css";

export const BookList = ({college, semester, branch}) => {
  const [response, setresponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    getBookList(college, semester, branch).then(res=>{
      setresponse(res.data);
      setIsLoading(false);
    })
  }, [])

  AOS.init({
    offset: 20
  });
  
  
  return (
    <>
    {isLoading ? <Lottie animationData={loading_animation} className='h-44 w-44'/>:
      <div data-aos="zoom-in" className='p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2'>
      {response && response.length > 0 && response.map(res=>{
        return <BookCard res={res}/>
      })}
    </div>}
        <br/>
        <br/>
        <br/>
    </>
  )
}
