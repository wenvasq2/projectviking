import React from 'react';


const Main: React.FC = () => {
  return (
    <section className="text-black body-font lg:pt-20">
      {/* <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>We are making </span>
            <br className="hidden lg:block"></br>
            Stunning websites
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            nine4 is a free to use template website for websites made with{' '}
            <a href="https://nextjs.org/" className="underline">
              Next.js
            </a>{' '}
            and styled with Tailwind CSS
          </p>
        </div>
      </div> */}
      <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <img
          className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="hero"
          src="./images/mainlog.png"
        ></img>
      </div> 
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
             <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src=""
            ></img> 
            
          </div>
       
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Free
                </h2>
                <p className="leading-relaxed text-lg">
                  All of our templates are 100% free forever.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Responsive
                </h2>
                <p className="leading-relaxed text-lg">
                  All our templates come with full responsiveness straight out
                  of the box.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  SEO Friendly
                </h2>
                <p className="leading-relaxed text-lg">
                  Our templates have the best SEO practices ensuring you get to
                  the top.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Fast
                </h2>
                <p className="leading-relaxed text-lg">
                  The fastest websites you can get.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Google Analytics Supported
                </h2>
                <p className="leading-relaxed text-lg">
                  All our templates come with full support for Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              Contact Us
            </h2>
            {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Here is our company
            </p> */}
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>      
          </div>
            {/* <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="./images/placeholder.png"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Chris
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Developer</h3>
                      <p className="mb-4">
                        Chris is part of our front-end team providing amazing
                        websites.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        

                       
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
      </section>
      <section className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Phone #
                </h2>
                <p className="leading-relaxed text-lg">
                  (555)555-5555
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Instagram:
                </h2>
                <p className="leading-relaxed text-lg">
                  @igaccount
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Email
                </h2>
                <p className="leading-relaxed text-lg">
                  Sample email
                </p>
              </div>
            </div>
      </div>
      </section>
    </section>
  );
};

export default Main;