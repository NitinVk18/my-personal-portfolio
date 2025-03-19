import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 dark:text-white p-8 rounded-lg shadow-lg w-80">
        <form>
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>


          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="w-full p-2 mb-4 outline-double bg-white dark:bg-slate-800 dark:text-white rounded-sm text-sm"
          />

          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter E-mail"
            className="w-full p-2 mb-4 outline-double bg-white dark:bg-slate-800 dark:text-white rounded-sm text-sm"
          />

          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 mb-6 outline-double bg-white dark:bg-slate-800 dark:text-white rounded-sm text-sm"
          />

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded-md mb-3"
          >
            Sign UP
          </button>

          <Link to="/">
  <button className="w-full bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded-md">
    Back
  </button>
</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;