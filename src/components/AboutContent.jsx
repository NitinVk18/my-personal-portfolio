import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-10">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-600 dark:text-pink-400">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Hi, I’m <span className="font-semibold text-pink-500">Nitin Chamoli</span> — a passionate Full Stack Web Developer based in Mohali, India. I specialize in building modern, responsive, and user-centric web applications using technologies like{" "}
          <span className="font-semibold">HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL</span>.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          I enjoy solving real-world problems through code and continuously strive to improve my skills. Currently, I’m looking for an internship opportunity in Full Stack Development, and I am actively working on personal projects to sharpen my practical knowledge.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          Outside of coding, I love traveling, exploring new places, and staying up-to-date with the latest tech trends. I'm an optimistic, self-disciplined individual who values teamwork, punctuality, and continuous learning.
        </p>
      </div>
    </div>
  );
};

export default About;
