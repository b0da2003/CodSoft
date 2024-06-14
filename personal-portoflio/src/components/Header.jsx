import profilePicture from "../assets/images/profile-HD1.svg";
import "../styles/header.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {

    gsap.registerPlugin(useGSAP);
    useGSAP( () => {
        gsap.to(".text-center",{
            x:0,
            opacity:1,
            duration:1
        });

        gsap.to(".image",{
            opacity:1,
            y:0,
            duration:1
        })
    });
  return (
    <header className="header">
      <div className="main-text">
        <div className="text-center">
          <span className="postion"> Front-end Developer </span>
          <h1 className="who-i-am"> I'm Abdallah Ali </h1>
          <div className="contact">
            <a href="https://www.linkedin.com/in/abdallah-ali-82031b2aa/">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="https://github.com/b0da2003">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pic-box">
        <img className="image" src={profilePicture} alt="Profile Picture" />
      </div>
    </header>
  );
}
export default Header;
