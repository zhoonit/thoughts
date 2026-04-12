import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "A Sense of Engineering",
  tagline: "Lecture notes",
  url: "https://example.github.io",
  baseUrl: "/sense-of-engineering/notes/",
  onBrokenLinks: "warn",
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: "A Sense of Engineering",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: " ",
          items: [
            {
              label: "이용 문의",
              to: "/license",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} A Sense of Engineering <a href="mailto:zhoonit@gmail.com">zhoonit@gmail.com</a>`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
