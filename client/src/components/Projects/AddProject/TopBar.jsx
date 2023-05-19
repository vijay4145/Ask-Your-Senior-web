import React from 'react'
import { RiContactsBook2Line } from 'react-icons/ri';
import { AiFillInfoCircle } from 'react-icons/ai';


export const TopBar = ({selectedForm, setSelectedForm}) => {
  return (
    <>
      <div className="flex gap-3 items-center min-w-[40vw] justify-center">
        <div className={`${selectedForm === 0 ? 'text-blue-800':'text-gray-600'} flex flex-col items-center text-center`}>
            <AiFillInfoCircle className="md:h-9 md:w-9 w-7 h-7"/>
            <p className=" top-[100%] min-w-fit">Basic Info</p>
        </div>

        <div className={`${selectedForm === 1 ? 'bg-blue-800':'bg-gray-600'} w-10 md:w-24 h-[2px] rounded-full`}></div>
        <div className={`${selectedForm === 1 ? 'text-blue-800':'text-gray-600'} flex gap-1 flex-col items-center text-center`}>
            <RiContactsBook2Line className="md:h-9 md:w-9 w-7 h-7"/>
            <p className=" top-[100%] min-w-fit">Contact</p>
        </div>

      </div>
    </>
  )
}
