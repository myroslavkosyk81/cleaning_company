import React from 'react'
import './header.css'
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <div className="listLinks">
        <Link className='links' to='/'>
        Home
        </Link>
        <Link className='links' to='/portfolio'>
          Portfolio
        </Link>
        <Link className='links' to='/portfolio2'>
          Portfolio2
        </Link>
        <Link className='links' to='/portfolio3'>
          Portfolio3
        </Link>
      </div>
      
   </div>
  )
}

export default Header