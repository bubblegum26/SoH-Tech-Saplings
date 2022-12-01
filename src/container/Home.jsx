import React, { useState, useRef, useEffect } from 'react';
import home from '../assets/homeimage.jpg';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import shareVideo from '../assets/homepage.mp4'
import { RemoveScrollBar } from 'react-remove-scroll-bar';

const Home = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  }

  return (
    <>
      <Navbar />
      <RemoveScrollBar/>
      <div className="flex justify-start items-center flex-col h-screen w-screen">
        <div className=" relative w-screen h-screen">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 w-full" >
            <div class="mb-2 text-3xl font-bold text-white self-center ">" "</div>
            <div class="mb-2 text-3xl font-bold text-white self-center ">"To exist as a nation, to prosper as a state, to</div>
            <div class="mb-2 text-3xl font-bold text-white self-center ">live as a people, we must have trees, we must have trees."</div>
            <div class="mb-2 text-3xl font-bold text-white self-center ">-Thodre Roosevelt</div>
            <div class="mb-2 text-3xl font-bold text-white self-center ">" "</div>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-16 rounded mt-7 " onClick={routeChange}>
              Get Started
            </button>

          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
