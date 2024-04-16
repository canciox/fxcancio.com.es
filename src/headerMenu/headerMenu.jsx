import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
const [ menu , setmenu] = useState(false)
const toggleMenu = () =>{
  setmenu(!menu)
}

  return (
    <div className="MenuBar">
      <div className="divPictureBtn">
      <img className="MyPicture" src="/Xavi.jpg" alt="" />
      <button  onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="btnMenu" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button></div>
      <nav className={`headerNav ${ menu? 'isActive' : ''}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/knowledges">KNOWLEDGES</Link>
          </li>

          <li>
            <Link to="/proyects">PROYECTS</Link>
          </li>
          <li>
            <Link to="/me">ABOUT XAVI</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
