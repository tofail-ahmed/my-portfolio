import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css'
import logo from '../../assets/bgless-shadow.png';
import { Link } from 'react-scroll';

const Header = () => {
      useEffect(() => {
            AOS.init({
                  once: false,
            });
      }, []);

      return (
            <div className='text-green-300 mb-24 '>
                  <div className='navbar  bg-green-800 -mx-24  z-40  fixed top-0'>
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
                                    <ul className='menu menu-sm dropdown-content mt-3  p-2 shadow bg-slate-500 z-10 rounded-box w-52 absolute'>
                                          <li>
                                                <Link

                                                      activeClass="active"
                                                      to="home"
                                                      spy={true}
                                                      smooth={true}
                                                      offset={-200}
                                                      duration={500}
                                                >

                                                      Home

                                                </Link>
                                          </li>
                                          <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                                <Link
                                                      activeClass="active"
                                                      to="resume"
                                                      spy={true}
                                                      smooth={true}
                                                      offset={-200}
                                                      duration={500}

                                                >
                                                      Resume
                                                </Link>
                                          </li>
                                          <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                                <Link
                                                      activeClass="active"
                                                      to="about"
                                                      spy={true}
                                                      smooth={true}
                                                      offset={-200}
                                                      duration={500}
                                                >
                                                      About
                                                </Link>
                                          </li>
                                          <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                                <Link
                                                      activeClass="active"
                                                      to="skills"
                                                      spy={true}
                                                      smooth={true}
                                                      offset={-200}
                                                      duration={500}
                                                >
                                                      Skills
                                                </Link>
                                          </li>
                                          <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                                <Link
                                                      activeClass="active"
                                                      to="projects"
                                                      spy={true}
                                                      smooth={true}
                                                      offset={-200}
                                                      duration={500}
                                                >
                                                      Projects
                                                </Link>
                                          </li>

                                          <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                                <Link
                                                      activeClass="active"
                                                      to="contacts"
                                                      spy={true}
                                                      smooth={true}
                                                      offset={-100}
                                                      duration={500}
                                                >
                                                      Contacts
                                                </Link>
                                          </li>
                                    </ul>
                              </div>
                              <img className='w-[200px] boat' src={logo} alt='' data-aos='zoom-in-right' data-aos-duration='1500' />
                        </div>
                        <div className='navbar-center'>
                              <ul className='menu menu-horizontal px-1 absolute '>

                                    <li>
                                          <Link

                                                activeClass="active"
                                                to="home"
                                                spy={true}
                                                smooth={true}
                                                offset={-200}
                                                duration={500}
                                          >

                                                Home

                                          </Link>
                                    </li>
                                    <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                          <Link
                                                activeClass="active"
                                                to="resume"
                                                spy={true}
                                                smooth={true}
                                                offset={-200}
                                                duration={500}

                                          >
                                                Resume
                                          </Link>
                                    </li>
                                    <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                          <Link
                                                activeClass="active"
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-200}
                                                duration={500}
                                          >
                                                About
                                          </Link>
                                    </li>
                                    <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                          <Link
                                                activeClass="active"
                                                to="skills"
                                                spy={true}
                                                smooth={true}
                                                offset={-200}
                                                duration={500}
                                          >
                                                Skills
                                          </Link>
                                    </li>
                                    <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                          <Link
                                                activeClass="active"
                                                to="projects"
                                                spy={true}
                                                smooth={true}
                                                offset={-200}
                                                duration={500}
                                          >
                                                Projects
                                          </Link>
                                    </li>

                                    <li data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1500'>
                                          <Link
                                                activeClass="active"
                                                to="contacts"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                          >
                                                Contacts
                                          </Link>
                                    </li>





                              </ul>
                        </div>

                  </div>
            </div>
      );
};

export default Header;
