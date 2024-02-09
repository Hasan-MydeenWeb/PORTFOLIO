import React, { useEffect } from 'react'
import headphone from "./image/headphone potflio-img.png"
import cakeshop from "./image/cake shop.png"
import api from "./image/api screenshort.png"
import curd from "./image/curd form.png"
import bootstrapsingle from "./image/bootstrap single page.png"
import express from "./image/scaner expres.png"
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Potfoliosection = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    
    <div id='potfolio-section'>
        <div className='gridlayout'>
            <div className='my-work'>
                <h1>MY WORK</h1>
                <h2>RECENT PROJECT</h2>
            </div>
            
            <div className='potfolio-mainflex'>

                <div className='boder-box' data-aos="fade-up-right" data-aos-duration="2000">
                    <div className='img-card'>
                        <img alt='Headphone' src={headphone} />

                    </div>
                    <div className='pot-content'>
                    <h1>Responsive Headphone Website using HTML and CSS</h1>

                        <div className='btn-sorce'>
                        <a href="https://hasan-mydeenweb.github.io/headphone-multypage/" target="_blank"><button type="submit">View Demo</button></a>
                        <a href="https://github.com/Hasan-MydeenWeb/headphone-multypage" target="_blank"><button type="submit">Source Code</button></a>
                        </div>
                        
                    </div>

                </div>


                <div className='boder-box'  data-aos="fade-up" data-aos-duration="2000">
                    <div className='img-card'>
                        <img alt='CakeShop' src={cakeshop} />

                    </div>
                    <div className='pot-content'>
                        <h1>Responsive Cakeshop Website using HTML and CSS</h1>
                        <div className='btn-sorce'>
                        <a href="https://hasan-mydeenweb.github.io/cake-website/" target="_blank"><button type="submit">View Demo</button></a>
                        <a href="https://github.com/Hasan-MydeenWeb/cake-website" target="_blank"><button type="submit">Source Code</button></a>
                        </div>
                    </div>

                </div>


                <div className='boder-box' data-aos="fade-up-left" data-aos-duration="2000">
                    <div className='img-card'>
                        <img alt='Aoi' src={api} />

                    </div>
                    <div className='pot-content'>
                        <h1>Responsive Movie-OTT Platform Website using HTML and CSS Javascript</h1>
                        <div className='btn-sorce'>
                        <a href="https://hasan-mydeenweb.github.io/OTT-Api/" target="_blank"><button type="submit">View Demo</button></a>
                        <a href="https://github.com/Hasan-MydeenWeb/OTT-Api/tree/master/images" target="_blank" ><button type="submit">Source Code</button></a>
                        </div>
                    </div>
                </div>


                <div className='boder-box' data-aos="fade-up-right" data-aos-duration="2000">
                    <div className='img-card'>
                        <img alt='Curd' src={curd}  width={400}/>

                    </div>
                    <div className='pot-content'>
                        <h1>Responsive CURD Form using HTML and CSS Javascript</h1>
                        <div className='btn-sorce'>
                        <a href="https://hasan-mydeenweb.github.io/crudform/" target="_blank"><button type="submit">View Demo</button></a>
                        <a href="https://github.com/Hasan-MydeenWeb/crudform" target="_blank"><button type="submit">Source Code</button></a>
                        </div>
                    </div>

                </div>



                <div className='boder-box'  data-aos="fade-up" data-aos-duration="2000">
                    <div className='img-card'>
                        <img alt='Bootatrap' src={bootstrapsingle} />

                    </div>
                    <div className='pot-content'>
                        <h1>Room Booking Website using HTML, CSS and Boostrap</h1>
                        <div className='btn-sorce'>
                        <a href=" https://hasan-mydeenweb.github.io/Ressortsinglepage/" target="_blank"><button type="submit">View Demo</button></a>
                        <a href="https://github.com/Hasan-MydeenWeb/Ressortsinglepage" target="_blank"><button type="submit">Source Code</button></a>
                        </div>
                    </div>

                </div>


                <div className='boder-box' data-aos="fade-up-left" data-aos-duration="2000">
                    <div className='img-card'>
                        <img alt='Express' src={express} />

                    </div>
                    <div className='pot-content'>
                        <h1>Responsive QR-Code Generator using Nodejs and ExpressJs </h1>
                        <div className='btn-sorce'>
                        <a href="https://github.com/Hasan-MydeenWeb" target="_blank"><button type="submit">View Demo</button></a>
                        <a href="https://github.com/Hasan-MydeenWeb" target="_blank"><button type="submit">Source Code</button></a>
                        </div>
                    </div>
                </div>



            </div>

        </div>


       
        
    </div>
  )
}
