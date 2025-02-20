import React from 'react'

const Contact = () => {
  return (
    <section class="bg-indigo-500 py-20 lg:py-[120px] dark:bg-dark">
      <div class="container mx-auto">
        <div
          class="relative z-10 overflow-hidden rounded bg-primary px-8 py-12 md:p-[70px]"
        >
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <span class="mb-4 block text-base font-medium text-white">
                Need a Developer for your next project?
              </span>
              <h2
                class="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0"
              >
                <span class="xs:block"> Get in touch with me </span>
                <span>let's bring that amazing idea ot life</span>
              </h2>
            </div>
            <div class="w-full px-4 lg:w-1/2">
              <div class="flex flex-wrap lg:justify-end">
                <a
                  href="https://wa.link/061lw8"
                  class="hover:bg-shadow-1 hover:bg-green-900 my-1 mr-4 inline-flex rounded-md bg-green-700 px-7 py-3 text-base font-medium text-white transition"
                >
                  Whatsapp Me
                </a>
                <a
                  href="mailto:princemicare@gmail.com"
                  class="my-1 inline-flex rounded-md hover:bg-indigo-950 bg-indigo-800 px-7 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div>
            <span class="absolute left-0 top-0 z-[-1]">
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.07" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span class="absolute bottom-0 right-0 z-[-1]">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="173"
                  cy="178.5"
                  rx="173"
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.07" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact