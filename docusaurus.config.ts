import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZinK ERP — Documentación',
  tagline: 'Guías y referencia del producto',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.zinkerp.com',
  baseUrl: '/',

  organizationName: 'ZinkInTech',
  projectName: 'ZiT-ERP_DocsPublica_FE',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ZinkInTech/ZiT-ERP_DocsPublica_FE/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ZinK ERP',
      logo: {
        alt: 'ZinK ERP',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/ZinkInTech/ZiT-ERP_DocsPublica_FE',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Arquitectura',
              to: '/docs/arquitectura',
            },
            {
              label: 'Primeros pasos',
              to: '/docs/primeros-pasos',
            },
          ],
        },
        {
          title: 'Repositorio',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ZinkInTech/ZiT-ERP_DocsPublica_FE',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ZinK ERP. Documentación generada con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
