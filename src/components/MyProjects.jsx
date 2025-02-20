import React from 'react';
import quantum from '../assets/images/trade_investment.png';
import erp from '../assets/images/emp_management.png';
import ecommerce from '../assets/images/faramagic_kiddies.png';
import solar from '../assets/images/solar_company.png';

const MyProjects = () => {
  return (
    <section id="projects" className="bg-gray-2 pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark">
          <div className="container mx-auto">
          <h3 className="text-center text-4xl font-bold text-indigo-700 px-3 py-3 mb-8">My Projects</h3>
          <p class="text-base text-body-color dark:text-dark-6">
                Some of my projects and solutions
              </p>
            <div className="-mx-4 flex flex-wrap mb-8">
    
              <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
              
                <div
                  className="mb-10 overflow-hidden justify-center rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
                >
                  <div className="flex justify-center items-center p-4">
                  <img src={quantum} alt="Javascript" className="w-full mx-auto" />
                </div>
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                      >
                        Trading & Investment Platform
                      </a>
                    </h3>
                    <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                      Developed a Trading and Investment Platform using ReactJS and Taiwlindcss for Front End and PHP for the Backend
                      
    
                    </p>
    
                    <a
                  href="https://quantumbridgeus.com"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 dark:border-dark-3 dark:text-dark-6"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/codeking-mike/quantumbridge"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 dark:border-dark-3 dark:text-dark-6"
                >
                  GitHub Link
                </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
              <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                    {/* Center the Image */}
                    <div className="flex justify-center items-center p-4">
                      <img src={erp} alt="ReactJS" className="w-full mx-auto" />
                    </div>
    
                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                        >
                          Employee Management System
                        </a>
                      </h3>
                      
                      {/* Justify Paragraph Content */}
                      <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                        Developed an Employee Management Solution to manage employee information, task scheduling and attendance monitoring 
                      </p>
                      <a
                  href="https://app.systemtrustng.com"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 dark:border-dark-3 dark:text-dark-6"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/codeking-mike/systemtrust"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 dark:border-dark-3 dark:text-dark-6"
                >
                  GitHub Link
                </a>
                    </div>
                  </div>
    
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3 shadow-md">
                <div
                  className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
                >
                  <div className="flex justify-center items-center p-4">
                      <img src={ecommerce} alt="ReactJS" className="w-full mx-auto" />
                    </div>
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                      >
                        Ecommerce Solution
                      </a>
                    </h3>
                    <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                    Developed an ecommerce solution using Laravel, TailwindCSS     
                    </p>
                    <a
                  href="https://faramagickiddies.com"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 dark:border-dark-3 dark:text-dark-6"
                >
                  Live Demo
                </a>
                   
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
                      <img src={solar} alt="ReactJS" className="w-full mx-auto" />
                    </div>
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="https://systemtrustng.com"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                      >
                        A Corporate Website
                      </a>
                    </h3>
                    <p className="mb-2 text-base leading-relaxed text-body-color text-justify">
                      Developed a corporate website for a solar energy company using ReactJS and Tailwindcss
                    </p>
    
                    <a
                  href="https://systemtrustng.com"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 dark:border-dark-3 dark:text-dark-6"
                >
                  Live Demo
                </a>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
  )
}

export default MyProjects