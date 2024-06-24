import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaHome ,FaFacebookSquare,FaLinkedin ,FaGithubSquare ,FaGraduationCap } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import Dipok from "../assets/Dipok d.jpg"

const Banner = () => {
  return (
    <>
      <section className=' py-[100px] bg-[#FFF9E3]'>
      <div className="w-[15%] fixed ">
              <div className=" py-[100px]">
                <div className="  p-3 relative cursor-pointer  ">

                  <div className=" flex justify-between after:rounded-full after:duration-300 after:absolute after:contain-[''] after:top-0 after:left-0 after:h-[50px] after:w-[50px] after:bg-[blue] hover:after:w-[80%] py-7 ">
                    <i className='text-[26px] z-50 absolute top-[12px]'>< FaHome/></i>

                    <h2 className=' text-[#fff] font-serif font-semibold text-[18px] absolute top-0 left-0 z-50 opacity-0 hover:opacity-100 hover:top-[8px] hover:left-[30%] '> Home</h2>
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

            </div>
        <Container>
          <Flex className="justify-around">
            
            
            <div className="w-[55%] ">
              <div className="  pt-16 ">
                <h5 className='text-[28px] font-serif  font-bold  ml-[80px]  '>- I am .</h5>
                <h2 className='  text-[56px] font-serif  font-bold  ml-[80px]  '><span className='text-[28px] '></span> Dipok Chandra Das</h2>
                <h3 className='text-[32px] font-serif  font-semibold  ml-[80px] text-[#3BB9FF]  '>MERN Stack Developer</h3>
                <p className='font-serif text-[22px] font-medium  w-[80%] mt-[80px] ml-[80px]'> I am Dipok das . MERN Stack Developer focused on crafting clean & user-friendly experiences , i am passionate about building excellent software that improves the loves of those around me. </p>
                <div className="flex gap-x-10 pt-[70px] ml-[80px]">
                  <a className='h-[60px] w-[60px] bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                  <a className='h-[60px] w-[60px] bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                  <a className='h-[60px] w-[60px] bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare/></a>
                  
                  
                  
                </div>
                <div className="h-[50px] w-[150px] border-2 border-[#000] text-center rounded-full mt-[70px] ml-[200px] duration-300 ease-in-out hover:text-[#ffff] hover:bg-[#3BB9FF] cursor-pointer">
                  <h4 className='font-serif text-[18px] font-medium leading-[45px]'>Contacts</h4>
                </div>
              </div>
            </div>
            <div className="w-[40%]   ">
              <div className="  ">

                <img className="rounded-[20px] shadow-2xl shadow-stone-950 origin-top-left rotate-12 ... " src={Dipok} alt="" />
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Banner