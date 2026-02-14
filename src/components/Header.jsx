import { useState } from "react";
import { motion } from "motion/react"
import { AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

function MenuMobile({ isOpen, toggleMenu }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 w-1/2 h-full bg-white z-50 drop-shadow-lg md:hidden"
    >
      <button
        className="absolute top-4 right-4 text-lg cursor-pointer"
        onClick={() => toggleMenu(false)}
      >
        <IoIosClose />
      </button>
      <nav className="flex flex-col items-center justify-center h-full space-y-8 text-base">
        <a href="#home" onClick={() => toggleMenu(false)}>
          Home
        </a>
        <a href="#about" onClick={() => toggleMenu(false)}>
          Sobre
        </a>
        <a href="#projects" onClick={() => toggleMenu(false)}>
          Projetos
        </a>
        <a href="#contact" onClick={() => toggleMenu(false)}>
          Contato
        </a>
      </nav>
    </motion.div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(value) {
    setIsMenuOpen(value);
  }

  return (
    <header className="flex items-center justify-between fixed top-0 w-full z-40 p-4 bg-white shadow-sm md:px-[10vw]">
      <h1 className="uppercase font-bold text-sm">Nícollas Provatti</h1>
      <nav className="hidden text-base space-x-12 md:flex">
        <a href="#home" className="transition hover:text-blue-500">Home</a>
        <a href="#about" className="transition hover:text-blue-500">Sobre</a>
        <a href="#projects" className="transition hover:text-blue-500">Projetos</a>
        <a href="#contact" className="transition hover:text-blue-500">Contato</a>
      </nav>
      <button
        className="text-lg cursor-pointer md:hidden"
        onClick={() => toggleMenu(true)}
      >
        <IoIosMenu />
      </button>
      <AnimatePresence>
        {isMenuOpen && <MenuMobile toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
