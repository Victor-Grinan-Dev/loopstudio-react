import React from 'react';

const Collapse = ({isOpen}) => {
  return (
    <>
    {
        isOpen === true && 
        <div className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
            <a href="/" className="hover:text-pink-700">About</a>
            <a href="/" className="hover:text-pink-700">Carrers</a>
            <a href="/" className="hover:text-pink-700">products</a>
            <a href="/" className="hover:text-pink-700">Support</a>
            <a href="/" className="hover:text-pink-700">Events</a>
        </div>
    }
    </>
  )
}

export default Collapse;