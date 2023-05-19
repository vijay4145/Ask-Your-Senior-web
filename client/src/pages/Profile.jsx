import React, { useEffect, useState } from "react";
import { Profile1 } from '../components/Profile_Page_Components/Profile1';
import { Activities } from '../components/Profile_Page_Components/Activities';
import { LinksSection } from '../components/Profile_Page_Components/LinksSection';
import { UserDetails } from '../components/Profile_Page_Components/UserDetails';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { Link, useLocation } from "react-router-dom";
import { getUserDetails, getUserDetailsUsingid, postNewUser } from "../http";
import Lottie from 'lottie-react';
import loading_animation from '../assets/loading.json';


export const Profile = () => {
  const location = useLocation();
  const [profiledata, setProfiledata] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const auth = getAuth();

  const signOutF = ()=>{
    signOut(auth);
  }


  useEffect(() => {
    const path = location.pathname.split('/').slice(-1);
    if(location.pathname.split('/')[1] === 'profile'){
      onAuthStateChanged(getAuth(), async(user)=>{
        if(user !== null && location.pathname.split('/')[1] === 'profile'){
          setIsLogged(true);
          getUserDetails().then(res=>{
            if(res.data === null){
              const userName = user.displayName;
              const userEmail = user.email;
              postNewUser({
                USER_NAME : userName,
                USER_EMAIL : userEmail
              })

              setProfiledata({
                USER_NAME : user.displayName,
                USER_EMAIL : user.email,
                REPOSITORIES : [],
                BOOKS : [],
                LINKS : []
              })
            }else
            setProfiledata(res.data);
          })
        }
        else if(user === null) setIsLogged(false);
      })
    }else{
      getUserDetailsUsingid(path).then(res=>{
        setProfiledata(res.data);
      })
    }

  }, [])
  return (
    <>
      {isLogged && <section className="bg-gray-100">
        <section id="top-heading" className="p-4">
          <div className="pt-4 pb-4 px-8 bg-white rounded-xl items-center shadow-sm flex justify-between">
            <div>
              <span className="text-blue-600">
                <Link to="/">Home /</Link>{" "}
              </span>{" "}
              User Profile
            </div>
            <div>
              <button onClick={signOutF} className="bg-red-400 text-white p-2 rounded-lg hover:shadow-lg">Sign Out</button>
            </div>
          </div>
        </section>

        {
          profiledata === null && <Lottie animationData={loading_animation} className="h-52 w-52"/>
        }

        {profiledata && profiledata !== null && <section
          id="information-section"
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-4"
        >
          <div id="profile" className="flex bg-white rounded-lg p-3 shadow-lg">
            <Profile1 data={profiledata} />
          </div>
          <div
            id="user-details"
            className="bg-white rounded-lg p-3 md:col-span-2 "
          >
            <UserDetails data={profiledata} />
          </div>
          {/* <div id="user-link" className="bg-white rounded-lg p-3 ">
            <LinksSection data={profiledata} />
          </div> */}
          <div
            id="user-activity"
            className="bg-white rounded-lg p-3 md:col-span-3"
          >
            <Activities data={profiledata} />
          </div>
        </section>}

        <br />
        <br />
      </section>}
    </>
  );
};
