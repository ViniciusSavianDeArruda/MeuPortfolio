import { Calendar, Github, BookOpen } from "lucide-react";
import { studies } from "../data/studies";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Estudos & Repositórios
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-5" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Compartilhando meu processo de aprendizado através de código e
            documentação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {studies.map((study) => (
            <article
              key={study.id}
              className="rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group backdrop-blur-sm overflow-hidden flex flex-col relative"
            >
              {study.Opcional && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 text-xs font-bold uppercase tracking-wide shadow-lg backdrop-blur-sm">
                    Em Desenvolvimento
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(study.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {!study.Opcional && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      <BookOpen className="w-3 h-3" />
                      Repositório
                    </div>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {study.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botões de ação */}
                <div className="flex gap-2">
                  {study.Opcional ? (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-muted-foreground cursor-not-allowed opacity-60 font-semibold text-sm"
                    >
                      Em Breve
                    </button>
                  ) : (
                    <a
                      href={study.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Ver no GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
