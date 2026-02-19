import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <span className="font-mono text-primary text-sm sm:text-base">E agora?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>vinicius.s.arruda.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Santa Maria, Rio Grande do Sul </span>
          </div>
        </div>

        <div>
          <a 
            href="mailto:vinicius.s.arruda.dev@gmail.com"
            className="inline-flex items-center group px-8 py-4 text-lg font-medium bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 glow hover:scale-105"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform"/>
            Enviar Mensagem
          </a>
        </div>

        <div className="mt-24 code-block inline-block">
          <span className="text-muted-foreground">$</span>{" "}
          <span className="text-primary">git commit</span>{" "}
          <span className="text-foreground">-m "Obrigado por visitar!"</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
