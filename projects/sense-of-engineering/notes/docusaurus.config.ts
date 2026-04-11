import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "A Sense of Engineering",
  tagline: "Lecture notes",
  url: "https://example.github.io",
  baseUrl: "/sense-of-engineering/notes/",
  onBrokenLinks: "warn",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: [require.resolve("@lectures/shared/theme")],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function transpileSharedPlugin() {
      const sharedSrc = path.resolve(__dirname, "../../../packages/shared/src");
      return {
        name: "transpile-shared",
        configureWebpack(config) {
          // Extend Docusaurus's existing babel-loader rule to also
          // transpile @lectures/shared source TypeScript
          const babelRule = config.module?.rules?.find(
            (r: any) =>
              r?.use?.[0]?.loader &&
              String(r.use[0].loader).includes("babel-loader"),
          ) as any;
          if (babelRule?.include) {
            if (Array.isArray(babelRule.include)) {
              babelRule.include.push(sharedSrc);
            } else {
              babelRule.include = [babelRule.include, sharedSrc];
            }
          }
          return {};
        },
      };
    },
  ],

  themeConfig: {
    navbar: {
      title: "A Sense of Engineering",
      items: [
        {
          href: "/sense-of-engineering/slides/",
          label: "Slides",
          position: "right",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
