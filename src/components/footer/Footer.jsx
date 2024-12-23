import React from "react";
import './footer.css'
import { Link} from "react-router-dom";

const Footer = () => {
 

  return (
    <div className="footerContainer">
      <div className="text">
        Developed by
      </div>
      <Link className='links' to='https://portfolio-mk-2024.vercel.app/'>
        <div className="imgContainer">
          <img src="/BSB_logo.png" alt="logo" />
      </div>
      </Link>
    </div>
    
  )
}

export default Footer