"use client";

import { useState, useEffect } from "react";
import RightSideBar from "./RightSideBar";
import EmailComp from "./EmailComp";
import Image from "next/image";
import Link from "next/link";

const CandidateCardList = ({
  data,
  handleTagClick,
  handleEmailClick,
  isMenuOpen,
  toggleMenu,
  selectedEmail,
  selectedEmailImage,
  handleNameChange,
  handleDepChange,
  postID,
  name,
  dep
}) => {
  return (
    // <div className='email-list'>
    //   {data.map((post) => (
    //     // <p>here</p>
    //     <EmailComp
    //       key={post._id}
    //       post={post}
    //       handleTagClick={handleTagClick}
    //     />
    //   ))}
    // </div>

    <div>
      <div className="email-list">
        {data.map((post, index) => (
          <div
            key={index}
             onClick={() => handleEmailClick(post)}
          >
            <EmailComp
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          </div>
        ))}
      </div>

      <RightSideBar
        isMenuOpen={isMenuOpen}
        selectedEmail={selectedEmail}
        selectedEmailImage={selectedEmailImage}
        toggleMenu={toggleMenu}
        handleNameChange={handleNameChange}
        handleDepChange={handleDepChange}
        name={name}
        dep={dep}
        postID={postID}
      />
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedEmailImage, setSelectedEmailImage] = useState(null); // Track the selected email
  const [postID, setPostID] = useState(null);

  const [name, setName] = useState("");
  const [dep, setDep] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDepChange = (e) => {
    setDep(e.target.value);
  };

  const fetchPosts = async () => {
    // SSG: By Default the data fetching is SSG:Static Side Generation
    // SSR: For dynamic pages use {cache: 'no-store'}. SSR: Server Side Rendering
    // ISR: For dynamic data from static sides use {next:{revalidate:10}} ISR: Incremental Static generation

    const response = await fetch("/api/candidate", {
      headers: {
        "Cache-Control":"no-store"
      },
    });
    const data = await response.json();

    // console.log(data + "fetched data");

    setAllPosts(data);
  };

  // This is CSR
  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.userName) ||
        regex.test(item.userEmail)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    setSelectedEmailImage(`/assets/images/${email.userName}.png`);
    setIsMenuOpen(true);
    setPostID(email._id);
  };

  return (
    <section className="">
      {/* <form className='relative w-full flex-center'>
      <input
        type='text'
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
      />
    </form> */}

      {/* All Prompts */}
      {searchText ? (
        <CandidateCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
          handleEmailClick={handleEmailClick}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          selectedEmail={selectedEmail}
          selectedEmailImage={selectedEmailImage}
          postID={postID}
          handleNameChange={handleNameChange}
          handleDepChange={handleDepChange}
          // name={name}
          // dep={dep}
        />
      ) : (
        <CandidateCardList
          data={allPosts}
          handleTagClick={handleTagClick}
          handleEmailClick={handleEmailClick}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          selectedEmail={selectedEmail}
          selectedEmailImage={selectedEmailImage}
          postID={postID}
          handleNameChange={handleNameChange}
          handleDepChange={handleDepChange}
          // name={name}
          // dep={dep}
        />
      )}
    </section>
  );
};

export default Feed;
