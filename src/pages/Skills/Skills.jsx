import React, { useEffect } from 'react';

import {
  BiGitMerge,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiDaisyui } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div id="skills" className="my-24">
      {/* <Body text={"This is skills"}></Body> */}
      <div className=" boat grid md:grid-cols-3 lg:ms-32  ">
        <div
          data-aos="zoom-in-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
         
          <div className=" ">
            <div className="text-[150px]  text-green-600">
              <BiLogoHtml5 ></BiLogoHtml5>
            
            </div>
            {/* <div className="progress-bar ">
              <div className="progress" style={{ width: `${90}%` }}></div>
              <div className="progress-text  text-green-500 text-bold">90%</div>
            </div> */}
          </div>
         
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoCss3 />
            </div>
            
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoJavascript />
            </div>
          
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoTypescript />
            </div>
           
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoReact />
            </div>
          
          </div>
        </div>
        <div
          data-aos="flip-down"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoBootstrap />
            </div>
          
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoTailwindCss />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoHtml5 />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoFigma />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoMongodb />
            </div>
          
          </div>
          
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
             {/* <img className='w-[250px] text-green-800' src="/src/assets/mongoose.png" alt="" /> */}
             <span className='text-[70px] font-semibold mb-4'>mongoose</span>
            </div>
           
          </div>
          
        </div>
        
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoGithub />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiGitMerge />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoFirebase />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <BiLogoNodejs />
            </div>
          
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <TbBrandVscode />
            </div>
           
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-once="false"
          data-aos-duration="1500"
          className="  "
        >
          <div className="relative">
            <div className="text-[150px]  text-green-600">
              <SiDaisyui />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;