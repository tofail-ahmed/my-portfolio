import React, { useEffect } from 'react';

import { BiGitMerge, BiLogoBootstrap, BiLogoCss3, BiLogoFigma, BiLogoFirebase, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { SiDaisyui } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
      useEffect(() => {
            AOS.init({

            });
      }, []);
      return (
            <div id='skills' className='my-24'>
                  {/* <Body text={"This is skills"}></Body> */}
                  <div className=' boat grid md:grid-cols-3 mx-auto '>
                        <div data-aos='zoom-in-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoHtml5 />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='zoom-in-down' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoCss3 />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='zoom-in-right' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoJavascript />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='fade-right' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoReact />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='flip-down' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoBootstrap />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='fade-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoTailwindCss />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoHtml5 />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoFigma />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoMongodb />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoGithub />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiGitMerge />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoFirebase />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <BiLogoNodejs />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <TbBrandVscode />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>
                        <div data-aos='slide-left' data-aos-delay='700' data-aos-once="false" data-aos-duration='1500' className='  '>
                              <div className='relative'>
                                    <div className='text-[150px] m-6 z-30 flex justify-center items-center text-green-600'>
                                          <SiDaisyui />
                                    </div>
                                    <div className='progress-bar'>
                                          <div className='progress' style={{ width: `${50}%` }}></div>
                                          {/* <div className='progress-text'>Intermediate</div> */}
                                    </div>
                              </div>
                        </div>

                  </div>





            </div>

      );
};

export default Skills;