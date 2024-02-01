import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


export const Navebar = () => {
    // const icon = document.querySelector(".icon");
    // const ul = document.querySelector("ul");
    
    
    // icon.addEventListener("click",( dd)=>{
    //   ul.classList.toggle("showData")
    
    //   if (ul.className ===  "showData") {
    //     document.getElementById("bar").className=" RxHamburgerMenu"
        
    //   }else{
    //     document.getElementById("bar").className="  RxHamburgerMenu"
    //   }
    // })
  return (
    <div>
         <div id='navesection'>
      <div className='gridlayout'>
        <nav>
       
          <div className='logo'>
             <a href='#form-section'><h1>Asan </h1></a> 
          </div>
         
            <ul>
           
              <li><a href='#aboutsection'>Home</a></li>
              <li><a href='#section-twobg'>About</a></li>
              <li><a href='#skils'>Skils</a></li>
              <li><a href='#potfolio-section'>Projects</a></li>
              <li><a href='#form-section'>Contact</a></li>
              
            </ul>
         
          <div className='icon'>
          < RxHamburgerMenu id='bar' />
         
            
          </div>
       

        </nav>
        
     

      </div>



    </div>
    </div>
  )
}
