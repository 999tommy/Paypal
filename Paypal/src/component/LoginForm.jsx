import React from 'react'

const LoginForm = () => {
  return (
          <div className="flex flex-col space-y-4">
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="rounded-md border border-gray-300 p-2 w-full"
            />
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-md border border-gray-300 p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
              Login
            </button>
          </div>
        );
      }
      
export default LoginForm