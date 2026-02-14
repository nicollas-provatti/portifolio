import imgProject1 from "/images/1.png";
import imgProject2 from "/images/2.png";
import imgProject3 from "/images/3.png";
import imgProject4 from "/images/4.png";

const projects = [
  {
    title: "Minhas Leituras",
    description:
      "Plataforma web fullstack para gerenciamento de leituras pessoais, com autenticação segura via JWT, controle de usuários e cadastro de livros. A aplicação permite acompanhar o progresso de leitura, registrar avaliações e visualizar detalhes das obras, utilizando arquitetura REST e banco de dados relacional com Prisma e PostgreSQL.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Authenticação JWT",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],
    gitHub: "https://github.com/nicollas-provatti/my-reading",
    demo: "https://my-reading-topaz.vercel.app/",
    image: imgProject1,
  },
  {
    title: "Lista de Produtos com Carrinho de Compras",
    description:
      "Aplicação front-end responsiva de e-commerce desenvolvida com foco em experiência do usuário. Permite navegação por produtos, adição dinâmica ao carrinho, cálculo automático de valores e finalização de compra simulada. Implementa gerenciamento de estado no React e componentes reutilizáveis com Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    gitHub: "https://github.com/nicollas-provatti/product-list-with-cart",
    demo: "https://product-list-with-cart-nh69.onrender.com/",
    image: imgProject2,
  },
  {
    title: "Gerenciador de Extensões",
    description:
      "Interface moderna para gerenciamento de extensões de navegador, com funcionalidades de ativação, desativação e organização visual dos itens. Projeto desenvolvido com foco em componentização, organização de layout responsivo e boas práticas de estilização utilizando React e Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    gitHub: "https://github.com/nicollas-provatti/browser-extension-manager-ui",
    demo: "https://browser-extension-manager-ui-bfkc.onrender.com/",
    image: imgProject3,
  },
  {
    title: "Catálogo de Filmes",
    description:
      "Aplicação web para consulta e visualização de dados cinematográficos integrando a API do TMDB. Permite explorar filmes populares, mais bem avaliados e em cartaz, além de realizar buscas dinâmicas. Implementa consumo de API externa, manipulação assíncrona de dados e renderização dinâmica de conteúdo.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "API TMDB"],
    gitHub: "https://github.com/nicollas-provatti/Catalogo-de-Filmes",
    demo: "https://catalogo-de-filmes-pfmp.onrender.com/",
    image: imgProject4,
  },
];

export default projects;
