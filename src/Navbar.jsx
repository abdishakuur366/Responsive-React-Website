import logo from './assets/logo.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';

function Navbar() {
  const [nav, setNav] = useState(false);

  function hideMenu() {
    setNav(!nav);
  }

  return (
    <>
      <div className="w-full h-[82px] ">
        <div className="px-4 flex justify-between items-center w-full h-full bg-blue-600">
          <div className="items-center flex">
            <img src={logo} className="pr-4 w-50 h-16 rounded-lg" alt="this Logo img" />
            <h1 className="text-white font-bold">Class of 2020</h1>
          </div>
        </div>
        <div className="pr-5 flex">
          <ul className="hidden md:flex justify-between font-bold text-sm mr-10 text-white absolute top-9 right-0 h-2 w-62 ">
            <li className="pr-6 hover:text-red-500">Home</li>
            <li className="pr-6 hover:text-red-500">Service</li>
            <li className="pr-6 hover:text-red-500">Contact</li>
            <li className="pr-6 hover:text-red-500">AboutUs</li>
            <li className="pr-6 text-yellow-500 hover:text-slate-600">SignIn</li>
          </ul>
        </div>
        <div className="md:hidden flex justify-between font-bold text-sm mr-10 text-white absolute top-9 right-0 h-2 w-62 ">
          {!nav ?
            <Icon icon="ic:outline-menu" className="text-white w-12" onClick={hideMenu} />
           :
            <Icon icon="bxs:tag-x" className="text-white w-12" onClick={hideMenu} />
          }
        </div>
         {nav ? 
          <div className="md:hidden">
            <ul className="m:hidden font-bold text-sm mr-10 text-gray-600 bg-blue-200 w-full pr-4 rounded-br-full absolute">
              <li className="p-4">Home</li>
              <li className="p-4">Service</li>
              <li className="p-4">Contact</li>
              <li className="p-4">About Us</li>
              <li className="p-4 text-red-500 hover:text-slate-700">Sign in</li>
            </ul>
        </div> : ""}
    </div>
    </>
  );
}

export default Navbar;