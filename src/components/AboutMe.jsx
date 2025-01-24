import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaLinkedin, FaSteam } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function AboutMe() {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-gray-900 relative"
    >
      <div
        className="w-[92%] h-[95%] bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl flex items-center p-10 ml-14"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Image Container with Glow Effect */}
        <div
          className="w-80 h-80 rounded-lg overflow-hidden shadow-xl flex-shrink-0 relative"
          style={{
            boxShadow: "0 0 20px #12c2e9",
            border: "1px solid rgba(18, 194, 233, 0.5)",
            background: "rgba(18, 194, 233, 0.1)",
          }}
        >
          <img
            src="/portfolio-etka/images/imageEtka.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Container */}
        <div className="ml-12 flex-1">
          <h1
            className="text-5xl font-extrabold text-transparent bg-clip-text mt-16 mb-4"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)",
              textShadow: "0 0 25px rgba(18, 194, 233, 0.8)",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Turan Etka
          </h1>

          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-blue-400">
              <Typewriter
                words={["a Full-Stack Developer.", "an AI Enthusiast.", "a Problem Solver."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </span>
            <br />
            I'm a motivated computer science student with a strong foundation
             in full-stack web development, AI-based backend systems, and practical
              experience in real-world projects. Proficient in Python, Flask, React, and Docker, 
              with a proven ability to integrate innovative solutions into functional applications. 
              Passionate about creating impactful software and continuously learning to drive meaningful 
              contributions to society.
          </p>

          {/* Resume Button with White Glow */}
          <div className="mt-10">
            <a
              href="/portfolio-etka/Mekhmetetka_Turan.pdf"
              download
              className="relative px-8 py-3 text-lg font-semibold uppercase rounded-full"
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={{
                color: "#ffffff",
                border: "1px solid #ffffff",
                boxShadow: buttonHover
                  ? "0 0 25px #ffffff, 0 0 40px #eaeaea"
                  : "0 0 15px #ffffff",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1))",
                transition: "box-shadow 0.3s ease-in-out",
              }}
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8 mt-10 text-4xl text-gray-400">
        
            <a href="https://github.com/etkaturan" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-300 transition" />
            </a>
            <a href="https://www.linkedin.com/in/etka-turan-158632226/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Downward Arrow to Scroll to Next Section */}
      {/* <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="text-5xl text-gray-400 hover:text-blue-400 transition animate-bounce">
          ↓
        </div>
      </ScrollLink> */}
    </section>
  );
}

export default AboutMe;
