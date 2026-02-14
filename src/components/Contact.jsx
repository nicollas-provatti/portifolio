import { useState } from "react";
import { motion } from "motion/react";
import { FaRegCopy } from "react-icons/fa";
import Section from "./Section";
import SectionIntroTitle from "./SectionIntroTitle";

function Contact() {
  const email = "nicollasprovatti@hotmail.com";
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  }

  return (
    <Section id="contact" classes="md:px-[10vw]">
      <SectionIntroTitle
        title="contato"
        description="Sinta-se à vontade para entrar em contato comigo enviando uma mensagem para o email abaixo e entrarei em contato com você o mais breve possível."
      />
      <div className="border rounded-md overflow-hidden shadow-md max-w-md mx-auto">
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <span className="font-medium text-sm md:text-base">
            {email.toUpperCase()}
          </span>

          <button
            onClick={handleCopy}
            aria-label="Copiar email"
            className="hover:text-blue-600 transition-colors"
          >
            <FaRegCopy />
          </button>
        </div>

        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center bg-green-100 text-green-700 text-xs py-2 font-semibold tracking-wide"
          >
            EMAIL COPIADO!
          </motion.div>
        )}
      </div>
    </Section>
  );
}

export default Contact;

/* 
<div className="p-5 rounded-lg border-gray-100 border-2 shadow-md">
        <form className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold text-stone-500 text-xs lg:text-sm">
              Nome
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              className="p-3 rounded-md bg-stone-100 text-xs focus:outline-none lg:p-4 lg:text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-stone-500 text-xs lg:text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              className="p-3 rounded-md bg-stone-100 text-xs focus:outline-none lg:p-4  lg:text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-bold text-stone-500 text-xs lg:text-sm">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
              className="p-3 h-50 rounded-md bg-stone-100 text-xs focus:outline-none resize-none lg:p-4  lg:text-sm"
            ></textarea>
          </div>
          <button className="self-center px-8 py-2 text-white text-xs uppercase font-semibold bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:text-sm lg:self-end">
            Enviar
          </button>
        </form>
      </div>

 */
