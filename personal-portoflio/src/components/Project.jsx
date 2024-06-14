import ProjectCard from "./Card.jsx";
import Nav from "./Nav.jsx";
import "../styles/project.css";

import Dashboard from "../assets/images/dashboard.png";
import Sunny from "../assets/images/sunnday.png";
import Notify from "../assets/images/notify.png";
import Email from "../assets/images/email-confirm.png";
import QAFs from "../assets/images/QAFs.png";
import CardGenrator from "../assets/images/card-genrator.png";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JS from "../assets/images/js.png";
import Tailwind from "../assets/images/tailwind.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Project() {

    gsap.registerPlugin(useGSAP);
    
    useGSAP( () => {
        gsap.from(".text-pro" , {
            opacity:0,
            duration:0.5,
            ease:"power1.in"       
        },"")
    });

  return (
    <>
      <Nav />
      <section className="project-section">
        <div className="project-text">
          <h1 className="text-pro">PROJECTS</h1>
          <span className="text-normal">Tap card for live Review</span>
        </div>

        <div className="project-cards">
          <ProjectCard
            img={CardGenrator}
            skill1={HTML}
            skill2={CSS}
            skill3={JS}
            link="https://b0da2003.github.io/Card-Genrator/"
            name="Interactive card details form"
          />
          <ProjectCard
            img={Dashboard}
            skill1={HTML}
            skill2={CSS}
            skill3={JS}
            link="https://b0da2003.github.io/Dashboard/"
            name="Social media dashboard with theme switcher"
          />
          <ProjectCard
            img={Sunny}
            skill1={HTML}
            skill2={Tailwind}
            skill3={JS}
            link="https://b0da2003.github.io/SunnyDay-LandingPage/"
            name="SunnySide Landing Page"
          />
          <ProjectCard
            img={Notify}
            skill1={HTML}
            skill2={CSS}
            skill3={JS}
            link="https://b0da2003.github.io/Notification-page/"
            name="Notifications page"
          />
          <ProjectCard
            img={Email}
            skill1={HTML}
            skill2={Tailwind}
            skill3={JS}
            link="https://b0da2003.github.io/NewLetter_SucssMsg/"
            name="Newsletter sign-up form with success message"
          />
          <ProjectCard
            img={QAFs}
            skill1={HTML}
            skill2={Tailwind}
            skill3={JS}
            link="https://b0da2003.github.io/FAQs/"
            name="FAQ accordion"
          />
        </div>
      </section>
    </>
  );
}

export default Project;
