import React from "react";
import WelcomeImage from '../../public/WelcomeImage2.jpg';

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-16 flex flex-col-reverse md:flex-row items-center md:items-start gap-2">
      
      <div className="w-full md:w-1/2 mt-6 md:mt-16 text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Welcome to My Portfolio! <br />
          Hello! I'm <span className="text-pink-500">Nitin Chamoli</span>, a passionate and aspiring Full-Stack Web Developer eager to build interactive, user-friendly, and scalable web applications.
        </h1>
        <p className="mt-9 text-2xl">
          With a strong foundation in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, I am continuously learning and exploring new technologies to enhance my skills.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={WelcomeImage} 
          alt="Can't Load Image" 
          className="w-44 h-44 md:h-[450px] md:w-[350px] object-cover mt-10 rounded-full md:rounded-3xl shadow-lg border-4 border-gray-300 
                     transform md:rotate-2 hover:md:rotate-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Banner;
