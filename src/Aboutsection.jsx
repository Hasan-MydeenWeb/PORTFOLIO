import React from 'react'
import image1 from './image/Asanprofile.png'
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export const Aboutsection = () => {
const el = useRef(null);

useEffect(()=>{
  const typed = new Typed(el.current,{
    strings: ["Full Stack Web Devloper ! ","Web Designer !"],
    startDelay: 200,
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
    showCursor: true,
    cursorChar: "!",
    
    
  });

  return()=>{
    typed.destroy();
  };
},[]);

  
  return (
    <div id='aboutsection'>
        <div className='gridlayout'>
            <div className='mainnave'>
                <div className='contentsection'>
                    <div className='aboutcontant'>
                      <div className='typing-animation'>
                      <h1> Hi,I’am Asan </h1>
                     

                      </div>
                    
                    <h2><b> I'm </b> <span className='spananimation' ref={el}></span> </h2>
                    <p>A Frontend focused Web Developer building the Frontend
                    of Websites and Web Applications that leads to the
                    success of the overall product</p>

                    </div>

                    <div className='social-icon'>
                    <h1 ><a href='https://github.com/Hasan-MydeenWeb'  target="_blank"><FaGithub  className='FaGithub-1'/> </a> </h1>
                      <h1><a href='https://www.linkedin.com/in/asan-m-b455152a7/'  target="_blank"><FaLinkedinIn  className='FaGithub-1'/> </a> </h1>
                      <h1> <a href='https://www.linkedin.com/in/asan-m-b455152a7/'  target="_blank"><FiTwitter  className='FaGithub-1'/></a></h1>
                      <h1> <a href='https://www.linkedin.com/in/asan-m-b455152a7/'  target="_blank"><FaTelegramPlane  className='FaGithub-1'/></a></h1>

                    </div>
                    <div className='cv-button'>
                        <button><a href='#form-section'>CONTACT ME</a></button>
                    </div>


                </div>


                <div className="imgsection">
                <img src={image1}/>
                </div>

            </div>

        </div>

    </div>
  )
}
