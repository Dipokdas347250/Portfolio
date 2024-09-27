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
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";



import Slider from "react-slick";
function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div className=" absolute h-[40px] w-[40px] bg-[#3BB9FF] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] right-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
    <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
   </div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div className=" absolute h-[40px] w-[40px] bg-[#3BB9FF] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] left-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
     <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
    </div>
   
  );
}




const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
     
    
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },

    ],
  };

  

  return (
    <>
    <section className='py-[100px] bg-[#FFF9E3] animate-slideIn '> 
     <Container>
     <h2 className=' relative font-extrabold lg:text-[110px] text-[90px] text-center opacity-10    '>WORK</h2>
     <h3 className='text-center font-semibold lg:text-[56px] text-[46px] font-serif lg:mt-[-125px] mt-[-100px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[350px] after:w-[300px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#000] '>My <span className='text-[#3BB9FF]'>Portfolio!</span> </h3>

      {/* <Flex className=" justify-around pt-[50px]">
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
        
      </Flex> */}
      {/* <div className="flex justify-around pt-[50px]">
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
         
         </div> */}

         
          <Slider className='pt-10 px-[40px]' {...settings}>
          <div className="">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://delicate-biscotti-bc7b91.netlify.app/" ><img className=' rounded-2xl'  src={one} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold '>E-Commerce <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       
       </div>
       <div className="">
       <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://dazzling-rugelach-46e9f7.netlify.app/#home" ><img className=' rounded-2xl'  src={two2} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold '>BWFC <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
       </div>
       <div className="">
       <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://wondrous-yeot-05ac40.netlify.app/" ><img className=' rounded-2xl'  src={three} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold '>PETROIL <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
       </div>
       <div className="">
       <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://effortless-scone-9cd956.netlify.app/" ><img className=' rounded-2xl'  src={four} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold '>FINSWEET <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
       </div>
       <div className="">
       <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://eloquent-lamington-bd02fc.netlify.app/" ><img className=' rounded-2xl'  src={five} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold '>PHONE SHOP <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
       </div>
       <div className="">
       <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#3BB9FF] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'   href="https://wondrous-yeot-05ac40.netlify.app/" ><img className=' rounded-2xl'  src={three} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold '>PETROIL <h3 className=' text-[#000]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          
          </a>
       </div>
       
          </Slider>
      
   
       
          
        
        
      
    
     </Container>
    </section>
    </>
  )
}

export default Portfolio