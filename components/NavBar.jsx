import React from "react";
import Image from 'next/image';
import { BiBell } from 'react-icons/bi';
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="sticky top-0  flex  items-right justify-between  mr-0 py-1 px-6 border-b bg-gray-50  ">
      <div className="flex items-center gap-3">
       
        <span className="  whitespace-nowrap mb-4 font-semibold desc text-black">Candidates</span>
      </div>
      {/* Input */}
      <div className=" lg:block w-full  ">
        <div className="flex items-center mx-auto max-w-[10rem] relative   ">
          {/* <input
            type="search"
            className="bg-slate-200 py-1 rounded-full w-full  pl-5 outline-0"
            placeholder="Search"
          /> */}
          {/* <div className="bg-[#98d4fa] mt-11  right-2 p-2 rounded-full ">
            <FiSearch className=" mr-1" />
          </div> */}
        </div>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* <GrAppsRounded classN ame="w-6 h-6 text-[#98d4fa]" />{" "} */}
        <div className="bg-color-white mt-2  right-2 rounded-full ">
            <FiSearch className=" mr-1" />
          </div>
          <div className="bg-color-white mt-2  right-2 rounded-full ">
          <BiBell size={20} color="gray" />
          </div>
          
        {/* <div className="flex items-center gap-3 border-2 rounded-full border-[#98d4fa]">
          <div className="w-[35px] h-[35px] flex p-[2px] bg-[#98d4fa] rounded-full">
        <Image src="/assets/images/guy.jpg" alt="Guy" width={100} height={50} className="object-cover rounded-full" />

          </div>
       
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
