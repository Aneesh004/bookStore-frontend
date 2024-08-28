import React from 'react';

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-[-20px] mb-0 dark:bg-slate-900 dark:text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className='space-y-12'>
            <h1 className='text-6xl text-black font-bold dark:text-white'>
              Where <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>curiosity</span> meets constant <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>discovery</span>
            </h1>
            <p className='text-black dark:text-white'>
              Welcome to <strong>Readings & Rambles</strong>, where you can immerse yourself in the world of literature like never before. Explore the enchanting world of <span className='font-bold text-gray-900 dark:text-gray-100'>Narnia</span>, uncover the mysteries of <span className='font-bold text-gray-900 dark:text-gray-100'>Hogwarts</span>, and wander through the epic landscapes of <span className='font-bold text-gray-900 dark:text-gray-100'>Middle-earth</span>. Delve into the detective tales of <span className='font-bold text-gray-900 dark:text-gray-100'>Sherlock Holmes</span>, explore the dystopian future of <span className='font-bold text-gray-900 dark:text-gray-100'>Orwell’s 1984</span>, and experience the tragic romance of <span className='font-bold text-gray-900 dark:text-gray-100'>Gatsby’s West Egg</span>. Join our community as we journey through these literary classics and discover new stories together, making every reading experience unforgettable.
            </p>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center mt-8">
          <img src="/banner.png" className='w-90% h-auto ml-20' alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
