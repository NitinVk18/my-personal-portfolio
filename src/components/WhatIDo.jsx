import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatIDo = () => {

 

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-6 pb-6 flex flex-col  ">
        <div className='my-4'>
        <h1 className="font-bold text-3xl pb-2 text-red-700">What I Do</h1>
        <ul>
        <li className='text-2xl'><span className='font-bold text-pink-500'>Front-End Development: </span> Crafting dynamic, responsive, and user-friendly interfaces with React, Tailwind CSS, and JavaScript to deliver seamless user experiences.</li>
        <li className='text-2xl'><span className='font-bold text-pink-500'>Backe-End Development:</span> Building robust, scalable APIs and handling efficient database management using Node.js, Express.js, and MongoDB, ensuring high performance and security.</li>     
        <li className='text-2xl'><span className='font-bold text-pink-500'>Full-Stack Experise:</span> Building robust, scalable APIs and handling efficient database management using Node.js, Express.js, and MongoDB, ensuring high performance and security.</li>     
        
          
          </ul>
      </div>
  
      </div>
    </>
  );
};

export default WhatIDo ;