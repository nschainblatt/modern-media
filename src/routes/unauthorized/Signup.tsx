import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="flex m-0 justify-center items-center min-h-screen">
        <div 
          id="sidebar"
          className="flex flex-col justify-start gap-12 bg-red-800 rounded-lg py-4 px-8 shadow-2xl m-h-[30rem] w-[30rem]"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-center">Modern Media</h1>
            <h3 className="text-lg text-center">The modern way of sharing</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Name</label>
              <input 
                id="name"
                type="text"
                className="rounded p-3 bg-red-950 focus:bg-[#171717]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="text"
                className="rounded p-3 bg-red-950 focus:bg-[#171717]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="text"
                className="rounded p-3 bg-red-950 focus:bg-[#171717]"
              />
            </div>
            <a
              href={`/home`}
              className="bg-red-950 hover:bg-[#171717] text-white font-bold py-2 px-4 rounded-lg text-center"
            >
              Sign Up
            </a>
            <div className="flex flex-col gap-5 items-center">
              <a href={`/`}>Already have an account? Login</a>
            </div>
          </div>
        </div>
        <div id="detail"></div>
      </div>
    </>
  )
}

export default Signup