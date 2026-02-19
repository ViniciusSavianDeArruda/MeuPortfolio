import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Links Sociais */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/ViniciusSavianDeArruda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/arrudavinicius/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:vinicius.s.arruda.dev@gmail.com"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vinicius Arruda. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
