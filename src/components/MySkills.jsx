import React from 'react';
import javascript from '../assets/images/javascript.png';
import laravel from '../assets/images/laravel.png';
import tailwind from '../assets/images/tailwindcss.png';
import reactjs from '../assets/images/reactjs.png';
import php from '../assets/images/php.jpg';



const MySkills = () => {
  return (

    <section className="bg-gray-2 pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark">
      <div className="container mx-auto">
      <h3 className="text-center text-4xl font-bold text-indigo-700 px-3 py-3 mb-8">My Skills</h3>
        <div className="-mx-4 flex flex-wrap mb-8">

          <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
          
            <div
              className="mb-10 overflow-hidden justify-center rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <div className="flex justify-center items-center p-4">
              <img src={javascript} alt="Javascript" className="w-full max-w-[120px] mx-auto" />
            </div>
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    Javascript
                  </a>
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                  JavaScript is the backbone of modern web development, allowing me to build interactive and dynamic user experiences. 
                  

                </p>

                
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
          <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                {/* Center the Image */}
                <div className="flex justify-center items-center p-4">
                  <img src={reactjs} alt="ReactJS" className="w-full max-w-[120px] mx-auto" />
                </div>

                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                    >
                      ReactJS
                    </a>
                  </h3>
                  
                  {/* Justify Paragraph Content */}
                  <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                    ReactJS enables me to create fast, responsive, and modular front-end interfaces. 
                  </p>
                </div>
              </div>

          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
            <div
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <div className="flex justify-center items-center p-4">
                  <img src={tailwind} alt="ReactJS" className="w-full max-w-[120px] mx-auto" />
                </div>
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    TailwindCSS
                  </a>
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                TailwindCSS allows me to style applications quickly with utility-first classes, ensuring clean, maintainable, and responsive designs.     
                </p>

               
              </div>
            </div>

          </div>
          
        </div>
        <div className="-mx-4 flex flex-wrap">

          <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
          
            <div
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <div className="flex justify-center items-center p-4">
                  <img src={php} alt="ReactJS" className="w-full max-w-[120px] mx-auto" />
                </div>
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    PHP
                  </a>
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                  PHP is a powerful server-side scripting language that I use to build robust and dynamic back-end applications. 
                </p>

                
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
            <div
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
             <div className="flex justify-center items-center p-4">
                  <img src={laravel} alt="ReactJS" className="w-full max-w-[120px] mx-auto" />
                </div>
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    Laravel
                  </a>
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                Laravel is my go-to PHP framework for building scalable, maintainable, and high-performance web applications. 
                
                </p>

               
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default MySkills