const techs = [
  {name : "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  {name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  {name : "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  {name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },

];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Habilidades</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-5" />
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
           Minhas stack de desenvolvimento
           
           
          </p>
        </div>

        {/* Grid responsivo: 3 cols mobile, 4 tablet, 5 desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {techs.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default w-full"
            >
              <div className="relative">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 md:w-16 md:h-16 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                />
              </div>
              <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
