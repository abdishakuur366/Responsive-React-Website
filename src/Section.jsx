// import image from '../../assets/section.png';
import image from './assets/it.png';


import React from 'react';
import section from './Assets/it.png'


function Section() {

  return (
    <div className="w-full h-auto md:h-[350px] bg-slate-300">
      <div className=" md:grid block md:grid-cols-2 justify-between md:gap-2 px-2">
        <div>
          <h1 className=" font-bold text-2xl py-8">Hi, welcome to CA208 react Course </h1>
          <p className='pb-5'>Start your journey as developer here! </p>
          <button className=' px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-blue-500' >Get Started</button>

        </div>
        <div className='md:ml-auto'>
          <img src={section} className='w-79 h-[200px] mr-24 mt-10 rounded-md' alt="" />
        </div>

      </div>

    </div>
  );
}

export default Section;