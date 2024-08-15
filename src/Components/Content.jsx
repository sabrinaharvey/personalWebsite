import React from 'react'
import {BsArrowUpRightCircleFill} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {RiJavascriptFill} from 'react-icons/ri'
import {FaPython} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'



const Content = () => {
  return (
    <div className='content max-w-[55%] ml-[45vw]'>
       <section id='about' className='about pt-20 min-h-screen'>
            <p className='text-basic leading-9 tracking-wider'>
              At the age of 15, I discovered Codecademy and delved into web development, starting with very basic 
              HTML and CSS. Since then, my dedication to Computer Science has led me to advance my skills in  
              <strong className='font-semibold'> HTML</strong>, <strong className='font-semibold'>CSS</strong>, 
              <strong className='font-semibold'> JavaScript</strong>, <strong className='font-semibold'>Python</strong>, and <strong className='font-semibold'>MySQL &  MSSQL</strong>. 
              I've also explored popular frameworks like <strong className='font-semibold'>React</strong>, <strong className='font-semibold'> Tailwind</strong> and <strong className='font-semibold'>Express/Node.js</strong>.
            </p>

            <p className='text-basic leading-9 tracking-wider mt-6'>
            These skills are put to the test through my work experience as well as my personal projects. The biggest of these is a
             <strong className='font-semibold'> <a href='#p2'>data management web app</a></strong> created with another developer. Together, we built an app to streamline data management processes.
             Users can input and clean data through an intuitive interface, ensuring accuracy and consistency. Managers have the ability to assign specific data tasks to users and oversee user management, while all users can track their progress in real-time.
            </p>

            <p className='text-basic leading-9 tracking-wider mt-6'>
            I have completed my degree and am now actively working in the field of web and software development. With a strong foundation in programming and a passion for creating dynamic, user-friendly web applications, I'm excited to continue growing and contributing to innovative projects in this space.
            </p>
        </section>

        <section id='projects'className='projects pt-[5rem]'>
          <div className='slider-wrapper relative'>
            <div className='slider flex overflow-x-auto'>
              
            <div id='p3' className='images aspect-video snap-center'>
                <img className='' src='src\assets\nasa.jpg' alt=''/>
                <h6 className='text-basic font-semibold tracking-wider'>Data Management App<span className='icons inline-flex pl-3'><BsArrowUpRightCircleFill/></span></h6>
                <p className='text-basic leading-8 tracking-wider'>Web application that faciliates data management of stock inventory.
                </p>
              </div>

              <div id='p1' className='images aspect-video snap-center'>
                <img className='' src='\internship-website.PNG' alt=''/>
                <a href='https://interseeker.netlify.app/'><h6 className='text-basic font-semibold'>Internship Website<span className='icons inline-flex pl-3'><BsArrowUpRightCircleFill/></span></h6></a>
                <p className='text-basic leading-8 tracking-wider'>Using React and Tailwind, I created
                a website that could assist students in finding internships without the difficulty I had.
                </p>
              </div>

              <div id='p2'className='images aspect-video snap-center'>
                <img className='' src='\capstonehome.PNG' alt=''/>
                <a href="https://github.com/rushionfisher/COMP3901-Project"><h6 className='text-basic font-semibold'>Capstone Project<span className='icons inline-flex pl-3'><BsArrowUpRightCircleFill/></span></h6></a>
                <p className='text-basic leading-8 tracking-wider'>A redesign of our 
                university's career website which includes an improved application process
                and an AI model to recommend jobs based on resumes.

                </p>
              </div>

            </div> 

            <div className='slider-nav flex gap-4 absolute bottom-0 left-[50%] -translate-x-1/2 z-10'>
              <a href='#p1'></a>
              <a href='#p2'></a>
              {/* <a href='#p3'></a> */}
            </div>
          </div>
        </section>

        <section id='experience'className='experience pt-[5rem] pb-[11rem]'>
          <h4 className='text-[1.3rem] font-semibold  text-[#EEEEEE]'>Tech Stack</h4>
          <h6 className='text-basic text-[1rem] tracking-wider'>I have experience building projects with:</h6>
          <div className='lang-icons flex'>
            <AiOutlineHtml5/>
            <SiCss3 className='text-[2.7rem] mt-1'/>
            <RiJavascriptFill/>
            <FaPython/>
            <SiMysql/>
            <FaReact/>
            <SiTailwindcss/>
            <BsGithub/>
          </div>
        </section>
        <footer className='font-medium text-[#446488] text-[0.5rem] my-5 text-end'>
             &copy; <strong>2023</strong> Sabrina Harvey
        </footer>
    </div>
  )
}

export default Content