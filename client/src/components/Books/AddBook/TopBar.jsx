import React from "react";
import { AiFillInfoCircle } from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi';
import { BsFillImageFill } from 'react-icons/bs';

export const TopBar = ({selectedForm, setSelectedForm}) => {  
  
  
  return (
    <>
      <div className="flex gap-3 items-center">
        <div onClick={()=>setSelectedForm(0)} className={`${selectedForm === 0 ? 'text-blue-800':'text-gray-600'} flex flex-col items-center text-center`}>
            <AiFillInfoCircle className="md:h-9 md:w-9 w-7 h-7"/>
            <p className=" top-[100%] min-w-fit">Basic Info</p>
        </div>

        <div className={`${selectedForm === 1 ? 'bg-blue-800':'bg-gray-600'} w-10 md:w-24 h-[2px] rounded-full`}></div>
        <div onClick={()=>setSelectedForm(1)} className={`${selectedForm === 1 ? 'text-blue-800':'text-gray-600'} flex gap-1 flex-col items-center text-center`}>
            <HiAcademicCap className="md:h-9 md:w-9 w-7 h-7"/>
            <p className=" top-[100%] min-w-fit">Academic Info</p>
        </div>

        <div className={`${selectedForm === 2 ? 'bg-blue-800':'bg-gray-600'} w-10 md:w-24 h-[2px] rounded-full `}></div>
        <div onClick={()=>setSelectedForm(2)} className={`${selectedForm === 2 ? 'text-blue-800':'text-gray-600'} flex gap-1 flex-col items-center text-center`}>
            <BsFillImageFill className="md:h-9 md:w-9 w-7 h-7"/>
            <p className=" top-[100%] min-w-fit">Final Call</p>
        </div>
      </div>
    </>
  );
};
