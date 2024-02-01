import React from 'react'
import program from './image/program-removebg-preview.png'

export const Aboutme = () => {
  return (
    <div id='section-twobg'>
        <div className='gridlayout'>
        <div className='main-two'>
            <div className='img-about'>
                <img src={program}/>

            </div>
            <div className='about-content'>
                <h1>About Me</h1>
                <h2>Full Stack Web Devloper </h2>
                <p>I'm a Frontend Web Developer building the Front-end of
                Websites and Web Applications that leads to the success
                of the overall product. Check out some of my work in the
                Projects section.</p>  
                <p className='pstyle'>I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help
                other people of the Dev Community. Feel free to Connect
                or Follow me on my where I post useful content
                related to Web Development and Programming</p>  

                <div className='contact-me'>
                    <button> <a href='https://drive.google.com/file/d/1dTP2wmw4QRu4Xal64fHF5zfR3laMWMAw/view?usp=sharing'>DOWNLOAD CV</a></button>
                </div>               


            </div>
            

        </div>

        </div>
         
       
    </div>
  )
}
