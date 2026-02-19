import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Gestão de Acervo - Museu Treze de Maio",
    description:
      "Sistema desktop para gerenciamento completo de biblioteca e acervo histórico. Desenvolvido em Java com JavaFX, SQL Server e arquitetura MVC. Inclui controle de empréstimos, catalogação e auditoria de operações.",
    tech: ["Java", "JavaFX", "SQL Server", "MVC"],
    github:
      "https://github.com/ViniciusSavianDeArruda/SistemaDeGerenciamentoDeAcervo_MuseuTrezeDeMaio",
    demo: "https://www.youtube.com/watch?v=h1TVhw8w6M8",
    image: "/FotoMuseu.png",
  },
  {
    title: "Meu Portfolio Pessoal",
    description: "Portfolio pessoal desenvolvido com React e TypeScript. Mostra meus projetos, habilidades e estudos com design responsivo.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/ViniciusSavianDeArruda",
    demo: "#",
    image: "/FotoPortfolio.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projetos"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Projetos
          </h2>
          <div
            className="h-1 w-24 bg-primary mx-auto mb-5"
            aria-hidden="true"
          />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos em Destaques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group backdrop-blur-sm overflow-hidden flex flex-col"
            >
              <div className="flex-[3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4 flex-[2] flex flex-col">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border border-green-500 text-green-500 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex gap-3 pt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex-1 justify-center font-semibold text-sm shadow-lg shadow-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card/80 border border-border/50 text-foreground hover:bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 flex-1 justify-center font-semibold text-sm shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
