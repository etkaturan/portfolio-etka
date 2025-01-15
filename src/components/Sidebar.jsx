import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaTrophy,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const navItems = [
    { name: "About Me", icon: <FaUser />, link: "about" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "projects" },
    { name: "Contact", icon: <FaEnvelope />, link: "contact" },
  ];

  const additionalItems = [
    { name: "Achievements", icon: <FaTrophy />, link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`h-screen fixed left-0 top-0 z-30 flex flex-col text-white ${
          expanded ? "w-72" : "w-16"
        } transition-all duration-500 shadow-lg`}
        style={{
          backgroundColor: expanded ? "rgba(20, 20, 20, 0.7)" : "rgb(20, 20, 20)",
          backdropFilter: expanded ? "blur(12px)" : "none",
        }}
      >
        {/* Burger Icon */}
        <div
          className={`p-5 flex justify-center cursor-pointer transform transition-all ${
            expanded ? "rotate-90 translate-y-2" : ""
          }`}
          onClick={toggleSidebar}
        >
          {expanded ? (
            <FaTimes className="text-3xl transition-all" />
          ) : (
            <FaBars className="text-3xl transition-all" />
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-12 mt-16">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              duration={500}
              className={`flex items-center justify-center relative group ${
                activeSection === item.link ? "bg-blue-500" : ""
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              {expanded && (
                <span
                  className="ml-6 text-lg opacity-100 transition-all"
                  style={{ animation: "fadeIn 0.3s" }}
                >
                  {item.name}
                </span>
              )}
              {!expanded && (
                <span
                  className="absolute left-16 bg-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-x-3"
                  style={{
                    animation: "slideIn 0.3s ease-in-out",
                  }}
                >
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Additional Items */}
        <div className="mt-auto mb-10">
          {additionalItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center relative group hover:bg-gray-800 cursor-pointer"
            >
              <div className="text-xl">{item.icon}</div>
              {expanded && (
                <span className="ml-6 text-lg">{item.name}</span>
              )}
              {!expanded && (
                <span
                  className="absolute left-16 bg-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-x-3"
                >
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
