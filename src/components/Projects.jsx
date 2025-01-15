import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    {
      title: "AI Chatbot for Spatial Hypertext",
      description:
        "A chatbot system integrated with a spatial hypertext environment that extracts named entities and relationships.",
      tech: "Flask, React, MongoDB, Neo4j",
      image: "/images/chatbot.png",
      github: "https://github.com/username/ai-chatbot",
      live: "https://chatbot-demo.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "Developed a full-stack e-commerce website with dynamic product catalogs and payment integration.",
      tech: "Node.js, React, Stripe",
      image: "/images/ecommerce.png",
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio showcasing projects and skills.",
      tech: "React, Tailwind CSS, Flask",
      image: "/images/portfolio.png",
      github: "https://github.com/username/portfolio",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 text-white py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-5xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
          
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-blue-400 mb-6">{project.tech}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
                >
                  GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
