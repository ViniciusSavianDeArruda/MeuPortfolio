# Portfolio Pessoal

Meu portfolio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Site responsivo e moderno para mostrar meus projetos, habilidades e estudos.

## Funcionalidades

- **Navegação Suave**: Menu de navegação com scroll suave entre seções e versão mobile responsiva
- **Hero Section**: Apresentação com efeito de máquina de escrever animado e badge "Disponível para trabalho"
- **Sobre Mim**: Biografia completa com cards de valores profissionais e estatísticas
- **Seção de Habilidades**: Grid de tecnologias com ícones interativos e efeitos hover
- **Portfólio de Projetos**: Cards com imagens, descrições, tecnologias usadas e links para GitHub/demo
- **Blog de Estudos**: Repositórios do GitHub organizados com tags e datas, com badge "Em Desenvolvimento"
- **Formulário de Contato**: Links de email, localização e redes sociais (GitHub, LinkedIn)
- **Footer Minimalista**: Rodapé com links sociais e copyright
- **Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- **Tema Escuro**: Interface moderna com paleta de cores escuras
- **Animações**: Transições suaves, efeitos de hover e animações personalizadas

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React

## Estrutura do Projeto

```
Project_Portfolio/
├── public/                     # Arquivos públicos estáticos
│   ├── FotoMuseu.png          # Imagem do projeto Museu
│   ├── FotoPortfolio.png      # Imagem do portfolio
│   └── robots.txt             # Configuração para mecanismos de busca
├── src/                        # Código fonte do projeto
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── About.tsx          # Seção "Sobre Mim"
│   │   ├── Blog.tsx           # Seção de Estudos/Repositórios
│   │   ├── Contact.tsx        # Seção de Contato
│   │   ├── Footer.tsx         # Rodapé do site
│   │   ├── Hero.tsx           # Seção principal/banner
│   │   ├── Navbar.tsx         # Barra de navegação
│   │   ├── Projects.tsx       # Seção de Projetos
│   │   └── Skills.tsx         # Seção de Habilidades
│   ├── data/                  # Dados da aplicação
│   │   └── studies.ts         # Lista de estudos e repositórios
│   ├── pages/                 # Páginas da aplicação
│   │   └── Index.tsx          # Página principal
│   ├── App.tsx                # Componente raiz da aplicação
│   ├── main.tsx               # Ponto de entrada do React
│   ├── index.css              # Estilos globais e Tailwind
│   └── vite-env.d.ts          # Tipos do Vite
├── index.html                 # HTML principal
├── package.json               # Dependências e scripts do projeto
├── postcss.config.js          # Configuração do PostCSS
├── tailwind.config.ts         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração do TypeScript
├── tsconfig.app.json          # Config TypeScript para a aplicação
├── tsconfig.node.json         # Config TypeScript para o Node
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Documentação do projeto
```

## Como Rodar

```bash
# Clone o repositório
git clone https://github.com/ViniciusSavianDeArruda/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

O projeto vai rodar em `http://localhost:5173`

## Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a versão de produção
npm run preview  # Preview da versão de produção
npm run lint     # Verifica o código
```

## Deploy

Para fazer deploy, você pode usar:

- **Vercel** (recomendado): Conecte seu repositório GitHub e faça deploy automático
- **Netlify**: Importe o projeto e configure o build command como `npm run build`
- **GitHub Pages**: Use o branch gh-pages para hospedar


---

> **Nota:** Este projeto está em desenvolvimento contínuo. Novas funcionalidades e melhorias estão sendo adicionadas regularmente.

Feito por [Vinicius Arruda](https://github.com/ViniciusSavianDeArruda)
