import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Brands from './Brands'
import Projects from './Projects'

const AllPagesComponent = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Brands/>
        <Projects/>
    </div>
  )
}

export default AllPagesComponent