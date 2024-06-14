
import "../styles/card.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function ProjectCard(props) {
    
    const cards = useRef();

    gsap.registerPlugin(useGSAP , ScrollTrigger)

    useGSAP( () => {

        gsap.from(".all-cards",{
            opacity:0,
            x:300
        });
        gsap.to( ".all-cards"  , {
            scrollTrigger: {
                trigger: ".project-card",
                start: "top center",
                end: "120% center",
            }, 
            opacity:1,
            duration:0.8,
            x:0,
            stagger:0.2,
            ease: "power1.in"
            
        },"")
    })

        return (
                            <a href={props.link} className={` project-card all-cards`}>

                                <div className="img-container">
                                    <img src={props.img} alt="Project pic" />
                                </div>

                                <div className="card-about">
                                    <span>{props.name}</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae.</p>
                                </div>

                                <div className="project-skill">

                                    <img src={props.skill1} alt="HTML" />
                                    <img src={props.skill2} alt="CSS" />
                                    <img src={props.skill3} alt="JS" />

                                </div>

                            </a>
            );

}

export default ProjectCard;