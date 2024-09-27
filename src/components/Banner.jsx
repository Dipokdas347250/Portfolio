import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaHome, FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import Das from "../assets/Dipok das.png"
import Dipok from "../assets/06.jpg"
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <section className=' lg:py-[100px] py-[50px] bg-[#FFF9E3] animate-slideIn px-2'>
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
          <Flex className="justify-around flex-wrap ">

          <div className="lg:w-[45%]   ">
              <div className="  ">

                <img className="  lg:rounded-[20px]  w-full  rounded-full shadow-2xl shadow-stone-950  " src={Dipok} alt="" />
              </div>
            </div>

            <div className="lg:w-[55%] w-full ">
              <div className=" lg:ml-14  ">

                <h5 className='lg:text-[28px] text-[24px] font-serif  font-bold  ml-[20px]  '>- I am .</h5>
                <ReactTyped className='lg:text-[56px] text-[28px] font-serif  font-bold  ml-[20px] ' strings={[" Dipok Chandra Das"]} typeSpeed={200} backSpeed={150} loop={true} />
                
                
                <h3 className='lg:text-[32px] text-[24px] font-serif  font-semibold  ml-[20px] text-[#3BB9FF]  '>MERN Stack Developer</h3>
                <p className='font-serif lg:text-[22px] font-medium   lg:w-full w-[90%] lg:mt-[20px] ml-[20px] '> I am Dipok das . MERN Stack Developer focused on crafting clean & user-friendly experiences , i am passionate about building excellent software that improves the loves of those around me. </p>
                <div className="flex lg:gap-x-10 gap-x-5 pt-[70px] ml-5 ">
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>



                </div>
                

              </div>
              <div className="mt-12 lg:ml-20 ml-5">
               
                <div className=" relative  flex justify-between lg:w-[30%] w-[60%] items-center py-4 px-4 border-2 border-[#3BB9FF] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:left-0 after:h-full after:w-[37%] after:rounded-full after:bg-[#3BB9FF] after:duration-300 after:ease-in-out after:hover:w-full  ">
                  <IoIosContact className='text-[36px] z-50 text-white'/>
                  <h3 className='font-serif text-[18px] font-medium mr-2 z-50  '>Contacts</h3>
                </div>
              </div>
            </div>
           
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Banner