import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const FloatingSocials = () => {
    return (
        <div className="fixed left-4 top-1/3 z-50 flex flex-col space-y-3">
          <a
            href="https://www.facebook.com/michael-idam-7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaFacebookF size={20} />
          </a>
    
          <a
            href="https://x.com/princemicare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
    
          <a
            href="https://www.linkedin.com/in/michael-idam-908388136/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-900 transition duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
    
          <a
            href="https://github.com/codeking-mike"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
        </div>
      );
}

export default FloatingSocials