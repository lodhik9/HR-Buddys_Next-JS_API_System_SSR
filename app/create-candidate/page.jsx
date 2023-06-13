"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateCandidate = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [can, setCan] = useState({
    userName: "",
    position: "",
    userEmail: "",
    experience: "",
    location: "",
    employment: "",
    department: "",
    telephone: ""
  });

  // This is CSR data fetching
  const createCandidate = async (e) => {
    // SSG: By Default the data fetching is SSG:Static Side Generation
    // SSR: For dynamic pages use {cache: 'no-store'}. SSR: Server Side Rendering
    // ISR: For dynamic data from static sides use {next:{revalidate:10}} ISR: Incremental Static generation

    e.preventDefault();
    setIsSubmitting(true);

    try {
      // console.log("candidate api");
      const response = await fetch("/api/candidate/new", {
        headers: {
          "Cache-Control":"no-store"
        },
        method: "POST",
        body: JSON.stringify({
          userName: can.userName,
          userId: session?.user.id,
          position: can.position,
          userEmail: can.userEmail,
          experience: can.experience,
          location: can.location,
          employment: can.employment,
          department: can.department,
          telephone: can.telephone,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
    router.push("/emails");
  };

  return (
    <Form
      type="Add"
      post={can}
      setPost={setCan}
      submitting={submitting}
      handleSubmit={createCandidate}
    />
  );
};

export default CreateCandidate;
