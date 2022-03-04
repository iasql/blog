const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const baseConfig = {
  url: 'https://blog.iasql.com',
};
const localConfig = {
  url: 'http://localhost:3000'
};
const config = process.env.IASQL_ENV === 'local' ? Object.assign(baseConfig, localConfig) : baseConfig;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'IaSQL',
  tagline: 'Cloud Infra as a SQL DB',
  url: config.url,
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  customFields: config,

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          width: '70',
          alt: 'logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
          href: 'https://iasql.com',
          target: '_self',
        },
        items: [
          {
            to: 'https://github.com/iasql/iasql-engine',
            target: '_self',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://discord.com/invite/machGGczea',
            target: '_self',
            label: 'Discord',
            position: 'right'
          },
          {
            to: 'https://docs.iasql.com',
            target: '_self',
            label: 'Docs',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Home',
                href: 'https://iasql.com',
                target: '_self',
              },
              {
                label: 'Docs',
                href: 'https://docs.iasql.com',
                target: '_self',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/iasql/iasql-engine',
                target: '_self',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/yxNBQugGbH',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/iasql',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
