import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código legível, testável e de fácil manutenção.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Otimizo cada aplicação para máxima velocidade e eficiência.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description:
        "Trabalho em equipe com metodologias ágeis e comunicação clara.",
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Sobre Mim</h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <div className="space-y-6 text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Sou estudante de Sistemas de Informação na Universidade Franciscana (UFN), com atuação em
              desenvolvimento Full Stack. Minha jornada na programação envolve desde a modelagem e manipulação de
              banco de dados até a criação de interfaces modernas, responsivas e funcionais.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Possuo experiência com HTML, CSS e JavaScript, e atualmente estou aprofundando meus conhecimentos em
              React, TypeScript, Tailwind CSS, Java e SQL. Tenho foco especial no ecossistema JavaScript, sempre aplicando
              boas práticas de código, organização e arquitetura de sistemas em cada projeto desenvolvido.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Gosto de resolver problemas com código e estou sempre aprendendo novas tecnologias. 
              Meu objetivo é me tornar um desenvolvedor cada vez melhor e criar projetos interessantes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16">
          <div className="text-center p-5 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              1+
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              Anos de Estudo
            </div>
          </div>
          <div className="text-center p-5 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              5+
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              Projetos
            </div>
          </div>
          <div className="text-center p-5 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              13+
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              Tecnologias
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
