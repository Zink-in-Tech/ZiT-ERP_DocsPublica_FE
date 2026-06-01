import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZinK ERP — Documentación',
  tagline: 'Guías y referencia del producto',
  favicon: 'img/favicon.svg',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '7E47B8905C7F835D',
      },
    },
  ],

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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/configuracion/integracion',
            to: '/integraciones',
          },
          {
            from: '/ayuda/integraciones/woocommerce',
            to: '/integraciones/woocommerce',
          },
          {
            from: '/ayuda/integraciones/mercado-pago',
            to: '/integraciones/mercado-pago',
          },
          {
            from: '/ayuda/integraciones/facturante',
            to: '/integraciones/facturante',
          },
          {
            from: '/ayuda/integraciones/delegacion-autorizacion-comprobantes-arca',
            to: '/integraciones/delegacion-autorizacion-comprobantes-arca',
          },
          {
            from: '/admin/dashboard',
            to: '/admin/tablero',
          },
          {
            from: '/compras/orden-compras',
            to: '/compras/orden-compra',
          },
          {
            from: '/compras/orden_compra',
            to: '/compras/orden-compra',
          },
        ],
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],

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
    image: 'img/og-docs-zinkerp.png',
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
              label: 'Informes',
              to: '/informes',
            },
            {
              label: 'Integraciones',
              to: '/integraciones',
            },
            {
              label: 'Problemas frecuentes',
              to: '/problemas-frecuentes',
            },
            {
              label: 'Glosario',
              to: '/glosario',
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
    algolia: {
      appId: '5ZD369E1WB',
      apiKey: 'f6654a27606a2f4cfee6ed715e70e123',
      indexName: 'ZinK ERP Docs',
    },
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'dark',
      },
      options: {
        themeVariables: {
          primaryColor: '#f5f0fa',
          primaryBorderColor: '#7500b9',
          primaryTextColor: '#333',
          lineColor: '#008ed3',
          secondaryColor: '#e8f4fc',
          tertiaryColor: '#fafafa',
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
