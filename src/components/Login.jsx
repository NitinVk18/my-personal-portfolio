import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div>
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box  bg-white dark:bg-slate-800 dark:text-white space-y-16 w-80">
    <form method="dialog">
        <h2 className='text-2xl font-bold mb-6 text-center'>LOGIN</h2>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <label htmlFor="email">Email</label><br/>
      <input type="email" placeholder='Enter E-mail' className='my-4 outline-double   bg-white dark:bg-slate-800 dark:text-white rounded-sm text-sm p-1'/><br/>
      <label htmlFor="email">Password</label><br/>
      <input type="email"  placeholder="Password" className='my-4 outline-double  bg-white dark:bg-slate-800 dark:text-white rounded-sm text-sm p-1'  /> <br/>
      <div className=' space-x-8'>
      <button className='bg-red-700 hover:bg-red-500 px-4 py-1 rounded-md mt-4'>LOGIN</button>
      <Link to="/signup">Not Registered? Sign-In</Link>
      </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login