import Section from "./Section";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";

function Home() {
  return (
    <Section
      id="home"
      customGradient
      classes="flex flex-col justify-center items-center gap-3 min-h-screen pt-14 pb-0"
    >
      <div className="flex flex-col gap-3 w-auto max-w-xl m-auto">
        <p className="text-sm text-gray-900 md:text-base">
          Olá 👋, eu sou o Nícollas
        </p>
        <h1 className="font-bold">
          <div className="flex items-center gap-3">
            <span className="text-5xl md:text-7xl lg:text-8xl">REACT</span>
            <div className="flex-1 flex justify-around text-xl md:text-3xl lg:text-4xl">
              <a
                href="https://github.com/nicollas-provatti"
                target="_blank"
                className="hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/n%C3%ADcollas-provatti-4650171b6/"
                target="_blank"
                className="hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="/curriculo-nicollasprovatti.pdf"
                download="Curriculo-Nicollas-Provatti.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Baixar currículo"
                aria-label="Baixar currículo em PDF"
                className="hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <SiGoogledocs />
              </a>
            </div>
          </div>
          <p className="text-5xl md:text-7xl lg:text-8xl">DEVELOPER</p>
        </h1>
        <div className="flex justify-end">
          <p className="w-55 text-xs text-justify text-gray-600 md:w-74 lg:text-sm lg:w-86">
            Tenho 23 anos sou desenvolvedor front-end com 9 meses de experiência
            trabalhando como freelancer.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Home;
