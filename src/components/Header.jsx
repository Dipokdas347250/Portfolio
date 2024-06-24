import React from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"
import Logo from "../assets/Dipok.png"
import ScrollspyNav from "react-scrollspy-nav";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='h-[80px] px-3 bg-[#FFF9E3] '>
                <Container >
                    <Flex className="justify-between items-center h-[80px]">
                        <div className="w-[15%]">
                           <div className="">
                             <img className='text-center' src={Logo} alt="" />
                            
                           </div>
                        </div>
                        <div className="w-[65%] ">
                           

                                <ul className='flex justify-end  gap-x-12'>
                                    <li className='font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF]  '><Link to="/">Home</Link></li>
                                    <li className='font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF]  ' ><Link to="/About">
                                    About</Link></li>
                                    
                                    <li className='font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF]  '>
                                        <Link to="/Portfolio">Portfolio</Link>
                                        </li>
                                    <li className='font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF]  '><a href="#contacts">Contacts</a></li>
                                    <li className='font-serif font-semibold text-[16px] duration-300 ease-in-out  hover:text-[#3BB9FF]  '><a href="#contacts">Blog</a></li>
                                    
                                </ul>
                           
                        </div>
                        <div className="w-[15%]">
                            <h2 className='text-end'>login</h2>
                        </div>


                    </Flex>
                </Container>
            </header>


        </>
    )
}

export default Header