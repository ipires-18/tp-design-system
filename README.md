# Template Design System

> Um design system baseado em React, Radix UI, e TailwindCSS, com integração com Storybook para desenvolvimento e visualização de componentes.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Scripts](#scripts)
- [Dependências](#dependências)
- [Desenvolvimento](#desenvolvimento)
- [Storybook](#storybook)
- [Licença](#licença)

## Visão Geral

Este projeto é um design system modular para facilitar a criação de interfaces consistentes e reutilizáveis. Ele inclui componentes baseados em bibliotecas modernas como **Radix UI** e **Lucide React**, integrados com **TailwindCSS** para estilização e **Storybook** para desenvolvimento isolado de componentes.

## Instalação

### Requisitos

- **Node.js**: `>=16.0.0`
- **Yarn** ou **npm**: gerenciador de pacotes

### Passos

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/template.design.system.git
cd template.design.system
yarn install
```

### Scripts

Aqui estão os scripts disponíveis para facilitar o desenvolvimento e build do projeto:

- dev: Inicia o Storybook em modo de desenvolvimento, acessível na URL http://localhost:6006.

```bash
yarn dev
```
- build: Constrói o projeto utilizando tsup para gerar a versão final da biblioteca.

```bash
yarn build
```

- lint: Executa o biome para checar o código em busca de problemas de estilo e inconsistências.

```bash
yarn lint
```

- build:storybook: Cria uma versão estática do Storybook para deploy

```bash
 yarn build:storybook
```


### Dependências

#### Principais Dependências
  - @radix-ui/react-avatar: Componentes para avatar de usuários.
  - @radix-ui/react-dropdown-menu: Menu suspenso modular e acessível.
  - lucide-react: Ícones para React, simples e leves.
  - tailwind-merge: Utility para mesclar classes do TailwindCSS sem conflitos.
  - clsx: Biblioteca para manipulação condicional de classes CSS.
  - tailwindcss-animate: Animações utilitárias para o TailwindCSS.
  - React: Biblioteca principal para construir interfaces.
  - TailwindCSS: Framework de CSS utilitário para estilização rápida e responsiva.

 #### Dependências de Desenvolvimento
  - Storybook: Plataforma para desenvolvimento de UI isolada.
  - Vite: Build tool para JavaScript e TypeScript.
  - PostCSS: Processador de CSS.
  - Tsup: Bundler para gerar a versão final do código.
  - Biome: Ferramenta para análise de código e linting.
