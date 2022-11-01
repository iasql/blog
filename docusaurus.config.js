const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const prodConfig = {
  url: 'https://iasql.github.io',
};
const localConfig = {
  url: 'http://localhost:3000'
};
const config = process.env.IASQL_ENV === 'local' ? localConfig : prodConfig;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'IaSQL',
  tagline: 'Infrastructure as data using PostgreSQL',
  url: config.url,
  baseUrl: '/blog/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
        gtag: {
          trackingID: 'G-J20KBVRLE4',
        },
      }),
    ],
  ],

  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_WjwJsXXSuEl2R2zElUWL55mWpNIfWR8HrFvjxwlTGWH",
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: false, // optional
        // other options are passed to posthog-js init as is
      },
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
            to: 'https://dbdocs.io/iasql/iasql',
            target: '_self',
            label: 'Schema',
          },
          {
            to: 'https://docs.iasql.com',
            target: '_self',
            label: 'Docs',
          },
          {
            to: 'https://discord.com/invite/machGGczea',
            target: '_self',
            label: 'Discord',
          },
          {
            href: 'https://github.com/iasql/iasql-engine',
            position: 'right',
            className: 'header-github-link',
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
                label: 'Docs',
                href: 'https://docs.iasql.com',
                target: '_self',
              },
              {
                label: 'Schema',
                href: 'https://dbdocs.io/iasql/iasql',
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
