import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    {
      title: "Face Authentication Web App",
      description:
        "A web app that implements a simple face identification function for user login using a live camera to capture the face and compare it with the registered face to give access if it matches. Currently, this app is not hosted and unavailable for live viewing.",
      tech: "Flask, React, Tailwind CSS",
      image: "public/images/faceauthapp.png",
      github: "https://github.com/etkaturan/Face-Authentication-App.git",
      live: "#",
    },
    {
      title: "Vaultspring Web App",
      description:
        "A web app for financing, with user-specific pages displaying balances, incomes, spendings, investments, and goals interconnected in blocks. Currently, this app is not hosted and unavailable for live viewing.",
      tech: "Flask, React, SQLite",
      image: "public/images/vaultspring.png",
      github: "https://github.com/etkaturan/VaultSpring-web-app-.git",
      live: "#",
    },
    {
      title: "E-commerce Website (Barista Club)",
      description:
        "Developed a full-stack e-commerce website with dynamic product catalogs for a customer.",
      tech: "Flask, React, SQLite",
      image: "/portfolio-etka/images/projectbarista.png",
      github: "#",
      live: "http://54.235.2.68/",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio showcasing projects and skills.",
      tech: "React, Tailwind CSS",
      image: "/portfolio-etka/images/projectportfolio.png",
      github: "dist/images/projectportfolio.png",
      live: "#",
    },
    {
      title: "E-commerce Website (Fakir.kz)",
      description:
        "An under-development e-commerce website similar to Barista Club, designed for Fakir.kz. This project will be visible soon.",
      tech: "Flask, React, SQLite",
      image: "public/images/fakir.png",
      github: "#",
      live: "#",
    },
    {
      title: "AI-Supported Spatial Hypertext Web App",
      description:
        "A private repository for a spatial hypertext web app enhanced with AI features. This project will soon be available for live viewing.",
      tech: "Flask, React, MongoDB, Neo4j",
      image: "public/images/hypertext.png",
      github: "#",
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
              transition={{ delay: index * 0.2, duration: 0.3 }}
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
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
                  >
                    GitHub
                  </a>
                )}
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