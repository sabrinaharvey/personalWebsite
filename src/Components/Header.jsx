import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiArrowNarrowRight} from 'react-icons/hi'



const Header = () => {
  return (
    <div className='header mt-20 max-h-screen fixed'>
        <div className='intro mt-8'>
            <h4 className='text-[0.5rem] mb-0 tracking-[0.03em]'>Hi, I'm</h4>
            <h1 className='text-[3.2rem] text-callColor tracking-normal font-bold p-0'>
                Sabrina <span className='text-[#EEEEEE]'>Harvey</span>
            </h1>
            <h5 className='text-[1.5rem] text-[#EEEEEE] tracking-normal m-0 font-medium'> 
            Junior Web Developer</h5>
            <p className='mt-2 w-[60%] tracking-wider text-basic'>I like making the Web beautiful and functional through brilliant web design.</p>
        </div>

        <div className='icons mt-5 flex items-center space-x-8 '>
          <a href='https://www.linkedin.com/in/sabrina-harvey-87a79526b/'><BsLinkedin className='text-[1.4rem] text-basic hover:text-white'/></a>
          <a href='https://github.com/sabrinaharvey'><BsGithub className='text-[1.5rem] text-basic hover:text-white'/></a>
        </div>

        <div className='navbar flex flex-col mt-9'>
            <a className='nav-bar font-semibold text-[#EEEEEE]' href='#about'><span className='inline-flex pr-4'><HiArrowNarrowRight className='text-[1.1rem]'/></span>ABOUT</a>
            <a className='nav-bar font-semibold text-[#EEEEEE]' href='#projects'><span className='inline-flex pr-4'><HiArrowNarrowRight className='text-[1.1rem]'/></span>PROJECTS</a>
            <a className='nav-bar font-semibold text-[#EEEEEE]' href='#experience'><span className='inline-flex pr-4'><HiArrowNarrowRight className='text-[1.1rem]'/></span>EXPERIENCE</a>
        </div>
        <a href='https://drive.google.com/file/d/1If0wjxKYVqP6o4PEIYlgnLrj1_pa5jTT/view?usp=sharing'><button className='mt-4'>View Resume</button></a>

    </div>
  )
}

export default Header