import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatIDo = () => {
  const services = [
    {
      title: "Front-End Development",
      description: "Crafting dynamic, responsive, and user-friendly interfaces with React, Tailwind CSS, and JavaScript to deliver seamless user experiences.",
      image: "./frontend.webp"
    },
    {
      title: "Back-End Development",
      description: "Building robust, scalable APIs and handling efficient database management using Node.js, Express.js, and MongoDB, ensuring high performance and security.",
      image: "./backend.webp"
    },
    {
      title: "Full-Stack Expertise",
      description: "Combining both front-end and back-end skills to deliver end-to-end solutions, from UI to database with seamless integration.",
      image: "./fullStack.webp"
    },
    {
      title: "Others",
      description: "WebSockets (Socket.io), REST APIs, Authentication (JWT), Git/GitHub.",
      image: ".others.webp"
    }
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-6 pb-6">
      <div className='my-4'>
        <h1 className="font-bold text-3xl pb-8 text-red-700">What I Do</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-full"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl object-cover w-full h-48 md:h-full"
                />
              </div>
              <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4">
                <h2 className="text-xl font-bold text-pink-500 mb-2 dark:text-pink-400">{service.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
