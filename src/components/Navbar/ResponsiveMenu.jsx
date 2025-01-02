import React from "react";
import { FaUserCircle } from "react-icons/fa";
import img1 from '../../assets/2.png'

import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col
       justify-between bg-[rgba(255,153,0,1)] dark:bg-gray-900 dark:text-white px-4 pb-6 pt-2 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
       
        <div className="flex">
          


          <h1 className="flex justify-center items-center gap-3">
               <img src={img1} className="w-12 h-12"/>
 <span className="text-secondary font-bold text-2xl">NEOSAO</span>
          </h1>
           </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
      
      </div>
    </div>
  );
};

export default ResponsiveMenu;
