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
          className="object-cover object-center w-full mb-10 rounded-lg shadow-md"
          alt="hero"
          src="./images/mainlog.png"
        ></img>
      </div> 
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
        </div>
      </section>
      <section className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-5 lg:items-start items-center">
              <div className="flex-grow">
                <h3 className="text-white text-2xl title-font font-medium mb-3">
                  Phone:
                  <a className="ml-3 text-white leading-relaxed text-lg" href="tel:5304872305">
               
                  (530)487-2305
              
                </a>
                </h3>
                
              </div>
            </div>
            <div className="flex flex-col mb-5 lg:items-start items-center">
              <div className="flex-grow">
                <h3 className="text-white text-2xl title-font font-medium mb-3">
                  Instagram:
                  <a className="ml-3 leading-relaxed text-white text-lg" href="https://www.instagram.com/viking_project_fitness">
                  
                    @viking_project_fitness
                
                </a>
                </h3>
               
              </div>
            </div>
            <div className="flex flex-col mb-5 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Email: 
                  <a className="ml-3 leading-relaxed text-white text-lg" href="mailto:vikingprojectfit@gmail.com">
                  vikingprojectfit@gmail.com 
                  </a>
                </h2>
              </div>
            </div>
      </div>
      </section>
    </section>
  );
};

export default Main;