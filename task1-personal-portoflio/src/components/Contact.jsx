import "../styles/content.css";
import Nav from "./Nav";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Content() {

  gsap.registerPlugin(useGSAP);

    useGSAP( () => {
        gsap.to(".text-btn" ,{
            opacity:1,
            duration:1
        })
    });


  const box = useRef();
  const nameEmail = useRef();
  const hiddeBtn = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ilqms0r",
        "template_9rtxwur",
        e.target,
        "fFv6hQGZULe-rLNiY"
      )
      .then((res) => {
        alert("Email Has been sent");
      })
      .catch((err) => alert("Email Has not sent"));
  }

  const Onclickhandel = () => {
    box.current.classList.add("update");
    nameEmail.current.style.opacity = "1";
    hiddeBtn.current.style.display = " none";
  };

  return (
    <>
      <Nav />
      <div className="content">
        <div ref={hiddeBtn} className="content-text">
          <h1 className="text-btn" onClick={Onclickhandel}>Get In Touch</h1>
        </div>

        <div className="content-box" ref={box}>
          <form onSubmit={sendEmail}>
            <div className="name-email" ref={nameEmail}>
              <div className="input-box">
                <input
                  className="name-field"
                  name="name"
                  type="text"
                  required="required"
                  autoComplete="off"
                />
                <span>Name</span>
              </div>

              <div className="input-box email-box">
                <input
                  className="name-field"
                  type="email"
                  name="email"
                  required="required"
                  autoComplete="off"
                />
                <span>Email</span>
              </div>
            </div>

            <textarea
              className="msg-field"
              name="email-msg"
              id=""
              placeholder="Enter Your Message..."
              autoComplete="off"
            ></textarea>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Content;
