# 📁 Estrutura do Projeto

Este documento descreve a organização de arquivos e pastas do portfólio.

## 🗂️ Estrutura de Diretórios

```
portfolio/
├── 📁 assets/                     # Recursos estáticos
│   ├── 📁 images/                 # Imagens e ícones
│   │   ├── 📁 icons/              # Ícones SVG
│   │   ├── 📁 skills/             # Ícones de tecnologias
│   │   ├── 📁 profile/            # Fotos pessoais
│   │   └── hero-animation.svg     # Animação da seção principal
│   ├── 📁 styles/                 # Arquivos CSS
│   │   ├── 📁 base/               # Estilos base
│   │   │   ├── reset.css          # Reset CSS
│   │   │   ├── global.css         # Estilos globais
│   │   │   ├── cores.css          # Sistema de cores
│   │   │   ├── tipografia.css     # Sistema tipográfico
│   │   │   ├── plugin.css         # Plugins e animações
│   │   │   └── tooltip.css        # Estilos de tooltips
│   │   ├── 📁 components/         # Estilos de componentes
│   │   │   ├── header.css         # Cabeçalho
│   │   │   ├── main.css           # Seção principal
│   │   │   ├── sobre.css          # Seção sobre
│   │   │   ├── skills.css         # Habilidades
│   │   │   ├── projetos.css       # Projetos
│   │   │   ├── contato.css        # Formulário de contato
│   │   │   └── footer.css         # Rodapé
│   │   └── main.css               # Arquivo principal de estilos
│   ├── 📁 scripts/                # Arquivos JavaScript
│   │   ├── 📁 modules/            # Módulos JavaScript
│   │   │   ├── gotop.js           # Botão voltar ao topo
│   │   │   └── tooltip.js         # Funcionalidade de tooltips
│   │   ├── 📁 utils/              # Utilitários
│   │   │   └── simple-anime.js    # Biblioteca de animações
│   │   └── main.js                # Script principal
│   └── 📁 documents/              # Documentos
│       └── Vinicius Arruda- Curriculo.pdf
├── 📁 docs/                       # Documentação
│   └── STRUCTURE.md               # Este arquivo
├── index.html                     # Página principal
├── README.md                      # Documentação principal
└── .gitignore                     # Arquivos ignorados pelo Git
```

## 🎯 Convenções de Nomenclatura

### Arquivos CSS
- **Base**: Estilos fundamentais e configurações globais
- **Components**: Estilos específicos de cada seção/componente
- **main.css**: Arquivo que importa todos os outros estilos

### Arquivos JavaScript
- **modules/**: Funcionalidades específicas e reutilizáveis
- **utils/**: Bibliotecas e utilitários
- **main.js**: Script principal que coordena toda a aplicação

### Imagens
- **icons/**: Ícones SVG para interface
- **skills/**: Ícones de tecnologias e habilidades
- **profile/**: Fotos pessoais e profissionais

## 🔧 Benefícios da Organização

1. **Manutenibilidade**: Fácil localização e edição de arquivos
2. **Escalabilidade**: Estrutura preparada para crescimento do projeto
3. **Performance**: Organização otimizada para carregamento
4. **Colaboração**: Estrutura clara para outros desenvolvedores
5. **Padrões**: Segue convenções da indústria

## 📝 Como Adicionar Novos Recursos

### Novo Componente CSS
1. Criar arquivo em `assets/styles/components/`
2. Importar no `assets/styles/main.css`

### Nova Funcionalidade JS
1. Criar módulo em `assets/scripts/modules/`
2. Importar no `assets/scripts/main.js`

### Novas Imagens
1. Adicionar na pasta apropriada em `assets/images/`
2. Usar caminho relativo no HTML/CSS