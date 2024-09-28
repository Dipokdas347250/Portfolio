import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contacts from '../components/Contacts'
import Cv from './Cv'

const Home = () => {
  return (
    <>
    
    <Banner/>
    <About/>
    <Portfolio/>
    <Contacts/>
    {/* <Cv/> */}
    </>
  )
}

export default Home