import React from 'react'

const DetailedPage = () => {
  return (
    <div>
         <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
    </div>
  )
}

export default DetailedPage