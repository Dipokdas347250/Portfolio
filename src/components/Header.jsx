import React, { useState } from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"
import Logo from "../assets/Dipok.png"
import ScrollspyNav from "react-scrollspy-nav";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";

const Header = () => {


    let [show, setShow] = useState (()=>{

    })

    return (
        <>
            <header className='h-[80px] px-3 bg-[#FFF9E3]  '>
                <Container >
                    <Flex className=" justify-center items-center h-[80px]">
                        <div className="w-[25%]">
                           <div className="">
                             <img className='' src={Logo} alt="" />
                            
                           </div>
                        </div>
                        <div className="w-[75%] ">
                           

                                <ul className={` lg:hidden  justify-end z-50  text-center lg:gap-8  absolute lg:static duration-700 ease-in-out ${show == true ? " bg-slate-300 w-full top-[60px] left-0  " : "  w-full top-[-300px] left-[0px] " }`}>
                                    <li className=' relative my-[20px] lg:my-0 font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF] after:absolute after:contain-[""] after:bottom-[-5px]  lg:after:left-[-3px] after:left-0 after:h-[5px] after:w-[0] after:bg-[#3BB9FF] after:duration-300 after:ease-in-out lg:after:hover:w-[55px] after:hover:w-full before:absolute before:contain-[""] before:top-[-4px] lg:before:right-[-5px] before:right-0 before:h-[5px] before:w-[0] before:bg-[#3BB9FF] before:duration-300 before:ease-in-out lg:before:hover:w-[55px] before:hover:w-full'><Link to="/">Home</Link></li>
                                    <li className=' relative my-[20px] lg:my-0 font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF] after:absolute after:contain-[""] after:bottom-[-5px]  lg:after:left-[-3px] after:left-0 after:h-[5px] after:w-[0] after:bg-[#3BB9FF] after:duration-300 after:ease-in-out lg:after:hover:w-[55px] after:hover:w-full before:absolute before:contain-[""] before:top-[-4px] lg:before:right-[-5px] before:right-0 before:h-[5px] before:w-[0] before:bg-[#3BB9FF] before:duration-300 before:ease-in-out lg:before:hover:w-[55px] before:hover:w-full'><Link to="/About">
                                    About</Link></li>
                                    
                                    <li className=' relative my-[20px] lg:my-0 font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF] after:absolute after:contain-[""] after:bottom-[-5px]  lg:after:left-[-3px] after:left-0 after:h-[5px] after:w-[0] after:bg-[#3BB9FF] after:duration-300 after:ease-in-out lg:after:hover:w-[75px] after:hover:w-full before:absolute before:contain-[""] before:top-[-4px] lg:before:right-[-5px] before:right-0 before:h-[5px] before:w-[0] before:bg-[#3BB9FF] before:duration-300 before:ease-in-out lg:before:hover:w-[75px] before:hover:w-full'>
                                        <Link to="/Portfolio">Portfolio</Link>
                                        </li>
                                    <li className=' relative my-[20px] lg:my-0 font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF] after:absolute after:contain-[""] after:bottom-[-5px]  lg:after:left-[-3px] after:left-0 after:h-[5px] after:w-[0] after:bg-[#3BB9FF] after:duration-300 after:ease-in-out lg:after:hover:w-[75px] after:hover:w-full before:absolute before:contain-[""] before:top-[-4px] lg:before:right-[-5px] before:right-0 before:h-[5px] before:w-[0] before:bg-[#3BB9FF] before:duration-300 before:ease-in-out lg:before:hover:w-[75px] before:hover:w-full'><a href="#contacts">Contacts</a></li>
                                    <li className=' relative my-[20px] lg:my-0 font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF] after:absolute after:contain-[""] after:bottom-[-5px]  lg:after:left-[-3px] after:left-0 after:h-[5px] after:w-[0] after:bg-[#3BB9FF] after:duration-300 after:ease-in-out lg:after:hover:w-[43px] after:hover:w-full before:absolute before:contain-[""] before:top-[-4px] lg:before:right-[-5px] before:right-0 before:h-[5px] before:w-[0] before:bg-[#3BB9FF] before:duration-300 before:ease-in-out lg:before:hover:w-[43px] before:hover:w-full'><a href="#contacts">Blog</a></li>
                                    
                                </ul>
                                <ul className='flex justify-end '>
                                    <li>Home</li>
                                    <li>Home</li>
                                    <li>Home</li>
                                </ul>
                           
                        </div>
                        
                       
                        <div className=" lg:hidden cursor-pointer " onClick={()=>setShow(!show)}> 
                            {show == true ? <GiTireIronCross/> : <FaBars/>}
                            
                            
                        </div>


                    </Flex>
                </Container>
            </header>


        </>
    )
}

export default Header