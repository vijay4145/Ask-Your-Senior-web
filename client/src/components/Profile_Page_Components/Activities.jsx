import Lottie from "lottie-react";
import React, { useEffect } from 'react'
import * as empty_box from '../../assets/not_found.json';

export const Activities = ({data}) => {
  

  const book_url = (id)=>{
    const url = window.location.origin + '/bookdetail/' + id;
    console.log(url);
    window.open(url, '_blank');
  }
  const project_url = (id)=>{
    const url = window.location.origin + '/projects/projectdetail/' + id;
    window.open(url, '_blank');
  }
  
  return (
    <>
    <div className="ml-3 flex flex-col gap-2">

      <h5 className="text-blue-500 font-semibold text-2xl">Your Activities</h5>
      {data.BOOKS.length === 0 && data.REPOSITORIES.length === 0 &&
        <div id="no-activity" className="flex items-center flex-col">
          <Lottie animationData={empty_box} className='h-52'/>
          <h4 className="text-blue-500 font-bold text-lg">No activities</h4>
      </div>}
    <h1 className="text-blue-500 text-lg">Your Books:</h1>
    <div className="ml-2">

    {
      data.BOOKS.length > 0 && data.BOOKS.map(book=>{
        return <p onClick={()=>{book_url(book.id)}} className="text-blue-500 text-lg hover:underline">{book.NAME}</p>
      })
    }
    </div>
    <hr/>
    <h1 className="text-blue-500 text-lg font-semibold">Your Projects:</h1>
    <div className="ml-2">
    {
      data.REPOSITORIES.length > 0 && data.REPOSITORIES.map(repo=>{
        return <h4 onClick={()=>{project_url(repo.id)}} className="text-blue-500 text-lg hover:underline">{repo.NAME}</h4>
      })
    }
    </div>

    </div>
    </>
  )
}
