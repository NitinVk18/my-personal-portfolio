import React from 'react';

const BookInfo = ({ item }) => {
  if (!item) {
    return (
      <div className="max-w-xs mx-auto">
        <div className="card shadow-2xl bg-base-200 w-full flex items-center justify-center py-4 px-4 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">No book data available.</p>
        </div>
      </div>
    );
  }

  return (
<div className="card shadow-xl shadow-neutral-400/30 bg-white dark:bg-slate-800 dark:text-white flex flex-col md:flex-row w-full items-center md:items-stretch p-4 md:p-6 gap-6 rounded-lg">
      
<figure className="w-full md:w-1/3">
  <div className="h-64 w-full flex items-center justify-center bg-white dark:bg-slate-700 rounded-lg overflow-hidden">
    <img
      src={item.image || "https://via.placeholder.com/150"}
      alt={item.name}
      className="h-full w-full object-cover"
    />
  </div>
</figure>

  
      <div className="card-body w-full md:w-2/3 flex flex-col justify-center gap-2">
        <h2 className="text-xl md:text-2xl font-bold">Project: {item.id}</h2>
        <h2 className="text-2xl md:text-xl font-semibold">{item.name}</h2>
        
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          <span className="font-bold">Overview:</span> {item.overview}
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          <span className="font-bold">Technologies:</span> {item.technologies}
        </p>
  
        <div className="mt-4">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-red-700 hover:bg-red-500 rounded-md text-white transition-all">
              View Project Source Code
            </button>
          </a>
        </div>
      </div>
    </div>

  
  );
};

export default BookInfo;
