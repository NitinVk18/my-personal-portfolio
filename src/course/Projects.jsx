import React from 'react'
import Navbar from '../components/Navbar'
import ProjectContent from '../components/ProjectContent'
import Footer from '../components/Footer'


const Courses = () => {
  
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <ProjectContent/>
        </div>
        <Footer/>
    </div>
  )
}

export default Courses