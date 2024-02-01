import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footersection = () => {
    const currMonth = new Date().toLocaleString([], {
        month: 'long',
      });
    const curentdate= new Date().getDate();
    const curentyear = new Date().getFullYear();
    
  return (
    <div>
        <div id='footersection'>
            <div className='gridlayout'>
                <div className='footer-copyright'>
                    <div className='footer-logo'>
                        <h1 color='black' className='color'>ASAN</h1>

                    </div>


                <div className='headers-foot'>
                <ul>
                   <li><a href='#aboutsection'>Home</a></li>
                   <li><a href='#section-twobg'>About</a></li>
                   <li><a href='#skils'>Skils</a></li>
                   <li><a href='#potfolio-section'>Projects</a></li>
                   <li><a href='#form-section'>Contact</a></li>
                </ul>
            </div>

                <div className='social-icon2-foot'>
                      <h1><a href='https://github.com/Hasan-MydeenWeb'  target="_blank"><FaGithub /> </a> </h1>
                      <h1><a href='https://www.linkedin.com/in/asan-m-b455152a7/'  target="_blank"><FaLinkedinIn/> </a> </h1>
                      <h1> <a href='https://www.linkedin.com/in/asan-m-b455152a7/'  target="_blank"><FiTwitter/></a></h1>
                      <h1> <a href='https://www.linkedin.com/in/asan-m-b455152a7/'  target="_blank"><FaTelegramPlane /></a></h1>

                    </div>


                    <div className='subfooter1'>
                    <p className='copyright'>@Copyright in <span> {curentyear}. </span>Made by ASAN</p>
                    </div>

                    

                </div>





            {/* <div className='main-footer'>
                <div className='sub-footer1'>
                    <div className='logo-footer'>
                    <h1>Asan</h1>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and
                        Web Applications that leads to the success of the overall product</p>

                    </div>

                </div>
                <div className='sub-footer2'>
                    <div className='social'>
                        <h1>SOCIAL</h1>
                        
                    </div>
                    <div className='social-icon2'>
                      <h1> <FaGithub className='FaGithub-1'/> </h1>
                      <h1><FiTwitter className='FiTwitter-1'/></h1>
                      <h1> <FaLinkedinIn className='FaLinkedinIn-1' /> </h1>
                      <h1><FaInstagram  className='FaInstagram-1'/></h1>

                    </div>


                </div>
               

            </div> */}

            </div>
            
            

        </div>

    </div>
  )
}
