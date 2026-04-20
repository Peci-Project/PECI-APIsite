import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/* Configuração geral para a documentação dos serviços */
const commonScalarConfig = {
  hideClientButton: true,
  hideTestRequest: true,
  hideModels: true,
  customCss: `
    /* Esconde o segundo badge (OAS 3.0.0) */
    .flex.gap-1\\.5 .badge:nth-of-type(2) { 
      display: none !important; 
    }

    /* Esconde o download e as client libraries */
    .download-container, .scalar-reference-intro-clients { 
      display: none !important; 
    }

    /* Esconde o Ask AI Agent (usando a classe exata do teu print) */
    .agent-button-container,
    .ask-agent-scalar-input,
    .ask-agent-scalar-send,
    [class*="agent-button"] {
      display: none !important;
    }
  `,
};

const config: Config = {
  title: 'API',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/ua.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  plugins: [
    /* Lista de serviços */
    [
      '@scalar/docusaurus',
      {
        id: 'edificios',
        label: 'Edifícios',
        route: '/api/edificios',
        showNavLink: false,
        configuration: {
          url: '/openAPI-edificios.yaml',
          metaData: { title: 'ArcGis',},
          ...commonScalarConfig,
        },
      } as ScalarOptions,    
    ],
    [
      '@scalar/docusaurus',
      {
        id: 'parques',
        label: 'Parques',
        route: '/api/parques',
        showNavLink: false,
        configuration: {
          url: '/openAPI-parques.yaml',
          metaData: { title: 'Parques', },
          ...commonScalarConfig,
        },
      } as ScalarOptions,
    ],
    [
      '@scalar/docusaurus',
      {
        id: 'senhas',
        label: 'Senhas',
        route: '/api/senhas',
        showNavLink: false,
        configuration: {
          url: '/openAPI-senhas.yaml',
          metaData: { title: 'SAC',},
          ...commonScalarConfig,
        },
      } as ScalarOptions,    
    ],
    [
      '@scalar/docusaurus',
      {
        id: 'ementas',
        label: 'Ementas',
        route: '/api/ementas',
        showNavLink: false,
        configuration: {
          url: '/openAPI-ementas.yaml',
          metaData: { title: 'SAS',},
          ...commonScalarConfig,
        },
      } as ScalarOptions,    
    ],
    [
      '@scalar/docusaurus',
      {
        id: 'rss2json',
        label: 'Rss2json',
        route: '/api/rss2json',
        showNavLink: false,
        configuration: {
          url: '/openAPI-rss2json.yaml',
          metaData: { title: 'Rss2json', },
          ...commonScalarConfig,
        },
      } as ScalarOptions,
    ],
  ],

  themeConfig: {
    // Alterar o social card
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'UA Logo',
        src: 'img/ua.png',
      },
      items: [
        /* Dropdown de serviços na nav bar */
        {
          type: 'dropdown',
          label: "Serviços",
          position: 'left',
          items: [
          { label: 'Edifícios', to: '/api/edificios' },
          { label: 'Parques', to: '/api/parques' },
          { label: 'Senhas', to: '/api/senhas' },
          { label: 'Ementas', to: '/api/ementas' },
          { label: 'Rss2json', to: '/api/rss2json' },
          ]
        }
      ],
    },
    footer: {
      links: [
        {
          title: "API's",
          items: [
            {
              label: 'Edifícios',
              to: '/api/edificios',
            },
            {
              label: 'Parques',
              to: '/api/parques',
            },
            {
              label: 'Senhas',
              to: '/api/senhas',
            },
            {
              label: 'Ementas',
              to: '/api/ementas',
            },
            {
              label: 'Rss2json',
              to: '/api/rss2json',
            },
          ],
        },
      ],
      // Mudar o copyright
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default {
  url: 'https://peci-project.github.io',   // ex: https://carlosramos.github.io
  baseUrl: '/PECI-APIsite/',         // ex: /meu-site/
  organizationName: 'peci-project',         // o teu username do GitHub
  projectName: 'PECI-APIsite',       // o nome exato do repositório
  trailingSlash: false,

};
