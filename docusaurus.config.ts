import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zink ERP — Documentación',
  tagline: 'Guías operativas, integraciones y ayuda para implementar Zink ERP',
  favicon: 'img/favicon.svg',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '7E47B8905C7F835D',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content:
          'Documentación de Zink ERP con guías de ventas, compras, inventario, finanzas, configuración e integraciones para pymes.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'es_AR',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'Documentación de Zink ERP',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content:
          'Guías de ventas, compras, inventario, finanzas, configuración e integraciones para operar Zink ERP.',
      },
    },
  ],

  future: {
    v4: true,
  },

  clientModules: [require.resolve('./src/clientModules/tocScrollEnhancements.ts')],

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
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const items = await defaultSidebarItemsGenerator(args);

            const flatten = (nodes: typeof items): typeof items =>
              nodes.map((item) => {
                if (item.type !== 'category') {
                  return item;
                }

                const isNovedades =
                  item.label === 'Novedades' ||
                  (item.link?.type === 'doc' && item.link.id === 'novedades/novedades') ||
                  item.items.some(
                    (child) => child.type === 'doc' && child.id === 'novedades/novedades',
                  );

                if (isNovedades) {
                  return {
                    type: 'doc' as const,
                    id: 'novedades/novedades',
                    label: 'Novedades',
                  };
                }

                return {...item, items: flatten(item.items)};
              });

            return flatten(items);
          },
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
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Zink ERP',
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
          to: '/novedades',
          position: 'left',
          label: 'Novedades',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/intro',
            },
            {
              label: 'Novedades',
              to: '/novedades',
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
          title: 'Soporte',
          items: [
            {
              label: 'WhatsApp soporte',
              href: 'https://wa.me/5491135598389',
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
      copyright: `© ${new Date().getFullYear()} Zink in Tech · Zink ERP. Documentación oficial.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: '5ZD369E1WB',
      apiKey: 'f6654a27606a2f4cfee6ed715e70e123',
      indexName: 'ZinkERP-Docs',
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
