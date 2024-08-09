import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaHome, FaFacebookSquare, FaLinkedin, FaGithubSquare, FaGraduationCap } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import Dipok from "../assets/Dipok d.jpg"
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <section className=' lg:py-[100px] py-[50px] bg-[#FFF9E3]'>
        {/* <div className="w-[15%] fixed ">
              <div className=" py-[100px]">
                <div className="  p-3 relative cursor-pointer    ">

                  <div className="  flex justify-between group overflow-hidden  after:rounded-full after:duration-300 after:absolute after:contain-[''] after:top-0 after:left-0 after:h-[50px] after:w-[50px] after:bg-[blue] hover:after:w-[80%] py-7 ">
                    <i className='text-[26px] z-50 absolute top-[12px]'>< FaHome/></i>

                    <h2 className='  text-[#fff] font-serif font-semibold text-[18px] absolute top-0 left-0 z-50 opacity-0 hover:opacity-100 hover:top-[8px] group:hover:left-[50px] '> Home</h2>
                  </div>
                </div>
                <div className="  p-3 relative cursor-pointer ">

                  <div className=" flex justify-between after:rounded-full after:duration-300 after:absolute after:contain-[''] after:top-0 after:left-0 after:h-[50px] after:w-[50px] after:bg-[blue] hover:after:w-[80%] py-7 ">
                    <i className='text-[26px] z-50 absolute top-[12px]'>< IoIosContact /></i>

                    <h2 className=' text-[#fff] font-serif font-semibold text-[18px] absolute top-0 left-0 z-50 opacity-0 hover:opacity-100 hover:top-[8px] hover:left-[30%] '>About</h2>
                  </div>
                </div>
                <div className="  p-3 relative cursor-pointer ">

                  <div className=" flex justify-between after:rounded-full after:duration-300 after:absolute after:contain-[''] after:top-0 after:left-0 after:h-[50px] after:w-[50px] after:bg-[blue] hover:after:w-[80%] py-7 ">
                    <i className='text-[26px] z-50 absolute top-[12px]'><FaGraduationCap  /></i>

                    <h2 className=' text-[#fff] font-serif font-semibold text-[18px] absolute top-0 left-0 z-50 opacity-0 hover:opacity-100 hover:top-[8px] hover:left-[30%] '>Portfolio</h2>
                  </div>
                </div>
                <div className="  p-3 relative cursor-pointer ">

                  <div className=" flex justify-between after:rounded-full after:duration-300 after:absolute after:contain-[''] after:top-0 after:left-0 after:h-[50px] after:w-[50px] after:bg-[blue] hover:after:w-[80%] py-7 ">
                    <i className='text-[26px] z-50 absolute top-[12px]'><RiContactsBookFill /></i>

                    <h2 className=' text-[#fff] font-serif font-semibold text-[18px] absolute top-0 left-0 z-50 opacity-0 hover:opacity-100 hover:top-[8px] hover:left-[30%] '>Contact</h2>
                  </div>
                </div>
                <div className="  p-3 relative cursor-pointer ">

                  <div className=" flex justify-between after:rounded-full after:duration-300 after:absolute after:contain-[''] after:top-0 after:left-0 after:h-[50px] after:w-[50px] after:bg-[blue] hover:after:w-[80%] py-7 ">
                    <i className='text-[26px] z-50 absolute top-[12px]'><SiMicrodotblog /></i>

                    <h2 className=' text-[#fff] font-serif font-semibold text-[18px] absolute top-0 left-0 z-50 opacity-0 hover:opacity-100 hover:top-[8px] hover:left-[30%] '>Blog</h2>
                  </div>
                </div>
              </div>

            </div> */}
        <Container>
          <Flex className="justify-around">


            <div className="lg:w-[55%] w-full ">
              <div className="  lg:pt-16 ">

                <h5 className='lg:text-[28px] font-serif  font-bold  ml-[20px]  '>- I am .</h5>
                <ReactTyped className='lg:text-[56px] font-serif  font-bold  ml-[20px] ' strings={[" Dipok Chandra Das"]} typeSpeed={200} backSpeed={150} loop={true} />
                
                <h3 className='lg:text-[32px] font-serif  font-semibold  ml-[20px] text-[#3BB9FF]  '>MERN Stack Developer</h3>
                <p className='font-serif lg:text-[22px] font-medium  lg:w-[80%] w-full lg:mt-[50px] ml-[20px]'> I am Dipok das . MERN Stack Developer focused on crafting clean & user-friendly experiences , i am passionate about building excellent software that improves the loves of those around me. </p>
                <div className="flex gap-x-10 pt-[70px] ml-[80px]">
                  <a className='h-[60px] w-[60px] bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                  <a className='h-[60px] w-[60px] bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                  <a className='h-[60px] w-[60px] bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>



                </div>
                {/* <div className="h-[50px] w-[150px] border-2 border-[#000] text-center rounded-full mt-[70px] ml-[200px] duration-300 ease-in-out hover:text-[#ffff] hover:bg-[#3BB9FF] cursor-pointer">
                  <h4 className='font-serif text-[18px] font-medium leading-[45px]'>Contacts</h4>
                </div> */}

              </div>
              <div className="mt-[50px]">
                <div className=" flex justify-center items-center overflow-hidden  transform-[1.5] p-[10px]   ">
                  <button className='   py-[15px] px-[40px] border-0 outline-none text-[#fff] rounded-2xl relative z-0 after:absolute after:content-[""] after:w-full after:h-full after:-z-10 after:top-0 after:left-0 after:rounded-xl after:bg-[#000] active:after:bg-transparent before:absolute before:content-[""] before:bg-gradient-to-tl  before:from-[#ADF802] before:via-black before:to-[#0000FF] before:top-[-10px] before:left-[-10px] before:size-40 before:-z-10 before:w-[100% +10px] before:h-[100% + 10px] before:blur-[10px]  before:duration-300 before:ease-in-out before:opacity-0  before:rounded-lg  before:animate-ping  hover:before:opacity-100   active:text-[#000]'>Contacts</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] w-full   ">
              <div className="  ">

                <img className="lg:rounded-[20px]  rounded-full shadow-2xl shadow-stone-950 lg:origin-top-left lg:rotate-12 ... " src={Dipok} alt="" />
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Banner