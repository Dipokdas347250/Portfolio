import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoIosCodeDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className='py-[100px] bg-[#fff]'>
        <Container>

          <h2 className=' relative font-extrabold text-[110px] text-center opacity-10    '>RESUME</h2>
          <h3 className='text-center font-semibold text-[56px] font-serif mt-[-125px] relative after:absolute after:contain-[""] after:h-[2px] after:w-[280px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#000] '>About <span className='text-[#3BB9FF]'>Me!</span> </h3>

          <Flex className="justify-around">

            <div className="w-[45%] pt-[70px]">
              <div className="flex justify-around">
                <div className="w-[45%] ">
                  <div className="">
                    <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>First Name : <span className='text-[#000] font-semibold text-[18px]'>Dipok </span></h2>
                  </div>
                  <div className="py-[20px]">
                    <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>Last Name : <span className='text-[#000] font-semibold text-[18px]'>Das </span></h2>
                  </div>
                  <div className="py-[20px]">
                    <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>Age : <span className='text-[#000] font-semibold text-[18px]'>23 </span></h2>
                  </div>

                  <div className="py-[20px]">
                  <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '> Phone : <span className='text-[#000] font-semibold text-[18px]'>+8801871118902 </span></h2>
                    
                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="">
                    <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>Address : <span className='text-[#000] font-semibold text-[18px]'>Tangail</span></h2>
                  </div>
                  <div className="py-[20px]">
                  <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>Nationality : <span className='text-[#000] font-semibold text-[18px]'>Bangladshi </span></h2>
                  </div>

                  <div className="py-[20px]">
                    <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>Langages : <span className='text-[#000] font-semibold text-[18px]'>Bangla , English </span></h2>
                  </div>
                  <div className="py-[20px]">
                  <h2 className='font-serif font-medium text-[16px] text-[#616D7E]  '>Email : <span className='text-[#000] font-semibold text-[18px]'>dipakdas24680@gmail.com </span></h2>
                   
                  </div>
                 
                </div>
                
              </div>
              <div className="mt-12">
                 <div className=" relative  flex justify-between w-[40%] items-center py-4 px-4 border-2 border-[#3BB9FF] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:left-0 after:h-full after:w-[30%] after:rounded-full after:bg-[#3BB9FF] after:duration-300 after:ease-in-out after:hover:w-full ">
                  <IoIosCodeDownload className='text-[36px] text-white z-50'/>
                  <h3 className='font-serif text-[18px] font-medium mr-2 z-50  '>Downlode CV</h3>
                </div>
                </div>
            </div>
            <div className="w-[45%] pt-[70px] ">
              <div className=" flex justify-around">
                <div className="w-[45%] ">

                  <div className="p-[20px] border-2 border-[#000] rounded-xl duration-300 ease-in-out hover:mt-[-5px]">
                    <div className="">
                      <div className="flex ">
                        <h2 className='font-bold text-[56px] font-serif text-[#3BB9FF]  '>01</h2>
                        <h4 className='text-[38px] font-semibold  '>+</h4>
                      </div>
                      <h3 className='text-[16px] font-serif w-[150px] text-[#000] font-semibold'>YEARS OF EXPERIENCE</h3>
                    </div>
                  </div>

                </div>
                <div className="w-[45%] ">

                  <div className="p-[20px] border-2 border-[#000] rounded-xl duration-300 ease-in-out hover:mt-[-5px] ">
                    <div className="">
                      <div className="flex ">
                        <h2 className='font-bold text-[56px] font-serif text-[#3BB9FF]  '>15</h2>
                        <h4 className='text-[38px] font-semibold  '>+</h4>
                      </div>
                      <h3 className='text-[16px] font-serif w-[150px] text-[#000] font-semibold'>COMPLETED PROJECTS</h3>
                    </div>
                  </div>

                </div>

              </div>
              {/* <div className=" flex justify-around pt-[40px]">
                <div className="w-[45%] ">

                  <div className="p-[20px] border-2 border-[#000] ">
                    <div className="">
                      <h2>01+</h2>
                      <h3>YEARS OF EXPERIENCE</h3>
                    </div>
                  </div>

                </div>
                <div className="w-[45%] ">

                  <div className="p-[20px] border-2 border-[#000] ">
                    <div className="">
                      <h2>01+</h2>
                      <h3>YEARS OF EXPERIENCE</h3>
                    </div>
                  </div>

                </div>

              </div> */}
            </div>




          </Flex>
          
          <div className="">
            <div className="relative after:absolute after:contain-[''] after:h-[2px] after:w-[1000px] after:right-[50%] after:translate-x-[50%] after:bottom-[-100px] after:bg-[#000]"></div>
          </div>
          <div className="">
            <h2 className='  font-extrabold font-serif text-[64px] text-center mt-[150px]  relative after:absolute after:contain-[""] after:h-[2px] after:w-[280px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#000]   '>My Skills</h2>
          </div>
          <div className="flex justify-around">
            <div className="w-[45%] pt-[40px]">
              <div className=" flex justify-between px-5">
                <div className=" text-[18px] font-semibold text-[#000]">Html</div>
                <div className="text-[18px] font-semibold text-[#000]">85%</div>
              </div>
              <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[85%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">

                  
                </div>
                
              </div>
            </div>
            <div className="w-[45%] pt-[40px]">
              <div className=" flex justify-between px-5">
                <div className=" text-[18px] font-semibold text-[#000]">Css</div>
                <div className="text-[18px] font-semibold text-[#000]">80%</div>
              </div>
              <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[80%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">

                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-[45%] pt-[40px]">
              <div className=" flex justify-between px-5">
                <div className=" text-[18px] font-semibold text-[#000]">Javascript</div>
                <div className="text-[18px] font-semibold text-[#000]">60%</div>
              </div>
              <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[60%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">

                  
                </div>
                
              </div>
            </div>
            <div className="w-[45%] pt-[40px]">
              <div className=" flex justify-between px-5">
                <div className=" text-[18px] font-semibold text-[#000]">Bootstrap 5</div>
                <div className="text-[18px] font-semibold text-[#000]">65%</div>
              </div>
              <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[65%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">

                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-[45%] pt-[40px]">
              <div className=" flex justify-between px-5">
                <div className=" text-[18px] font-semibold text-[#000]">React js</div>
                <div className="text-[18px] font-semibold text-[#000]">70%</div>
              </div>
              <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[70%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">

                  
                </div>
                
              </div>
            </div>
            <div className="w-[45%] pt-[40px]">
              <div className=" flex justify-between px-5">
                <div className=" text-[18px] font-semibold text-[#000]">Tailwindcss</div>
                <div className="text-[18px] font-semibold text-[#000]">75%</div>
              </div>
              <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[75%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">

                  
                </div>
                
              </div>
            </div>
          </div>
          
        </Container>

      </section>
    </>
  )
}

export default About