import React from 'react'
import figma from './image/figma-icon-2048x2048-lvgft610.png'
import wordpress from './image/wordpress.png'
import bootstrap from './image/bootstrap-img.png'
import html from './image/html-img.png'
import css from './image/css-img.png'
import jquary from './image/jquary-img.png'
import photoshop from './image/photoshope.png'
import js from './image/js-img.png'
import mangodb from './image/mongodb-img.png'
import nodejs from "./image/node-js-icon-2.jpg"
import github from "./image/GitHub-white.png"
import react from './image/react-img.png'

export const Sectionskils = () => {
  return (
    <div id='skils'>
        <div className='gridlayout'>
            <div className='skils-section'>
                <div className='skils-contant'>
                    <h1>Eaducation & Skills</h1>
                    <div className='ipad-flex'>
                      
                    <div className='white-div' data-aos="flip-up">
                      <h2>Web Design & Development</h2>
                      <p>Web D School</p>
                      <p>( 2023 )</p>
                    </div>

                    <div className='white-div' data-aos="flip-up">
                      <h2>B.Sc ( Information Tecnology )</h2>
                      <p>Sadakathullah Appa College</p>
                      <p>(2023)</p>
                    </div>

                    <div className='white-div' data-aos="flip-up">
                      <h2>SSLC</h2>
                      <p>Govt HR SEC School</p>
                      <p>(2017)</p>
                    </div>
                    
                    <div className='white-div' data-aos="flip-up">
                      <h2>HSC</h2>
                      <p>Govt HR SEC School</p>
                      <p>(2019)</p>
                    </div>

                    </div>

                </div>




  <div className='skils-card'>



            <div className='flex'>
                    
                  <div className='main-card'  data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img-1'>
                           <img  alt='figma' src={figma}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='fig-h1'>Figma</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img   alt='wordpress' src={wordpress}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='wor-h1'>Wordpress</h1>
                         </div>
                    </div>
                    
                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img   alt='bootstrap' src={bootstrap}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>Bootstrap</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img alt='html' src={html}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>HTML</h1>
                         </div>
                    </div>

                  
            </div>



            <div className='secflex'>
                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img  alt='css' src={css}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>CSS</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img  alt='jquary' src={jquary}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>Jquary</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img alt='photoshop' src={photoshop}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>Photoshop</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img alt='js' src={js}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>JS</h1>
                         </div>
                    </div>
            </div>


            <div className='threflex'>
                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img  alt='mongodb' src={mangodb}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>Mongodb</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img  alt='React' src={react}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>React</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img alt='node' src={nodejs}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>NodeJS</h1>
                         </div>
                    </div>

                    <div className='main-card' data-aos="flip-left" data-aos-duration="1000">
                         <div className='card-img'>
                           <img  alt='GitHub' src={github}/>
                         </div>
                         
                         <div className='card-txt'>
                            <h1 className='boot-h1'>GitHub</h1>
                         </div>
                    </div>
            </div>
                    
  </div>


                
            </div>

        </div>
       

    </div>
  )
}
