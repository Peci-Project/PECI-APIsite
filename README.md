# Website

Website para a documentação das API's dos serviços da [Universidade de Aveiro](https://www.ua.pt/).

This website is built using [Docusaurus](https://docusaurus.io/) and [Scallar](https://scalar.com/products/api-references/integrations/docusaurus).


# Getting Started

### 1. Install NodeJs

https://nodejs.org/en/download

Verify your setup by running:
```bash
node -v
npm -v
```

### 2. Navigate to project directory:

```bash
cd API
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm start
```

The project will be running at [http://localhost:3000](http://localhost:3000).

# Structure

```
PECI-APIsite
├── API
│   ├── docs
│   │   └── intro.md
│   ├── docusaurus.config.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── sidebars.ts
│   ├── src
│   │   ├── components
│   │   │   └── HomepageFeatures
│   │   │       ├── index.tsx
│   │   │       └── styles.module.css
│   │   ├── css
│   │   │   └── custom.css
│   │   └── pages
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── static
│   │   ├── img
│   │   │   ├── edificios-icon.svg
│   │   │   ├── ementas-icon.svg
│   │   │   ├── logo copy.svg
│   │   │   ├── parques-icon.svg
│   │   │   ├── senhas-icon.svg
│   │   │   ├── social-card.jpg
│   │   │   ├── ua-campus.png
│   │   │   └── ua.png
│   │   ├── openAPI-edificios.yaml
│   │   ├── openAPI-ementas.yaml
│   │   ├── openAPI-parques.yaml
│   │   └── openAPI-senhas.yaml
│   └── tsconfig.json
└── README.md
```

# TODO

- Completar documentação da API das ementas;
- Escrever a documentação das restantes API's;
- Colocar os testes a funcionar;
- Mudar as imagens;
- Fazer o modo pt e en.