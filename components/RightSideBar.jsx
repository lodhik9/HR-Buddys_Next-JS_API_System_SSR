"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const RightSideBar = ({
  isMenuOpen,
  selectedEmail,
  selectedEmailImage,
  toggleMenu,
  postID
}) => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const candidateId = searchParams.get("id");
  const candidateId = postID;
  

  const [post, setPost] = useState({
    userName: "",
    position: "",
    userEmail: "",
    experience: "",
    location: "",
    employment: "",
    department: "",
    telephone: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

  // This CSR data fetching
  useEffect(() => {
    // SSG: By Default the data fetching is SSG:Static Side Generation
    // SSR: For dynamic pages use {cache: 'no-store'}. SSR: Server Side Rendering
    // ISR: For dynamic data from static sides use {next:{revalidate:10}} ISR: Incremental Static generation

    const getPromptDetails = async () => {
      const response = await fetch(`/api/candidate/${candidateId}`,{
        headers: {
          "Cache-Control":"no-store"
        },
      });
      const data = await response.json();

      setPost({
        userName: data.userName,
        position: data.position,
        userEmail: data.userEmail,
        experience: data.experience,
        location: data.location,
        employment: data.employment,
        department: data.department,
        telephone: data.telephone,
      });
    };

    if (candidateId) getPromptDetails();
  }, [candidateId]);

  const updateCandidate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // console.log("Updating candidate:", candidateId);
    if (!candidateId) return alert("Missing candidateId!");

    try {
      const response = await fetch(`/api/candidate/${candidateId}`, {
        headers: {
          "Cache-Control":"no-store"
        },
        method: "PATCH",
        body: JSON.stringify({
          userName: post.userName,
          position: post.position,
          userEmail: post.userEmail,
          experience: post.experience,
          location: post.location,
          employment: post.employment,
          department: post.department,
          telephone: post.telephone,
        }),
      });

      if (response.ok) {
       
          router.push("/");
          setTimeout(() => {
            router.push("/emails");
          }, 25);
       
     
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        {/* Render the detailed view content here */}
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* when the email is clicked the sidebar slides from right */}
        {/* put the detailed component here */}
        {/* Put the check if selectedEmail exist then render this */}
        {selectedEmail && (
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            {/* First Div */}
            <div className="sticky top-0  flex  items-right justify-between  mr-0 py-1 px-6  bg-gray-50  ">
              {/* leftSide */}
              <div className="flex items-center mb-4 gap-3">
                {/* Display the image */}
                <Image
                  src={selectedEmailImage} // Assuming your images are named using the unique key, e.g., user_email.jpg
                  alt="Guy"
                  width={60}
                  height={35}
                  className="object-cover mr-3 rounded-full"
                />

                <div
                  className="flex gap-3 text-xs whitespace-nowrap"
                  style={{ color: "#5A5788" }}
                >
                  <div>
                    <p className=" text-xl text-bold text-black">
                      {selectedEmail.userName}
                    </p>
                    <div className="flex gap-2">
                      <Image
                        src="/assets/icons/user.svg"
                        alt="Logo"
                        width={50}
                        height={25}
                        className="w-[1rem] h-[1rem]"
                      />
                      <p className="">{selectedEmail.position}</p>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src="/assets/icons/pin.png"
                        alt="Logo"
                        width={50}
                        height={25}
                        className="w-[1rem]  h-[1rem]"
                      />
                      <p className=" ">{selectedEmail.department}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex gap-2">
                      <Image
                        src="/assets/icons/pin.png"
                        alt="Logo"
                        width={50}
                        height={25}
                        className="w-[1rem]  h-[1rem]"
                      />
                      <p>{selectedEmail.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src="/assets/icons/clock.png"
                        alt="Logo"
                        width={50}
                        height={25}
                        className="w-[1rem]  h-[1rem]"
                      />

                      <p>{selectedEmail.employment}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex gap-2">
                      <Image
                        src="/assets/icons/mobile.png"
                        alt="Logo"
                        width={50}
                        height={25}
                        className="w-[1rem]  h-[1rem]"
                      />

                      <p>{selectedEmail.telephone}</p>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src="/assets/icons/mail.svg"
                        alt="Logo"
                        width={50}
                        height={25}
                        className="w-[1rem]  h-[1rem]"
                      />

                      <p>{selectedEmail.userEmail}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center px-6 mr-12 gap-1">
                <div className="bg-color-white mt-2  right-2 rounded-full ">
                  <Image
                    src="/assets/icons/horizontal.png"
                    alt="Guy"
                    width={25}
                    height={13}
                    className="object-cover rounded-full"
                  />
                </div>

                <div className="flex items-center gap-3  ">
                  <div className="w-[35px] h-[35px] flex p-[2px] ">
                    <Link
                      href="/create-prompt"
                      className="blue_btn whitespace-nowrap"
                    >
                      Edit Data
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Div */}
            <div className="sticky top-0  flex gap-4 items-right  mr-0 py-1 px-6  bg-gray-50 ">
              <div className="flex items-center ">
                <Link
                  href="/create-prompt"
                  className="blue_btn whitespace-nowrap"
                >
                  Main Information
                </Link>
              </div>
              <div className="flex items-center  ">
                <Link href="/create-prompt" className=" whitespace-nowrap">
                  Salary Data
                </Link>
              </div>
              <div className="flex items-center  ">
                <Link href="/create-prompt" className=" whitespace-nowrap">
                  Documents attached
                </Link>
              </div>
            </div>
            {/* Third Div */}
            <div className="flex py-3 px-3 gap-3">
              {/* Left Div */}
              <div className="w-full">
                <p> Personal Data</p>
                {/* FORM for editing */}
                {/* <form
                  onSubmit={() => {}}
                  className="mt-5 w-full max-w-2xl flex flex-col gap-3 "
                >
                  <label>
                    <label htmlFor="name" className="text-xs">
                      Name:
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder=""
                      required
                      className="form_input border"
                    />
                  </label>

                  <label>
                    <label htmlFor="dep" className="text-xs">
                      Department:
                    </label>
                    <input
                      id="dep"
                      value={dep}
                      onChange={handleDepChange}
                      type="text"
                      placeholder=""
                      required
                      className="form_input border"
                    />
                  </label>

                  <label>
                    <label htmlFor="loc" className="text-xs">
                      Location:
                    </label>
                    <input
                      id="loc"
                      value={dep}
                      onChange={handleDepChange}
                      type="text"
                      placeholder=""
                      required
                      className="form_input border"
                    />
                  </label>
                  <label>
                    <label htmlFor="time" className="text-xs">
                      DOB:
                    </label>
                    <input
                      id="time"
                      value={dep}
                      onChange={handleDepChange}
                      type="text"
                      placeholder=""
                      required
                      className="form_input border"
                    />
                  </label>

                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                      Cancel
                    </Link>

                    <button
                      type="submit"
                      //    disabled={submitting}
                      className="px-5 py-1.5 text-sm  blue_btn rounded-full text-white"
                    >
                      Confirm
                    </button>
                  </div>
                </form> */}
                <Form
                  type="Edit"
                  post={post}
                  setPost={setPost}
                  submitting={submitting}
                  handleSubmit={updateCandidate}
                />
              </div>
              {/* Right Div */}
              <div>
                <p>CV Preview</p>
                <Image
                  src="/assets/images/cv.png"
                  alt="Guy"
                  width={900}
                  height={900}
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
