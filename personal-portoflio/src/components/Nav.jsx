import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  const menuRef = useRef();
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const btnOnClick = () => {
    menuRef.current.classList.toggle("open");
    firstRef.current.classList.toggle("trans-first");
    secondRef.current.classList.toggle("trans-second");
    thirdRef.current.classList.toggle("trans-third");
  };

  return (
    <nav className="nav">
      <h1 className="name">Abdallah.</h1>
      <ul className="menu" ref={menuRef}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div id="menu-btn" onClick={btnOnClick}>
        <span id="first" ref={firstRef}></span>
        <span id="second" ref={secondRef}></span>
        <span id="third" ref={thirdRef}></span>
      </div>
    </nav>
  );
}
export default Nav;
