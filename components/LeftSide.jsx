"use client";

import Image from "next/image";
import SideBtn from "./SideBtn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const LeftSide = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const buttons = [
    {
      icon: (
        <Image
          src="/assets/icons/line.png"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Dashboard",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/mail.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Inbox",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/calendar.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Calendar",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/users.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Employees",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/wallet.png"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Payroll",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/document.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Documents",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/bank.png"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Departments",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/briefcase.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Jobs",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/candidate.png"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Candidates",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/user.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Profile",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/cog.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Settings",
      path: "/emails",
    },
    {
      icon: (
        <Image
          src="/assets/icons/help.svg"
          alt="Logo"
          width={100}
          height={50}
          className="w-[1.7rem]  h-[1.7rem]"
        />
      ),
      title: "Help",
      path: "/emails",
    },
  ];

  return (
    <div className="sticky top-0 mr-auto pr-5 lg:flex flex-col w-[15rem] h-screen bg-indigo-950">
      {/* Left Section */}
      <Link href="/" className="flex gap-2 flex-center">
        <div className="flex items-center gap-3">
          <div className="w-14 h-[2.5rem] mt-4 ml-4 mb-6 rounded-[0.5rem]  flex items-center  b-red-600">
            <Image
              src="/assets/icons/ellipse.png"
              alt="Logo"
              width={35}
              height={35}
              className="object-cover w-full h-full rounded-[0.5rem]"
            />
          </div>
          <span className="  whitespace-nowrap   text-white">HR Buddys</span>
        </div>
      </Link>
      {/* Buttons */}
      <div className="pl-6 pt-4 space-y-4">
    
        {buttons.map((button, index) => (
            <Link
              href={button.path}
              key={index}
              className={`text-sm text-gray-200 flex items-center gap-2 
              `}
        
            >
              <SideBtn
                icon={button.icon}
                title={button.title}
                path={button.path}
              />
            </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      
      <div className=" flex relative pl-3 pt-6 space-y-3">
        {session?.user ? (
          <div className="w-[35px] h-[35px] flex p-[2px] bg-[#98d4fa] rounded-full">
          <div className="flex">
            <Image
              src={session?.user.image}
              width={47}
              height={47}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            <div className="text-xs ml-2 ">
              <p
                className=" text-white whitespace-nowrap"
                style={{ fontSize: "0.6rem" }}
              >
                {session?.user.name}
              </p>
              <p className=" text-slate-500" style={{ fontSize: "0.6rem" }}>
                {session?.user.email}
              </p>
            </div>

            {toggleDropdown && (
              <div className="dropdownnew">
                {/* <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link> */}
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full blue_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
          </div>
        ) : (
          <>
            <div className="pl-6 pt-6">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="blue_btn  "
                  >
                    Sign in
                  </button>
                ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default LeftSide;
