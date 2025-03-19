import React from 'react';

const BookInfo = ({ item }) => {
  // Fallback if item is undefined
  if (!item) {
    return (
      <div className="max-w-xs mx-auto">
        <div className="card shadow-2xl bg-base-200 h-72 w-full flex items-center justify-center">
          <p>No book data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto my-4">
      {/* Card Container */}
      <div className="card shadow-lg bg-white dark:bg-slate-800 dark:text-white flex flex-col md:flex-row w-full h-auto md:h-72 items-center p-4 md:p-6 gap-4 rounded-lg">
        
        {/* Image Section (Hidden on small screens) */}
        <figure className="w-full md:w-1/3 h-auto md:h-full overflow-hidden flex justify-center">
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name}
            className="w-full md:w-full h-48 md:h-full object-cover rounded-lg "
          />
        </figure>

        {/* Content Section */}
        <div className="card-body w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold">Project: {item.id}</h2>
          <h2 className="text-lg md:text-xl font-semibold">{item.name}</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            <span className="font-bold">Overview:</span> {item.overview}
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            <span className="font-bold">Technologies:</span> {item.technologies}
          </p>

          {/* Button */}
          <div className="mt-4">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-red-700 hover:bg-red-500 rounded-md text-white transition-all">
                View Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
