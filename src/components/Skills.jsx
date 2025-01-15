import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
  } from "react-icons/fa";
  import {
    SiMongodb,
    SiTailwindcss,
    SiNextdotjs,
    SiDocker,
  } from "react-icons/si";
  
  function Skills() {
    const libraries = [
      { name: "React", icon: <FaReact />, color: "#61DBFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#8CC84B" },
      { name: "Python", icon: <FaPython />, color: "#FFD43B" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Docker", icon: <SiDocker />, color: "#0db7ed" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    ];
  
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden relative"
      >
        <h2
          className="text-5xl font-bold mb-36 text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)",
          }}
        >
          Skills & Libraries
        </h2>
  
        <div className="scrolling-wrapper relative w-[100%] max-w-7xl overflow-hidden">
          <div className="scrolling-content flex space-x-20 animate-scroll">
            {libraries.concat(libraries).map((lib, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center cursor-pointer transform hover:scale-110 transition-transform"
              >
                <div
                  className="text-9xl"
                  style={{
                    color: lib.color,
                  }}
                >
                  {lib.icon}
                </div>
                <p className="text-lg mt-4 text-gray-300">{lib.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  