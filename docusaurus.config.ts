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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Sin editUrl: no se muestra "Editar esta página" (mantenimiento vía repo privado al equipo).
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
              to: '/intro',
            },
            {
              label: 'Arquitectura',
              to: '/arquitectura',
            },
            {
              label: 'Primeros pasos',
              to: '/primeros-pasos',
            },
            {
              label: 'Integraciones',
              to: '/integraciones',
            },
          ],
        },
        {
          title: 'Enlaces',
          items: [
            {
              label: 'Sitio web Zink ERP',
              href: 'https://zinkerp.com',
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
