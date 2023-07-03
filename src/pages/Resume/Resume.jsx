import React, { useEffect } from 'react';
// import Body from '../../component/Body';
import resume from "../../assets/Sayem-resume-22623 (1).pdf";
import HoverUnderlineText from '../../component/HoverUnderlineText/HoverUnderlineText';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import './Resume.css'

const Resume = () => {
      useEffect(() => {
            AOS.init({
                  once: true, // Initialize AOS only once
            });
      }, []);
     
      return (
            <div id='resume' className=' align-middle boat  '>
                  <div className='flex justify-center items-center gap-12 my-24'>
                       
                        <div>
                              <div>
                                    <a href={resume} download style={styles.downloadLink}>
                                          <span data-aos='fade-down-right' data-aos-delay='1000' data-aos-once="false" data-aos-duration='1500' className='flex items-center justify-start gap-4 text-xl text-green-500' ><FaDownload></FaDownload> <HoverUnderlineText text={"Download Resume"}></HoverUnderlineText></span>
                                    </a >
                              </div>

                              <div>
                                    <a
                                          href="https://drive.google.com/file/d/1zc7bbk_x8gSqTisRW5EZnMnfGw1V64-8/view?usp=sharing"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={styles.googleDriveLink}

                                    >
                                          <span data-aos='fade-down-left' data-aos-once="false" data-aos-delay='1000' data-aos-duration='1500' className='flex items-center gap-4 text-xl text-green-500 justify-start my-12' ><FaExternalLinkAlt></FaExternalLinkAlt> <HoverUnderlineText text={"View Resume on Drive "}></HoverUnderlineText> </span>

                                    </a>
                              </div>
                        </div>
                  </div>

                  {/* <object
                        className='mx-auto'
                        data={resume}
                        type="application/pdf"
                        style={styles.pdfObject}
                  >
                        <p >Unable to display PDF. Please <a className='w-[100vw]' href={resume}>download</a> instead.</p>
                  </object> */}


            </div>
      );
};

const styles = {
      pdfObject: {
            width: '70%',
            height: 'calc(100vh)', // Adjust the value as needed
            border: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      downloadLink: {
            display: 'block',
            marginTop: '1rem',
            textDecoration: 'none',
            color: 'blue',
      },
      googleDriveLink: {
            display: 'block',
            textDecoration: 'none',
            color: 'blue',
      },
};

export default Resume;
