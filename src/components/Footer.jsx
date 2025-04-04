import React from "react";

const Footer = () => {
  return (
    <>
      <div>
      <footer className="mt-16 bg-white dark:bg-slate-800 text-center text-base-content dark:text-white rounded-lg py-10 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Nitin Chamoli</h1>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.instagram.com/nitinchamoli_" className="hover:text-pink-500 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.youtube.com/@nitinchamoli9530" className="hover:text-red-600 transition">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
          <p className="text-sm">Copyright © {new Date().getFullYear()} - All rights reserved by Nitin Chamoli</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
