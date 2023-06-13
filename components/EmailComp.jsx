"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const EmailComp = ({ post, handleEdit, handleDelete, handleTagClick, onClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    // console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };
    //   // Generate a unique key for each email component
 const k = `${post.userName}`;
    // console.log(key);
    return (
      <div>
{post && (<div className="flex justify-between border-b py-1.5 px-6 bg-gray-100" onClick={onClick}>
      <Image
     src="/assets/icons/square.svg"
     alt="Guy"
     width={20}
     height={20}
     className="object-cover mr-3 rounded-full"
   />
   {/* Display the image */}
   <Image
     src={`/assets/images/${k}.png`} // Assuming your images are named using the unique key, e.g., user_email.jpg
     alt="Guy"
     width={20}
     height={20}
     className="object-cover mr-3 rounded-full"
   />

   <p className="w-[8rem] whitespace-nowrap text-xs font-semibold justify-center ">
     {" "}
     {post.userName}
   </p>
   <div className="flex items-center w-[16rem] text-xs sm:w-[50rem] truncate justify between  ">
     <p className="sm:w-[7rem] mr-2 truncate">{post.position}-</p>
     <p className="sm:w-[12rem] truncate "> {post.userEmail}</p>
     <p className="sm:w-[10rem] truncate ">{post.experience}</p>
     <p className="sm:w-[10rem] truncate"> {post.location}</p>
   <p className="sm:w-[5rem] truncate ">{post.employment}</p>
   </div>


   </div>)}
   {/* <p>here2</p> */}
      </div>
    );
  };

export default EmailComp;
