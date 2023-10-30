import React from 'react'
import Modal from '../../ui/Modal'

const ForgotPassword = () => {
  return (
    <>
      <Modal
        animation={false}
        header={
            <div className="text-xl flex flex-col gap-2 w-full text-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-center">Modern Media</h1>
                <h3 className="text-lg text-center">The modern way of sharing</h3>
              </div>
              <hr />
            </div>
          }
        show={true}
        maxWidth="25vw"
      >
        <div className="p-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="text"
                className="rounded-sm p-3 bg-stone-200 focus:bg-stone-400 text-[#171717] outline-none"
                />
            </div>
            <div className="flex justify-center">
              <a
                href={`/resetpassword`}
                className="bg-stone-200 hover:bg-stone-400 text-[#171717] font-bold p-3 rounded-sm text-center px-14"
              >
                Reset password
              </a>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <a href={`/`}>Back</a>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-center mt-5">
            <a
              href={`/signup`}
              className="font-bold"
            >
              Create a new account
            </a>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ForgotPassword