import React, { useEffect, useState } from 'react'

export const SearchBox = () => {
    const [value, setValue] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const college_param = searchParams.get('college');
        if(college_param)
          setValue(college_param);
      }, [])

  return (
    <>

<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type='text ' id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g: Terna Engineering College" name='college' value={value} onChange={(e)=>setValue(e.target.value)} required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        
        <div className='absolute bg-white w-full  py-2 px-5 flex-col rounded-b-lg shadow-md max-h-40 overflow-y-scroll hidden'>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>
            <p className='hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-md'>Hello mini</p>

        </div>
    </div>
</form>


    </>
  )
}
