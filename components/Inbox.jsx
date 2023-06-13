"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Category from "./Category";
import { useSession } from "next-auth/react";

const Inbox = () => {
  const { data: session } = useSession();
  const categories = [
    {
      logo: (
        <Image
          src="/assets/icons/selector.svg"
          alt="Guy"
          width={50}
          height={25}
          className="object-cover rounded-full"
        />
      ),
      //   logo: <IoMailOutline className="w-[1.3rem] h-[1.3rem]  " />,
      title: "FULL NAME",
      css: "hover:text-yellow-700 focus:text-yellow-500",
    },
    {
      logo: (
        <Image
          src="/assets/icons/selector.svg"
          alt="Guy"
          width={50}
          height={25}
          className="object-cover rounded-full"
        />
      ),

      //   logo: <MdPermMedia className="w-[1.3rem] h-[1.3rem]" />,
      title: "POSITION",
      css: "hover:text-purple-700  focus:text-purple-500",
    },
    {
      logo: (
        <Image
          src="/assets/icons/selector.svg"
          alt="Guy"
          width={50}
          height={25}
          className="object-cover rounded-full"
        />
      ),

      //   logo: <BiMoney className="w-[1.3rem] h-[1.3rem]" />,
      title: "EMAIL",
      css: "hover:text-green-700 focus:text-green-500",
    },
    {
      logo: (
        <Image
          src="/assets/icons/selector.svg"
          alt="Guy"
          width={50}
          height={25}
          className="object-cover rounded-full"
        />
      ),

      //   logo: <BiNews className="w-[1.3rem] h-[1.3rem]" />,
      title: "EXPERIENCE",
      css: "hover:text-gray-700 focus:text-gray-500",
    },
    {
      logo: (
        <Image
          src="/assets/icons/selector.svg"
          alt="Guy"
          width={50}
          height={25}
          className="object-cover rounded-full"
        />
      ),

      //   logo: <BsCardChecklist className="w-[1.3rem] h-[1.3rem]" />,
      title: "LOCATION",
      css: "hover:text-blue-700 focus:text-blue-500",
    },
    {
      logo: (
        <Image
          src="/assets/icons/selector.svg"
          alt="Guy"
          width={50}
          height={25}
          className="object-cover rounded-full"
        />
      ),

      // logo: <BsCardChecklist className="w-[1.3rem] h-[1.3rem]" />,
      title: "EMPLOYMENT",
      css: "hover:text-blue-700 focus:text-blue-500",
    },
  ];
  return (
    <div className="pt-2.5  ">
      {/* Edit */}
      <div className="flex items-center justify-between  text-gray-500 border-b ">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <p className=" whitespace-nowrap font-semibold text-[9px]">
            New (30)
          </p>
          <p className=" whitespace-nowrap font-semibold text-[9px]">
            Screening (12)
          </p>
          <p className=" whitespace-nowrap font-semibold text-[9px]">
            Interview (26)
          </p>
          <p className=" whitespace-nowrap font-semibold text-[9px]">
            Test (8)
          </p>
          <p className=" whitespace-nowrap font-semibold text-[9px]">
            Employed (6)
          </p>
          <p className=" whitespace-nowrap font-semibold text-[9px]">
            Rejected (34)
          </p>

          {/* <BiPlusCircle className="w-[1.4rem] h-[1.4rem] " />
          <BsFillMenuButtonWideFill className="w-[1.1rem] h-[1.1rem]" />
          <GoSettings className="w-[1.3rem] h-[1.3rem]" /> */}
        </div>
        {/* Right Side */}
        <div className="flex items-center font-medium ">
          <div className="flex md:gap-2 pb-2.5">
            <button type="button" style={{ color: '#5248F0', backgroundColor: '#F6F6FF', borderColor: "white" }} className="outline_btn whitespace-nowrap">
            Filter
            </button>
            <button type="button" style={{ color: '#5248F0' , backgroundColor: '#F6F6FF', borderColor: 'white'}}  className= " outline_btn whitespace-nowrap ">
            By relevance
            </button>
            {session?.user ? ( <Link href="/create-candidate" className="blue_btn whitespace-nowrap">
            + Add New
            </Link>):(
              <></>
            )}
          
          </div>
        </div>
      </div>
      {/* Categories */}

      <div className="flex items-center justify-between px-6  border-b py-2 text-gray-500">
        <Image
          src="/assets/icons/square.svg"
          alt="Guy"
          width={20}
          height={15}
          className="object-cover mr-2 rounded-full"
        />
        
        {categories.map((category) => (
          <Category
            logo={category.logo}
            title={category.title}
            css={category.css}
          />
        ))}
      </div>
      {/* Mails */}
    </div>
  );
};

export default Inbox;
