import Section from "./Section";
import SectionIntroTitle from "./SectionIntroTitle";
import projects from "../projects";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

function Project({ title, description, technologies, gitHub, demo, image }) {
  return (
    <div className="flex flex-col shadow-md rounded-lg overflow-auto transition-transform duration-300 ease-in hover:scale-102">
      <img src={image} alt={title} />
      <div className="flex flex-col justify-between gap-3 p-5 flex-1">
        <h4 className="font-semibold lg:text-lg">{title}</h4>
        <p className="text-xs text-gray-600 lg:text-sm">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <li key={tech} className="text-xs text-blue-900 bg-blue-100 px-2 py-1 rounded-sm ">{tech}</li>
          ))}
        </ul>
        <div className="flex gap-5 text-sm mt-5">
          <a
            href={gitHub}
            target="_blank"
            className="flex items-center gap-1 transition hover:text-blue-500 hover:underline"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-1 transition hover:text-blue-500 hover:underline"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" customGradient classes="md:px-[10vw]">
      <SectionIntroTitle
        title="projetos"
        description="Aqui você encontrará alguns dos projetos pessoais e de clientes que criei, cada projeto contendo seu próprio estudo de caso."
      />
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.title} {...project}/>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
