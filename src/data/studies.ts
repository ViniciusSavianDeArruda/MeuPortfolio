export interface Study {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  tags: string[];
  githubLink: string;
  Opcional?: boolean;
}

export const studies: Study[] = [
  {
    id: "algoritmos-programacao-c",
    title: "Algoritmos e Programação A - Linguagem C",
    excerpt:
      "Guia completo de fundamentos da linguagem C, desde estrutura básica até manipulação de strings, vetores e matrizes com exemplos práticos.",
    description:
      "Material completo desenvolvido durante a disciplina de Algoritmos e Programação A, abrangendo todos os fundamentos da linguagem C. Inclui estrutura de programas, tipos de dados, operadores (aritméticos, relacionais e lógicos), estruturas de controle e repetição, manipulação de arrays, matrizes e strings. Contém exemplos práticos como calculadora, tabuada, busca em vetores e validação de entrada com boas práticas de programação.",
    date: "2026-02-19",
    tags: ["C", "Algoritmos", "Programação", "Logica de programacao"],
    githubLink: "https://github.com/ViniciusSavianDeArruda/Algoritmos-A",
  },

  {
    id: "banco-dados-ddl-dml",
    title: "Banco de Dados - Comandos DDL e DML",
    excerpt:
      "Guia completo sobre comandos DDL (criação de estruturas) e DML (manipulação de dados) em SQL com exemplos práticos do projeto Empresa.",
    description:
      "Material desenvolvido durante a disciplina de Projeto de Banco de Dados, abordando desde comandos básicos de estruturação (CREATE, ALTER, DROP) até operações avançadas de manipulação de dados (SELECT, INSERT, UPDATE, DELETE). Inclui implementação completa de um sistema Empresa com relacionamentos complexos, funções de agregação, JOINs, subconsultas e consultas complexas com CASE, CAST e funções de data.",
    date: "2026-02-19",
    tags: ["SQL", "MySQL", "DDL", "DML", "Banco de Dados"],
    githubLink:
      "https://github.com/ViniciusSavianDeArruda/Projeto-de-Banco-de-dados",
  },

  {
    id: "em-desenvolvimento",
    title: "Novo Estudo em Breve",
    excerpt:
      "Em breve, mais conteúdo sobre programação e tecnologia será adicionado aqui. Fique atento!",
    description:
      "Este espaço está reservado para futuros estudos e guias sobre diferentes tecnologias e conceitos de programação.",
    date: "#",
    tags: ["Em Breve"],
    githubLink: "#",
    Opcional: true,
  },
];
