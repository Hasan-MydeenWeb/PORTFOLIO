import React, { useRef } from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { FaTelegramPlane } from "react-icons/fa";

export const Formsection = () => {
    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_n4pfjr1', 'template_z03sdu9', form.current, '46A8TCNz6lofAcKYj')
          .then((result) => {
            console.log("contactfaster");
              console.log(result.text);
              alert("Thankyou Mail sucessfully Send.");
              
          }, (error) => {
              console.log(error.text);
              
          });
    };
 
  return (
    <div >
        <form ref={form} onSubmit={sendEmail}>
        <div id='form-section'>
           
           
           <div className='gridlayout'>
               <div className='contacth1'> <h1>CONTACT ME</h1>  </div>
               <div className='flex-form'>
               <div className='form-subdiv2'>
                   <div className='contact-ifo'>
                       <h1>CONTACT INFO</h1>
                   </div>

                   <div className='main-email'  data-aos="fade-down-right" data-aos-duration="2000">
                       <div className='sub-email1'>
                       <MdEmail />
                       </div>
                       <div className='sub-email2'>
                           <h1>Email</h1>
                           <p> <a href='mailto:asanweb7799@gmail.com'>asanweb7799@gmail.com</a></p>
                       </div>
                   </div>

                   <div className='main-email'  data-aos="fade-down-right" data-aos-duration="2000">
                       <div className='sub-email1'>
                       <MdLocalPhone />
                       </div>
                       <div className='sub-email2'>
                           <h1>Phone</h1>
                           <p> <a href='phoneto:7397137684'> +91 7397137684</a></p>
                       </div>
                   </div>

                   <div className='main-email'  data-aos="fade-down-right" data-aos-duration="2000">
                       <div className='sub-email1'>
                       <FaLocationDot />
                       </div>
                       <div className='sub-email2'>
                           <h1>Address</h1>
                           <p>7/90,jailany street , Burkitmanagaram,<br></br>
                           Tirunelveli , Tamil Nadu</p>
                       </div>
                   </div>


                   <div className='social-profile' >
                       <div className='visite'>
                           <h1>Visite my social profile and get connected</h1>
                       </div>
                       <div className='profile-icon'>
                       <h1> <FaGithub className='FaGithub'/> </h1>
                      <h1> <FaLinkedinIn className='FaLinkedinIn' /> </h1>
                      <h1><FiTwitter className='FiTwitter'/></h1>
                      <h1><FaTelegramPlane className='FaInstagram'/></h1>

                       </div>

                   </div>


                   </div>


                   <div className='form-subdiv1'>
                       <div className='heading-hello'>
                           <h1>JUST SAY HELLO</h1>
                       </div>

                       <div className='input-name'>
                           <input required type="text" name="from_name" placeholder=' Your Name' />

                       </div>

                       <div className='input-name'>
                           <input required type="email" name="email_id" placeholder='Your Email' />

                       </div>
                       <div className='input-name'>
                           <input required type="text" name="phone_number" placeholder='Your Phone' />

                       </div>
                       <div className='input-name-1'>
                           <textarea  type="text"  name="message" placeholder='Your Message' />

                       </div>
                       <div className='form-btn'>
                           <button type='submit' >
                               Send Message
                           </button>

                       </div>


                   </div>
                   

               </div>

           </div>

       </div>

        </form>
        

    </div>
  )
}
