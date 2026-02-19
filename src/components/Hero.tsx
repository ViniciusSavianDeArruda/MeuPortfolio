import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

const TypeWriter = ({
  text,
  delay = 100,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-blink text-primary">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto animate-fade-in mt-8 sm:mt-0">
        {/* Badge de Status */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 mb-8 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-lg shadow-green-500/50"></span>
          </span>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-green-400 tracking-wide">
              Disponível para trabalho
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 mt-8">
          <span className="text-foreground">Olá, eu sou </span>
          <span className="text-gradient glow-text whitespace-nowrap">
            Vinicius Arruda
          </span>
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground mb-8">
          <TypeWriter text="Desenvolvedor Full Stack" delay={80} />
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          Desenvolvedor focado em construir soluções web eficientes que resolvem
          problemas reais do dia a dia.
        </p>

        {/* Links de redes sociais */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/ViniciusSavianDeArruda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/arrudavinicius/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:vinicius.s.arruda.dev@gmail.com"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 mt-16 sm:mt-20 animate-bounce">
          <div className="w-6 h-10 sm:w-7 sm:h-11 border-2 border-muted-foreground/60 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-down"></div>
          </div>
          <span className="text-xs text-muted-foreground font-mono whitespace-nowrap hidden sm:block">
            Role para baixo
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
