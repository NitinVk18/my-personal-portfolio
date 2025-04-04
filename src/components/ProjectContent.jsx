import React from "react";
import BookInfo from "./ProjectInfo";
import List from '../../public/ProjectsList.json';

const CoursesContent = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-16 flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-screen-2xl mx-auto px-4 pt-16 w-full">
        <h1 className="text-4xl font-bold text-center md:text-left mx-auto my-auto">
          Some of My Projects
          <span className="text-pink-500 dark:text-pink-400"> :)</span>
        </h1>
        <br />
        <h1 className="text-left">
          For More check My
          <a
            href="https://github.com/NitinVk18"
            className="font-bold underline text-blue-600 dark:text-blue-400 ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          Profile
        </h1>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        <div className="flex flex-wrap justify-start gap-10 ml-2 md:ml-6 mb-8">
          {List.map((item) => (
            <div key={item.id}>
              <BookInfo item={item} className="w-full sm:w-1/2 md:w-1/3 p-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesContent;
