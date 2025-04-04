import React from "react";
import BookInfo from "./ProjectInfo";
import List from '../../public/ProjectsList.json';

const CoursesContent = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-16 flex flex-col md:flex-row">
      <div className="max-w-screen-2xl mx-auto px-4 pt-16">
        <h1 className="text-4xl font-bold text-center md:text-left mx-auto my-auto">
          Some of My Projects
          <span className="text-pink-500"> :)</span>
        </h1>
        <br />
        <h1 className="">
          For More check My 
          <a href="https://github.com/NitinVk18" className="font-bold underline">  GitHub  </a>
          Profile
        </h1>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-wrap justify-start gap-20 ml-6 mb-8">
          {List.map((item) => (
            <div key={item.id} >
              <BookInfo item={item} className="w-full sm:w-1/2 md:w-1 p-2" /> 
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default CoursesContent;