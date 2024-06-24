import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Header/>
   <Outlet/>
    </>
  )
}

export default RootLayout