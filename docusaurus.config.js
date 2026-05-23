// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Reshma‑Core Documentation",
  tagline: "Backend API, Architecture, and Developer Guides",
  favicon: "img/app-logo.png",
  url: "https://afzal14786.github.io",
  baseUrl: "/docs-reshma/",
  organizationName: "Afzal14786",
  projectName: "reshma-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: { defaultLocale: "en", locales: ["en"] },
  markdown: { mermaid: true, format: "md" },
  themes: ["@docusaurus/theme-mermaid"],
  
  // 1. Move stylesheets HERE to the root level!
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap",
      type: "text/css",
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/Afzal14786/reshma-docs/edit/main/",
          exclude: ["**/README.md"],
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      },
    ],
  ],
  themeConfig: {
    image: "img/app-logo.png",
    colorMode: { respectPrefersColorScheme: true },
    // No announcement bar – it's a private repo
    navbar: {
      title: "Reshma‑Core",
      logo: { alt: "Reshma Bangles Logo", src: "img/app-logo.png" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/Afzal14786",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {},
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;  
