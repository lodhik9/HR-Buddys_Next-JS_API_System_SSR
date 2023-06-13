"use client";

import React from "react";
import EmailComp from "@components/EmailComp";
import DetailedView from "@components/DetailedView"
import Feed from "@components/Feed";

const Emails = () => {
  const emails = [
    {
      userName: "Debra Brown",
      position: "Product Owner",
      userEmail: "alma@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Cameron Williamson",
      position: "Product Owner",
      userEmail: "kenzi@example.com",
      experience: "9:00 AM ",
      location: "Berlin",
      employment: "Full time"
    },
    {
      userName: "Brooklyn Simmons",
      position: "Sales Manager",
      userEmail: "willie@example.com",
      experience: "Dec 3",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Jane Cooper",
      position: "Product Owner",
      userEmail: "rivera@example.com",
      experience: "Dec 2",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Leslie Alexander",
      position: "UI/UX Designer",
      userEmail: "bill@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Robert Fox",
      position: "Product Owner",
      userEmail: "deanna@example.com",
      experience: "9:00 AM ",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Jacob Jones",
      position: "Backend Developer",
      userEmail: "graham@example.com",
      experience: "Dec 3",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Savannah Nguyen",
      position: "Sales Manager",
      userEmail: "nevaeh@example.com",
      experience: "Dec 2",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Albert Flores",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Devon Lane",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "Hamburg",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "Full time"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Sales Manager",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Lorem!",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Holiday Special!",
      userEmail: "dolores@example.com",
      experience: "11:00 AM",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Lorem!",
      userEmail: "dolores@example.com",
      experience: "9:00 AM ",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Codepen!",
      userEmail: "dolores@example.com",
      experience: "Dec 3",
      location: "location",
      employment: "employment"
    },
    {
      userName: "Annette Black",
      position: "Lorem!",
      userEmail: "dolores@example.com",
      experience: "Dec 2",
      location: "location",
      employment: "employment"
    },
  ];
  return (
    <div className=" ">
        {/* <DetailedView /> */}
        <Feed />

      {/* {emails.map((email) => (
        <EmailComp
          userName={email.userName}
          position={email.position}
          userEmail={email.userEmail}
          experience={email.experience}
          location={email.location}
          employment={email.employment}
        />
      ))} */}
    </div>
  );
};

export default Emails;
