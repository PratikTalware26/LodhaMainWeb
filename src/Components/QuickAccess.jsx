import React from 'react'
import "./QuickAccess.css"

const QuickAccess = () => {
  return (
    <div className='quick-cont p-2'>
        <div><h2 className='text-center'>Quick Access</h2></div>
        <div className='p-2'>
            <ul className='quick-page-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#brands">Brands</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blogs">Blogs</a></li>
            </ul>
        </div>
    </div>
  )
}

export default QuickAccess