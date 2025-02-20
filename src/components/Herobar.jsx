import React from 'react';
import mikepic from '../assets/images/michael-idam.png';

const Herobar = () => {
  return (
    <section className="bg-white py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center"
      >
        <div className="md:w-1/2 px-6 py-4 rounded-full shadow-sm">
            <img src={mikepic} alt="" className='rounded-full' /> 
        </div>
        <div className="text-center flex flex-col md:w-1/2">
          <h1
            className="text-4xl font-extrabold  sm:text-5xl md:text-6xl"
          >
            I'm <span className='text-indigo-600'> Michael Idam</span> 
          </h1>
          <p className="my-4 text-xl text-dark">
          I am a passionate Full-Stack Web Developer with 3 years of experience building dynamic, high-performance web applications and solutions.
           My expertise spans JavaScript, ReactJS, TailwindCSS, PHP, and Laravel, enabling me to create scalable front-end interfaces and robust 
           back-end architectures. I thrive in problem-solving, optimizing performance, and delivering seamless user experiences. 
           Whether developing from scratch or improving existing systems, I am dedicated to crafting efficient, maintainable, cutting-edge web 
           solutions.
             Let’s build something amazing together!
          </p>
          <a href="/michael-idam-resume.pdf" className='bg-indigo-700 hover:text-indigo-700 border-2 hover:bg-white hover:border-indigo-700 text-white no-underline px-4 py-2 font-bold text-lg' download='michael-idam-resume.pdf'>My Resume</a>
        </div>
        
      </div>
    </section>
  )
}

export default Herobar