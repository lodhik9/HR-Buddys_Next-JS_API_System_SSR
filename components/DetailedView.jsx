"use client";

import { useState } from "react";
import EmailComp from "./EmailComp";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const DetailedView = () => {
  const { data: session } = useSession();
  const emails = [
    {
      userName: "Debra Brown",
      position: "Product Owner",
      userEmail: "alma@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Cameron Williamson",
      position: "Product Owner",
      userEmail: "kenzi@example.com",
      experience: "9:00 AM ",
      location: "Berlin",
      employment: "Full time",
    },
    {
      userName: "Brooklyn Simmons",
      position: "Sales Manager",
      userEmail: "willie@example.com",
      experience: "Dec 3",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Jane Cooper",
      position: "Product Owner",
      userEmail: "rivera@example.com",
      experience: "Dec 2",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Leslie Alexander",
      position: "UI/UX Designer",
      userEmail: "bill@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Robert Fox",
      position: "Product Owner",
      userEmail: "deanna@example.com",
      experience: "9:00 AM ",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Jacob Jones",
      position: "Backend Developer",
      userEmail: "graham@example.com",
      experience: "Dec 3",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Savannah Nguyen",
      position: "Sales Manager",
      userEmail: "nevaeh@example.com",
      experience: "Dec 2",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Albert Flores",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Devon Lane",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "Full time",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Lorem!",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Holiday Special!",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Lorem!",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Codepen!",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment",
    },
    {
      userName: "Annette Black",
      position: "Lorem!",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null); // Track the selected email

  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [selectedEmailImage, setSelectedEmailImage] = useState(null);

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleDepChange = (e) => {
  //   setDep(e.target.value);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    setSelectedEmailImage(`/assets/images/${email.userName}.png`);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setSelectedEmail(null);
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Render your email list here */}
      <div className="email-list">
        {emails.map((email, index) => (
          <div key={index} onClick={() => handleEmailClick(email)}>
            <EmailComp
              userName={email.userName}
              position={email.position}
              userEmail={email.userEmail}
              experience={email.experience}
              location={email.location}
              employment={email.employment}
            />
          </div>
        ))}
      </div>

      {selectedEmail && (
        <div className="detailed-view">
          {/* <EmailComp
              userName={selectedEmail.userName}
              position={selectedEmail.position}
              userEmail={selectedEmail.userEmail}
              experience={selectedEmail.experience}
              location={selectedEmail.location}
              employment={selectedEmail.employment}
            /> */}
        </div>
      )}

      {/* Attach click event handler to each email */}
      {/* <EmailComp onClick={handleEmailClick} /> */}

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
                      <p className=" ">IT Department</p>
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

                      <p>+49 172 356 57 67</p>
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
                <form
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
                </form>
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
    </div>
  );
};

export default DetailedView;
