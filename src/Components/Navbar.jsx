import React from 'react'
import hero from '../assets/hero.png'

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div  >
   
            <ul className=" md:flex  font-semibold mx-auto flex justify-between items-center py-4  md:px-20 lg:px-32">
                <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
                <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
                <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
                <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
            <button className=" bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600">Sign up</button> 
            </ul>


      </div>
    </div>
  )
}

export default Navbar
