import "../styles/about.css";
import Nav from "./Nav";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JS from "../assets/images/js.png";
import ReactJS from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwind.png";
import GSAP from "../assets/images/gsap.png";
import about from "../assets/images/about.svg";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function About() {
  
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  

  useGSAP(() => {
    gsap.fromTo(
      ".card-skill",
      {
        opacity: 0,
        y: 20,
      },{
        scrollTrigger: {
          trigger: ".card-skill",
          start: "-100% center",
  
        },

        opacity:1,
        y:0,
        duration:0.5,
        ease: "power1.in",
        stagger: 0.2,
      }
      
    );

    gsap.to(".gsap-ani", {
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "center center",
      },

      keyframes: {
        x: [-20, 0],
      },
      opacity: 1,
      duration: 0.5,
      ease: "none",
      stagger: 0.2,
    });
  },[]);

  return (
    <>
      <Nav />
      <section className="scroll-test">
        <div className="about panal" >
          <div className="about-title gsap-ani" >
            <h1>About Me</h1>
          </div>

          <div className="para-box gsap-ani ">
            <img src={about} alt="illustration" />
            <p className="about-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iste consectetur nobis explicabo tempora tenetur impedit
              consequatur commodi? Architecto provident perferendis veritatis
              totam rem beatae esse, corrupti necessitatibus corporis
              distinctio! Doloremque culpa magnam harum, molestiae quidem
              architecto sequi non cumque optio velit, dolore minus. Blanditiis
              neque nihil, sequi explicabo unde nisi iusto ut corrupti officia
              aperiam non. Adipisci, ab odio! Lorem ipsum dolor sit amet consec
            </p>
          </div>
        </div>

        <div className="skills-box panal">
          <div className="skill">
            <h1 className="skills">Skills</h1>
          </div>

          <div className="cards">
            <div className="card-skill html">
              <h1 className="text-card">HTML</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                amet cupiditate praesentium{" "}
              </p>
              <img src={HTML} alt="HTML" />
            </div>

            <div className="card-skill css">
              <h1 className="text-card">CSS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                amet cupiditate praesentium
              </p>
              <img src={CSS} alt="CSS" />
            </div>

            <div className="card-skill js">
              <h1 className="text-card">JS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                amet cupiditate praesentium{" "}
              </p>
              <img src={JS} alt="JS" />
            </div>

            <div className="card-skill react">
              <h1 className="text-card">React JS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                amet cupiditate praesentium{" "}
              </p>
              <img src={ReactJS} alt="ReactJS" />
            </div>

            <div className="card-skill tailwind">
              <h1 className="text-card">Tailwind CSS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                amet cupiditate praesentium{" "}
              </p>
              <img src={Tailwind} alt="Tailwind" />
            </div>

            <div className="card-skill gsap">
              <h1 className="text-card">GSAP</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                amet cupiditate praesentium{" "}
              </p>
              <img src={GSAP} alt="GSAP" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
