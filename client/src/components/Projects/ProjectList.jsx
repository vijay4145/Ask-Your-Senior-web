import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getProjectList } from '../../http';
import { ProjectCard } from './ProjectCard'
import Lottie from 'lottie-react';
import loading_animation from '../../assets/loading.json';
import AOS from "aos";
import "aos/dist/aos.css";

export const ProjectList = () => {
    const [response, setresponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
      setIsLoading(true);
      const searchParams = new URLSearchParams(location.search);
      let filter = searchParams.get("filter");
      if(filter) filter = filter.split(',');
      else filter = 'all';
      getProjectList(filter).then(res=>{
        setresponse(res.data);
        setIsLoading(false);
      })
    }, [])

    AOS.init({
      offset: 20
    })
    
  return (
    <>
        {!isLoading && <div data-aos="zoom-in" className='p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2  place-items-center'>
          {response && response.length > 0 && response.map((res,i)=>{
            return <ProjectCard res={res} key={i}/>
          })}
    </div>}
    {
      isLoading && <Lottie animationData={loading_animation} className='h-44 w-44'/>
    }
        <br/>
        <br/>
        <br/>
    </>
  )
}
