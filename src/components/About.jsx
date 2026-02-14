import Section from "./Section";
import SectionIntroTitle from "./SectionIntroTitle";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaComments, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchedule, MdOutlinePsychology } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const hardSkills = [
  { icon: <FaHtml5 />, name: "HTML", color: "bg-orange-100 text-orange-600" },
  { icon: <FaCss3Alt />, name: "CSS", color: "bg-blue-100 text-blue-600" },
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    color: "bg-yellow-100 text-yellow-700",
  },
  { icon: <FaReact />, name: "React", color: "bg-cyan-100 text-cyan-600" },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind",
    color: "bg-sky-100 text-sky-600",
  },
  { icon: <FaNode />, name: "Node.js", color: "bg-green-100 text-green-600" },
  {
    icon: <FaGear />,
    name: "API REST",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: <FaGithubSquare />,
    name: "Git & GitHub",
    color: "bg-stone-200 text-stone-700",
  },
];

const softSkills = [
  {
    icon: <FaComments />,
    name: "Comunicação",
  },
  {
    icon: <FaUsers />,
    name: "Trabalho em equipe",
  },
  {
    icon: <FaChalkboardTeacher />,
    name: "Didática",
  },
  {
    icon: <MdOutlineSchedule />,
    name: "Organização",
  },
  {
    icon: <MdOutlinePsychology />,
    name: "Resolução de problemas",
  },
  {
    icon: <GiProgression />,
    name: "Aprendizado contínuo",
  },
];

function AboutDetails() {
  return (
    <div className="flex-1">
      <h3 className="font-semibold text-base mb-2 md:text-lg">
        Venha me conhecer!
      </h3>
      <p className="text-stone-600 leading-7 text-sm mb-5 lg:leading-9 lg:text-base">
        Sou graduando em <strong>Engenharia da Computação</strong>, com
        interesse em
        <strong> desenvolvimento de software</strong> e tecnologia aplicada à
        educação. Ao longo da minha formação, venho buscando unir teoria e
        prática por meio de projetos reais e experiências voltadas ao
        desenvolvimento web.
      </p>

      <p className="text-stone-600 leading-7 text-sm lg:leading-9 lg:text-base">
        Atualmente, ministro aulas de tecnologias no{" "}
        <strong>OxeTech Lab</strong>, um projeto do governo voltado à
        capacitação técnica. Possuo experiência na construção de páginas web com
        foco em frontend, mas também atuo no backend, desenvolvendo soluções
        completas e bem estruturadas.
      </p>
    </div>
  );
}

function AboutSkills() {
  return (
    <div className="flex-1">
      <div className="mb-5 md:mb-10">
        <h3 className="font-semibold text-base mb-3 md:text-lg">Hard Skills</h3>
        <div className="flex gap-4 flex-wrap">
          {hardSkills.map((skill) => (
            <span
              key={skill.name}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold ${skill.color}`}
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-base mb-3 md:text-lg">Soft Skills</h3>
        <div className="flex gap-4 flex-wrap">
          {softSkills.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-200 text-stone-600"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" classes="md:px-[10vw]">
      <SectionIntroTitle
        title="sobre mim"
        description="Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia."
      />
      <div className="flex flex-col gap-10 md:flex-row">
        <AboutDetails />
        <AboutSkills />
      </div>
    </Section>
  );
}

export default About;
