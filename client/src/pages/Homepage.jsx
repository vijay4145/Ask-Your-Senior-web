import React, { useState } from "react";
import Lottie from "lottie-react";
import discussion_icon from "../assets/discussion.json";
import "../styles/Homepage.css";
import { SearchBox } from "../components/SearchBox";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";
import { MainForm } from "../components/MainForm";

export const Homepage = () => {
  const {COLLEGE_NAME} = useSelector((state)=>state.BookSearchSlice);
  return (
    <>
      {COLLEGE_NAME === null && 
      <>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-xl">
            <MainForm/>
          </div>
        </div>
      </> }
        <section  className={`z-0 ${COLLEGE_NAME === null ? 'blur-md':''}`}>
        <div className="background-gradient  rounded-b-3xl flex flex-col-reverse md:grid md:grid-cols-2 z-0 shadow-lg pb-20 md:pb-5">
          <div className="flex gap-3 justify-center p-4 flex-col">
            <h1 className="text-white text-5xl font-bold">ᴀꜱᴋ ʏᴏᴜʀ ꜱᴇɴɪᴏʀ</h1>
            <div className="flex flex-col text-white">
              <h5>- Collab In Project With Seniors</h5>
              <h5>- Buy Old academics books of Seniors</h5>
              <h5>- Build Connection & grow more</h5>
            </div>
            <SearchBox />
          </div>
          <div className="flex justify-center">
            <Lottie
              className="h-auto md:w-96 w-80"
              animationData={discussion_icon}
            />
          </div>
        </div>
        <Navbar />
        <br />
        <Outlet />
      </section>
    </>
  );
};
