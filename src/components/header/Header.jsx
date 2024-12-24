import React, { useState, useEffect, useRef } from "react";
import './header.css'
import { Link} from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Реф для меню

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="menuContainer">
      <nav className='navbar'ref={menuRef}>
      {/* Кнопка для мобільного меню */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <Link className='links' to='/'>
          <li onClick={closeMenu}>Home</li>
        </Link>
        <Link className='links' to='/house'>
          <li onClick={closeMenu}>House</li>
        </Link>
        <Link className='links' to='/apartment'>
          <li onClick={closeMenu}>Apartment</li>
        </Link>
        <Link className='links' to='/office'>
          <li onClick={closeMenu}>Office</li>
        </Link>
        <Link className='links' to='/contact'>
          <li onClick={closeMenu}>Contact Us</li>
        </Link>
        </ul>
        {/* Скляний фон для мобільного меню */}
      {isOpen && <div className="glass-background" onClick={closeMenu}></div>}
      
   </nav>
    </div>
    
  )
}

export default Header


// import React, { useState } from "react";
// import './header.css'
// import { Link} from "react-router-dom";

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="listLinks">
//         <Link className='links' to='/'>
//         Home
//         </Link>
//         <Link className='links' to='/portfolio'>
//           Portfolio
//         </Link>
//         <Link className='links' to='/portfolio2'>
//           Portfolio2
//         </Link>
//         <Link className='links' to='/portfolio3'>
//           Portfolio3
//         </Link>
//       </div>
      
//    </div>
//   )
// }

// export default Header