import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


export const Nave = () => {
//   const icon = document.querySelector(".icon");
// const ul = document.querySelector("ul");


// icon.addEventListener("click",()=>{
//   ul.classList.toggle("showData")

//   if (ul.className ===  "showData") {
//     document.getElementById("bar").className=" RxHamburgerMenu"
    
//   }else{
//     document.getElementById("bar").className=" RxHamburgerMenu"
//   }
// })
  return (
    <div id='navesection'>
      <div className='gridlayout'>
        <nave>
        <div className='main-nave'>
          <div className='logo'>
             <a href='#form-section'><h1>Asan </h1></a> 
          </div>
          <div className='headers'>
            <ul>
           
              <li><a href='#aboutsection'>Home</a></li>
              <li><a href='#section-twobg'>About</a></li>
              <li><a href='#skils'>Skils</a></li>
              <li><a href='#potfolio-section'>Projects</a></li>
              <li><a href='#form-section'>Contact</a></li>
              
            </ul>
          </div>
          <div className='icon'>
          < RxHamburgerMenu id='bar' />
            
          </div>
        </div>

        </nave>
        
     

      </div>



    </div>
  )
}
