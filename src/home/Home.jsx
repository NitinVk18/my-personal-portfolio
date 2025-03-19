import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WelcomePage from '../components/WelcomePage'
import WhatIDo from '../components/WhatIDo'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <WelcomePage/>
        <WhatIDo/>
        <Footer/>
    </div>
  )
}

export default Home