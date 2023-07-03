import React, { useEffect, useState } from 'react';
// import Body from '../../component/Body';
import HoverUnderlineText from '../../component/HoverUnderlineText/HoverUnderlineText';
import image from '../../assets/developer-2-bgless.png';
import { FaPhoneAlt } from 'react-icons/fa';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Test from '../test';
import About from '../About/About';
import Resume from '../Resume/Resume';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

const Home = () => {



      return (
            <div id='home' className='my-36 mt-42 boat' style={{ zIndex: 10 }}>
                  <div className="grid md:grid-cols-2">
                        <div className='flex  items-center'>
                              <div className='text-6xl text-green-400 flex flex-col justify-start me-8 my-12 '>



                                    <div ><Link className='' to="https://www.github.com"><AiOutlineGithub className=''></AiOutlineGithub></Link> </div>



                                    <div className=''> <AiOutlineMail></AiOutlineMail></div>


                                    <div className=''> <AiFillLinkedin></AiFillLinkedin></div>
                                    
                              </div>
                              <Test></Test>

                        </div>


                        <div className='mx-auto  image-container'>
                              <img data-aos='slide-left' data-aos-delay='2000' data-aos-duration='1500' className='' src={image} alt='' />
                        </div>
                  </div>

                  
            </div>
      );
};

export default Home;
