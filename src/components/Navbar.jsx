import React from 'react';
import { Menu, X } from "lucide-react";
import { useState } from 'react';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (

    <nav className="bg-indigo-700 border-b border-indigo-500 w-full">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-between w-full px-3 md:items-stretch md:justify-start"
          >
            
            <a className="flex" href="/index.html">
              
              <span className="md:block text-white text-2xl font-bold ml-2">Michael</span>
            </a>
            {/* {Desktop Menu} */}
            <div className="hidden md:flex md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="#about"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">About Me
                  </a>
                <a
                  href="#skills"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Skills</a>
                <a href="#projects"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Projects
                </a>
                <a href="#experience"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Experience
                </a>
                <a href="#contacts"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Contac Me
                </a>
              </div>
            </div>
            {/* Mobile menue */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
             {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
            {isOpen && (
                       <div className="md:hidden flex flex-col bg-white px-3 py-5  space-y-2 z-50 mt-[200px] w-[250px] ">
                       <a
                         href="#about"
                         className="text-indigo-600 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">About Me
                         </a>
                       <a
                         href="#skills"
                         className="text-indigo-600 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2">Skills</a>
                       <a href="#projects"
                         className="text-indigo-600 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2">Projects
                       </a>
                       <a href="#experience"
                         className="text-indigo-600  hover:bg-indigo-800 hover:text-whitee rounded-md px-3 py-2">Experience
                       </a>
                       <a href="#contacts"
                         className="text-indigo-600 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2">Contacts
                       </a>
                     </div>
            )}
            
            
          </div>
        </div>
      </div>
    </nav>
    
    

  )
}

export default Navbar