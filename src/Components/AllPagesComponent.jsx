import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Brands from './Brands'
import Projects from './Projects'
import QuickAccess from './QuickAccess'
import Enquiry from './Enquiry'
import BottomButtons from './BottomButtons'
import Blogs from './Blogs'

const AllPagesComponent = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Brands/>
        <Projects/>
        <Blogs/>
        <QuickAccess/>
        <Enquiry/>
        <BottomButtons/>
    </div>
  )
}

export default AllPagesComponent