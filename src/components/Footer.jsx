import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col gap-10 p-8 bg-black text-white md:px-[10vw]">
      <div className="flex flex-col gap-10 md:flex-row">
        <div>
          <h3 className="mb-5 font-bold text-base uppercase lg:text-lg">
            Nícollas Provatti
          </h3>
          <p className="text-sm lg:text-base md:pr-[50%]">
            Um desenvolvedor web focado em frontend que constrói o frontend de
            sites e aplicativos da web que leva ao sucesso do produto geral.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-5 font-bold text-base uppercase lg:text-lg">
            Social
          </h3>
          <ul className="flex gap-3">
            <li className="text-lg md:text-xl">
              <a href="https://github.com/nicollas-provatti" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="text-lg md:text-xl">
              <a
                href="https://www.linkedin.com/in/n%C3%ADcollas-provatti-4650171b6/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
