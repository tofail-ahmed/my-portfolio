import React, { useEffect } from 'react';
// import Body from '../../component/Body';
import kiddo from '../../assets/kiddo-valley-cartoon.png'
import excel from '../../assets/athletic-cartoon.png'
import cuisine from '../../assets/quisinne-cartoon.png'
import portfolio from '../../assets/portfolio-cartoon.png'
import Aos from 'aos';
import './Projects.css'

const Projects = () => {
      useEffect(() => {
            Aos.init({
                  once: false,
            });
      }, []);

      return (
            <div className='my-44'>
                  <h1 className=' glow-text section-name text-center my-8'>My developments</h1>
                  <div id='projects' className='grid md:grid-cols-2  gap-8 my-12 '>

                        <div className='bgcontainer'>
                              <div className=" boat card md:w-[500px]  text-slate-300 shadow-xl mx-auto bg-green-800" >
                                    <div >
                                          <a href="https://www.github.com" target='_blank'><figure><img src={kiddo} alt="Shoes" /></figure></a>
                                    </div>

                                    <div className='m-4 grid grid-cols-4'>
                                          <span data-aos='fade-up-left' data-aos-delay='700' data-aos-duration='700' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>HTML</span>
                                          <span data-aos='fade-up-right' data-aos-delay='800' data-aos-duration='800' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>CSS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='900' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>JS</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1000' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ResctJS</span>
                                          <span data-aos='flip-left' data-aos-delay='1100' data-aos-duration='1100' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Tailwind</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1200' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>DaisyUI</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1300' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Firebase</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1400' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>NodeJS</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='   1500' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ExpressJS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1600' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>MongoDB</span>
                                    </div>
                                    <div className='my-4 mx-auto'>
                                          <a href="https://kiddo-valley.web.app/" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Github</span></a>
                                          <a href="https://www.github.com" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Live Site</span></a>
                                    </div>
                              </div>
                        </div>

                        <div className='bgcontainer'>
                              <div className=" boat card md:w-[500px]  text-slate-300 shadow-xl mx-auto bg-green-800" >
                                    <div >
                                          <figure><img src={excel} alt="Shoes" /></figure>
                                    </div>

                                    <div className='m-4 grid grid-cols-4'>
                                          <span data-aos='fade-up-left' data-aos-delay='700' data-aos-duration='700' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>HTML</span>
                                          <span data-aos='fade-up-right' data-aos-delay='800' data-aos-duration='800' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>CSS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='900' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>JS</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1000' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ResctJS</span>
                                          <span data-aos='flip-left' data-aos-delay='1100' data-aos-duration='1100' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Tailwind</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1200' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>DaisyUI</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1300' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Firebase</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1400' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>NodeJS</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='   1500' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ExpressJS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1600' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>MongoDB</span>
                                    </div>
                                    <div className='my-4 mx-auto'>
                                          <a href="https://www.github.com" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Github</span></a>
                                          <a href="https://athletic-excel.web.app/" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Live Site</span></a>
                                    </div>
                              </div>
                        </div>

                        <div className='bgcontainer'>
                              <div className=" boat card md:w-[500px]  text-slate-300 shadow-xl mx-auto bg-green-800" >
                                    <div >
                                          <figure><img src={cuisine} alt="Shoes" /></figure>
                                    </div>

                                    <div className='m-4 grid grid-cols-4'>
                                          <span data-aos='fade-up-left' data-aos-delay='700' data-aos-duration='700' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>HTML</span>
                                          <span data-aos='fade-up-right' data-aos-delay='800' data-aos-duration='800' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>CSS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='900' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>JS</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1000' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ResctJS</span>
                                          <span data-aos='flip-left' data-aos-delay='1100' data-aos-duration='1100' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Tailwind</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1200' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>DaisyUI</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1300' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Firebase</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1400' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>NodeJS</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='   1500' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ExpressJS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1600' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>MongoDB</span>
                                    </div>
                                    <div className='my-4 mx-auto'>
                                          <a href="https://www.github.com" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Github</span></a>
                                          <a href="https://quisinne-de-french.web.app/" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Live Site</span></a>

                                    </div>
                              </div>
                        </div>

                        <div className='bgcontainer'>
                              <div className=" boat card md:w-[500px]  text-slate-300 shadow-xl mx-auto bg-green-800" >
                                    <div>
                                          <figure><img src={portfolio} alt="Shoes" /></figure>
                                    </div>

                                    <div className='m-4 grid grid-cols-4'>
                                          <span data-aos='fade-up-left' data-aos-delay='700' data-aos-duration='700' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>HTML</span>
                                          <span data-aos='fade-up-right' data-aos-delay='800' data-aos-duration='800' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>CSS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='900' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>JS</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1000' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ResctJS</span>
                                          <span data-aos='flip-left' data-aos-delay='1100' data-aos-duration='1100' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Tailwind</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='1200' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>DaisyUI</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1300' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>Firebase</span>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-duration='1400' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>NodeJS</span>
                                          <span data-aos='flip-right' data-aos-delay='1200' data-aos-duration='   1500' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>ExpressJS</span>
                                          <span data-aos='fade-down-left' data-aos-delay='900' data-aos-duration='1600' className='text-md text-green-900 bg-green-400 rounded-md font-bold w-[80px] text-center m-2 '>MongoDB</span>
                                    </div>
                                    <div className='my-4 mx-auto'>

                                          <a href="https://www.github.com" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Github</span></a>
                                          <a href="https://www.github.com" target='_blank'><span className='text-md text-lime-900 bg-lime-400 rounded-sm font-bold w-[80px] text-center m-2 '>Live Site</span></a>

                                    </div>
                              </div>
                        </div>



                  </div>
            </div>
      );
};

export default Projects;