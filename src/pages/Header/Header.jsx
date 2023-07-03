import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ActiveLink from '../../component/ActiveLink/ActiveLink';
import logo from '../../assets/bgless-shadow.png';
import HoverUnderlineText from '../../component/HoverUnderlineText/HoverUnderlineText';

const Header = () => {
      useEffect(() => {
            AOS.init({
                  once: false,
            });
      }, []);

      return (
            <div className='text-green-300 mb-24'>
                  <div className='navbar bg-green-800 -mx-24  z-40  fixed top-0'>
                        <div className='navbar-start'>
                              <div className='dropdown'>
                                    <label tabIndex={0} className='btn btn-ghost lg:hidden text-green-400'>
                                          <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='h-5 w-5'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                          >
                                                <path
                                                      strokeLinecap='round'
                                                      strokeLinejoin='round'
                                                      strokeWidth='2'
                                                      d='M4 6h16M4 12h8m-8 6h16'
                                                />
                                          </svg>
                                    </label>
                                    <ul className='menu menu-sm dropdown-content mt-3  p-2 shadow bg-slate-500 z-10 rounded-box w-52'>
                                          <li  data-aos='fade-up-left' data-aos-delay='700' data-aos-duration='1500'>
                                                <a href="#home"> < ><HoverUnderlineText text={"Home"}></HoverUnderlineText></></a>
                                          </li>
                                          <li data-aos='fade-up-right' data-aos-delay='800' data-aos-duration='1500'>
                                                <a href="#about"> <>About</></a>
                                          </li>
                                          <li data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1500'>
                                                <a href="#skills">< >Skills</></a>
                                          </li>
                                          <li data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1500'>
                                                <a href="#projects">< >Projects</></a>
                                          </li>
                                          <li data-aos='flip-left' data-aos-delay='1100' data-aos-duration='1500'>
                                                <a href="#resume">  <>Resume</></a>
                                          </li>
                                          <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                                <a href="#contacts">Contacts</a>
                                          </li>
                                    </ul>
                              </div>
                              <img className='w-[200px] boat' src={logo} alt='' data-aos='zoom-in-right' data-aos-duration='1500' />
                        </div>
                        <div className='navbar-center'>
                              <ul className='menu menu-horizontal px-1'>
                                    <li  data-aos='fade-up-left' data-aos-delay='700' data-aos-duration='1500'>
                                          <a href="#home"> < ><HoverUnderlineText text={"Home"}></HoverUnderlineText></></a>
                                    </li>
                                    <li data-aos='fade-up-right' data-aos-delay='800' data-aos-duration='1500'>
                                          <a href="#skills"> < ><HoverUnderlineText text={"Skills"}></HoverUnderlineText></></a>
                                    </li>
                                    <li data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1500'>
                                          <a href="#resume"> < ><HoverUnderlineText text={"Resume"}></HoverUnderlineText></></a>
                                    </li>
                                    <li data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1500'>
                                          <a href="#projects"> < ><HoverUnderlineText text={"Projects"}></HoverUnderlineText></></a>
                                    </li>
                                    <li data-aos='flip-left' data-aos-delay='1100' data-aos-duration='1500'>
                                          <a href="#contacts"> < ><HoverUnderlineText text={"Contacts"}></HoverUnderlineText></></a>
                                    </li>
                                    <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                          <a href="#about"> < ><HoverUnderlineText text={"About"}></HoverUnderlineText></></a>
                                    </li>
                              </ul>
                        </div>

                  </div>
            </div>
      );
};

export default Header;
