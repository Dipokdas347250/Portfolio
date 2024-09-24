import React from 'react'
import Container from './Container'
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";



const Contacts = () => {
  return (
    <>
      <section className=' py-20'>
        <Container>
          <div className="">
            <h2 className=' relative font-extrabold text-[110px] text-center opacity-10  uppercase   '>Contacts</h2>
            <h3 className='text-center font-semibold text-[56px] font-serif mt-[-125px] relative after:absolute after:contain-[""] after:h-[2px] after:w-[350px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#000] '>Get <span className='text-[#3BB9FF]'> in touch!</span> </h3>
          </div>
          <div className=" flex justify-between mt-16">
            <div className="w-[35%]">
              <div className="">
                <h2 className='text-[#000] font-bold text-[36px]'>Don't be shy !</h2>
                <p className='text-[#000] font-semibold text-[20px]'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              </div>
              <div className=" flex items-center mt-11 gap-4">
                <div className="">
                  <MdEmail className='text-[36px] text-[#3BB9FF]' />
                </div>
                <div className="">
                  <h2 className='text-[#000] font-semibold text-[18px] opacity-70'>Email Me</h2>
                  <h3 className='text-[#000] font-semibold text-[18px]'>abcd@gmail.com</h3>
                </div>
              </div>
              <div className=" flex items-center mt-11 gap-4">
                <div className="">
                  <BiSolidPhoneCall className='text-[36px] text-[#3BB9FF]' />
                </div>
                <div className="">
                  <h2 className='text-[#000] font-semibold text-[18px] opacity-70'>Call Me</h2>
                  <h3 className='text-[#000] font-semibold text-[18px]'>+88017123456678</h3>
                </div>
              </div>
              <div className="flex gap-x-10 mt-5 ">
                <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>



              </div>
            </div>
            <div className="w-[65%]">
              <form action="">
                <div className=" flex justify-between px-3 mt-5">
                  <div className="w-[32%]">
                    <input className='h-[50px] w-full border-2 border-[#3BB9FF] rounded-lg pl-2' type="text" placeholder='Your Name*' />
                  </div>
                  <div className="w-[32%]">
                    <input className='h-[50px] w-full border-2 border-[#3BB9FF] rounded-lg pl-2' type="text" placeholder='Your E-mail*' />
                  </div>
                  <div className="w-[32%]">
                    <input className='h-[50px] w-full border-2 border-[#3BB9FF] rounded-lg pl-2' type="text" placeholder='Your Sebject*' />
                  </div>
                 

                </div>
                <div className="w-full px-3  mt-5">
                    <label for="" className='text-[#000] font-semibold text-[18px]'>Your Messege :</label>
                    <textarea className='w-full h-48 border-2 border-[#3BB9FF] resize-none rounded-xl pl-2 pt-2  '  ></textarea>

                  </div>
              </form>
              <div className=" ml-3 mt-8 relative  flex justify-between w-[30%] items-center py-4 px-4 border-2 border-[#3BB9FF] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:right-0 after:h-full after:w-[28%] after:rounded-full after:bg-[#3BB9FF] after:duration-300 after:ease-in-out after:hover:w-full ">
                  <h3 className='font-serif text-[18px] font-medium mr-2 z-50  '>Send Messege </h3>
                  <RiSendPlaneFill className='text-[36px] text-white z-50'/>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contacts