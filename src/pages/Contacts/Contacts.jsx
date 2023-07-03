import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import HoverUnderlineText from '../../component/HoverUnderlineText/HoverUnderlineText';
import './Contacts.css'


const Contacts = () => {
      useEffect(() => {
            Aos.init({

            });
      }, []);
      const form = useRef();

      const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_lkdnylf', 'template_2bxzc6d', form.current, 'gpKUTUOY5ZeqxAti3')
                  .then((result) => {
                        console.log(result);
                        if (result.status === 200) {
                              alert('message sent successfully')
                              e.target.reset();
                        }

                        alert('messaeg sent')
                  }, (error) => {
                        console.log(error.text);
                  });
      };

      return (
            <div className='my-24'>

                  <h1 className=' glow-text section-name text-center'>Drop Us a Line</h1>
                  <div id='contacts' className='my-24 md:grid grid-cols-2'>
                        <div className='text-6xl text-green-400 flex flex-col items-center justify-center align-middle my-24 boat'>
                              <div className="flex justify-center items-center -mt-12 ">
                                    <div className=''><Link to="https://www.github.com"><AiOutlineGithub></AiOutlineGithub></Link> </div>
                                    <div className=''> <AiOutlineMail></AiOutlineMail></div>
                                    <div className=''> <AiFillLinkedin></AiFillLinkedin></div>
                              </div>
                              <div className='flex items-center '>
                                    <div className='text-xl text-green-600 me-4'>
                                          <FaPhoneAlt></FaPhoneAlt>
                                    </div>
                                    <HoverUnderlineText text={'Phone: +8801846283805'}></HoverUnderlineText>
                              </div>
                        </div>
                        <form className='flex flex-col w-[80%] mx-auto boat' ref={form} onSubmit={sendEmail}>
                              <label data-aos='fade-right' data-aos-delay='900' data-aos-once="false" data-aos-duration='1500' className='text-white'>Name</label>

                              <input data-aos='fade-left' data-aos-delay='1000' data-aos-once="false" data-aos-duration='1400' className='p-2 rounded-xl  bg-green-300 text-green-900 border-transparent font-bold text-xl' type="text" name="user_name" />

                              <label data-aos='fade-left' data-aos-delay='1100' data-aos-once="false" data-aos-duration='1300' className='text-white'>Email</label>

                              <input data-aos='fade-right' data-aos-delay='1200' data-aos-once="false" data-aos-duration='1200' className='p-2 rounded-xl  bg-green-300 text-green-900 font-bold text-xl' type="email" name="user_email" />

                              <label data-aos='zoom-in' data-aos-delay='1300' data-aos-once="false" data-aos-duration='1100' className='text-white'>Message</label>

                              <textarea data-aos='fade-left' data-aos-delay='1400' data-aos-once="false" data-aos-duration='1000' className='p-2 rounded-xl bg-green-300 text-green-900 font-bold text-xl' name="message" />

                              <input data-aos='fade-right' data-aos-delay='1500' data-aos-once="false" data-aos-duration='900' className='btn btn-outline text-green-200 w-[120px] my-8' type="submit" value="Send Message" />
                        </form>
                  </div>
            </div>
      );
};

export default Contacts;
