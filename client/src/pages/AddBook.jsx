import React, { useState } from 'react'
import '../styles/Addbook.css';
import { TopBar } from '../components/Books/AddBook/TopBar';
import { AddBookForm } from '../components/Books/AddBook/AddBookForm';
import { AddBookForm2 } from '../components/Books/AddBook/AddBookForm2';
import { AddBookForm3 } from '../components/Books/AddBook/AddBookForm3';
import "aos/dist/aos.css";
import AOS from "aos";


export const AddBook = () => {
  const [selectedForm, setSelectedForm] = useState(0);
  AOS.init({
    offset: 20
  });
  return (
    <>
    <div className='bg min-w-fit min-h-screen flex items-center justify-center'>
      <div className='flex flex-col bg-white md:p-6 p-3 rounded-lg shadow-2xl gap-5 overflow-hidden'>
        <TopBar selectedForm={selectedForm} setSelectedForm={setSelectedForm}/>
          {selectedForm === 0 && <AddBookForm setSelectedForm={setSelectedForm}/>}
          {selectedForm === 1 && <AddBookForm2 setSelectedForm={setSelectedForm}/>}
          {selectedForm === 2 && <AddBookForm3 />}
      </div>
    </div>
    </>
  )
}
