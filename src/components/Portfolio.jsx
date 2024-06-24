import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import one from "../assets/one.avif"
import two2 from "../assets/two2.avif"
import three from "../assets/three3.jpg"
import four from "../assets/four4.jpg"
import five from "../assets/five55.jpeg"
import { FaArrowRightLong } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <>
    <section className='py-[100px] bg-[#FFF9E3]'> 
     <Container>
     <h2 className=' relative font-extrabold text-[110px] text-center opacity-10    '>WORK</h2>
     <h3 className='text-center font-semibold text-[56px] font-serif mt-[-125px] relative after:absolute after:contain-[""] after:h-[2px] after:w-[350px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#000] '>My <span className='text-[#3BB9FF]'>Portfolio!</span> </h3>

      <Flex className=" justify-around pt-[50px]">
         <div className="w-[30%]">
          <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://delicate-biscotti-bc7b91.netlify.app/" ><img className=' rounded-2xl'  src={one} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] text-[36px] font-serif font-semibold '>E-Commerce <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
         
          </div>
         </div>
         <div className="w-[30%]">
         <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://dazzling-rugelach-46e9f7.netlify.app/#home" ><img className=' rounded-2xl'  src={two2} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] text-[36px] font-serif font-semibold '>BWFC <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
         
          </div>
         </div>
         <div className="w-[30%]">
         <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://wondrous-yeot-05ac40.netlify.app/" ><img className=' rounded-2xl'  src={three} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] text-[36px] font-serif font-semibold '>PETROIL <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
         
          </div>
         </div>
        
      </Flex>
      <div className="flex justify-around pt-[50px]">
         <div className="w-[30%]">
         <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://effortless-scone-9cd956.netlify.app/" ><img className=' rounded-2xl'  src={four} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] text-[36px] font-serif font-semibold '>FINSWEET <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
         
          </div>
         </div>
         <div className="w-[30%]">
         <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://eloquent-lamington-bd02fc.netlify.app/" ><img className=' rounded-2xl'  src={five} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] text-[36px] font-serif font-semibold '>PHONE SHOP <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
         
          </div>
         </div>
         <div className="w-[30%]">
         <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://wondrous-yeot-05ac40.netlify.app/" ><img className=' rounded-2xl'  src={three} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] text-[36px] font-serif font-semibold '>PETROIL <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
         
          </div>
         </div>
         
         </div>
     </Container>
    </section>
    </>
  )
}

export default Portfolio