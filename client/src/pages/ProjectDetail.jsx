import React, { useEffect, useState } from 'react'
import { getProjectDetailsById } from '../http'
import { useLocation } from 'react-router-dom'
import Lottie from 'lottie-react';
import loading_animation from '../assets/loading.json';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiGithubAlt } from 'react-icons/di';
import { BsPersonCircle, BsFillCalendarCheckFill } from 'react-icons/bs';

export const ProjectDetail = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    useEffect(() => {
      const id = location.pathname.split('/')[3];   
      getProjectDetailsById(id).then(res=>{
        console.log(res.data);
        setData(res.data);
      })
    }, [])
    
  return (
    <>
      {
        data === null && <Lottie animationData={loading_animation}/>
      }

      {data && data !== null &&  
        <div className="break-all flex flex-col gap-2 w-full">
          <section id="top-heading" className="p-4 bg-gray-50 w-full">
            <div className="pt-4 pb-4 px-8 bg-white rounded-xl shadow-sm">
              <span className="text-blue-600"> Projects {" > "} </span>{" "}
              {data.PROJECT_NAME}
            </div>
          </section>
          <div className="flex items-center justify-center">
            <section
              id="Event-Details"
              className="flex flex-col  min-w-[50vw] max-w-4xl gap-4"
            >
              <div className="w-full flex flex-col justify-between md:flex-row-reverse gap-5 md:gap-12 bg-blue-400 shadow-lg p-5 rounded-xl text-white items-center">
                <img
                  className="w-80 bg-white border-spacing-1 h-auto rounded-xl shadow-lg"
                  style={{ border: "1px solid wheat" }}
                  src={data.PROJECT_IMAGE_URL}
                  alt="Event_icon" 
                />
                <div
                  id="data"
                  className="flex flex-col gap-2  md:items-start"
                >
                  <h1 className="text-3xl font-serif">{data.PROJECT_NAME}</h1>
                  <div className='flex gap-1 items-center'>
                    <BsFillCalendarCheckFill size={17}/>
                    <p>{data.POSTED_ON.split('T')[0]}</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <BsPersonCircle size={20}/>
                    <p>{data.POSTED_BY.split('@')[0]}</p>
                  </div>
                  

                  <a href={data.GITHUB_LINK} target="_blank">
                    <button className="mt-3 bg-white md:max-w-fit hover:bg-blue-500 shadow-lg text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                      Contribute
                    </button>
                  </a>
                </div>
              </div>

              <div
                id="description-tag"
                className="flex flex-col md:flex-row mt-2 p-2 w-full gap-4"
              >
                <div className="flex flex-col col-span-2 md:w-[70%]">
                  <h5 className="text-lg font-semibold">Description :</h5>
                  <p>{data.DESCRIPTION}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl">&nbsp;Tags</h4>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {data.TAGS &&
                      data.TAGS.length > 0 &&
                      data.TAGS.map((tag, i) => {
                        return (
                          <p className="py-1 px-3 bg-gray-200  max-w-fit rounded-lg">
                            {tag}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div id="share-button" className="flex flex-col gap-1 ml-2">
                <h5 className="font-semibold text-lg">Contact Us on :</h5>
                <div className="flex flex-row gap-4 flex-wrap">
                  {data.LINKEDIN_LINK && <a href={data.LINKEDIN_LINK} target="_blank"><AiFillLinkedin color="#0072b1" size={30}/></a>}
                  {data.GITHUB_LINK && <a href={data.GITHUB_LINK} target="_blank"><DiGithubAlt color="#0072b1" size={30}/></a>}
                </div>
              </div>
              <br/>
            </section>
          </div>
      </div>}
    </>
  )
}
