import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import Projects from './course/Projects'
import About from './about/About'
import ContactPage from './contact/ContactPage'

const App = () => {
  return (
  <>

    <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route  path="/" element={<Home />}/>
    <Route  path="/projects" element={<Projects />}/>
    <Route  path="/contact" element={<ContactPage />}/>
    <Route  path="/about" element={<About/>}/>
   </Routes>
    </div>
    </>
  )
}

export default App