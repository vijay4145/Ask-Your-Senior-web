import React, { useEffect, useState } from 'react'
import { Filters } from '../components/Books/Filters'
import { NotFound } from '../components/NotFound'
import { BookList } from '../components/Books/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { setBookSearchSlice } from '../store/BookSearchSlice';
import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Books = () => {
  const [college, setCollege] = useState(null);
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const  { COLLEGE_NAME, BRANCH, SEMESTER } = useSelector(state=>state.BookSearchSlice);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const college_param = searchParams.get('college');
    const branch_param = searchParams.get('branch');
    const sem_param = searchParams.get('sem');
    if(college_param) {
      setCollege(college_param);
      let json = {COLLEGE_NAME: college_param}
      dispatch(setBookSearchSlice(json));
    }else if(COLLEGE_NAME && COLLEGE_NAME !== null){
      setCollege(COLLEGE_NAME);
    }

    if(branch_param) {
      setBranch(branch_param);
      let json = {BRANCH: branch_param}
      dispatch(setBookSearchSlice(json))
    }else if(BRANCH && BRANCH !== null){
      setBranch(BRANCH)
    }

    if(sem_param) {
      setSemester(sem_param);
      let json = {SEMESTER: sem_param}
      dispatch(setBookSearchSlice(json));
    }else if(SEMESTER && SEMESTER !== null){
      setSemester(SEMESTER);
    }
  }, [])

  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user !== null) {
        setIsLoggedIn(true);
      }
    });
  }, [])


  
  return (
    <>
    {
      college &&  college !== null &&
      (
        <>
         <Filters semester={semester} branch={branch} college_param={college}/>
        </>
      )
    }
    {isLoggedIn && <Link to='/addBook' className='mx-3 flex items-center gap-1 bg-blue-400 hover:cursor-pointer hover:bg-blue-500 px-3 py-2 rounded-lg text-white max-w-fit'>
      <MdLibraryAdd className='h-5 w-5'/>
      <button >Add Book</button>
    </Link>
    }
    {
      (college && semester && college !== null && semester !== null && 
        <BookList college={college} semester={semester} branch={branch}/>
      )
    }
    {
      college !== null && semester === null && <NotFound msg="Please Select Semetester And Branch"/>
    }
    {
      college === null && <NotFound msg="Please Enter Your College Name in Search Box"/>
    }
    </>
  )
}
