import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "A Sense of Engineering",
  tagline: "Lecture notes",
  url: "https://example.github.io",
  baseUrl: "/sense-of-engineering/notes/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
      return {
        name: "transpile-shared",
        configureWebpack() {
          return {
            resolve: {
              symlinks: false,
            },
            module: {
              rules: [
                {
                  test: /\.[jt]sx?$/,
                  include: [
                    path.resolve(__dirname, "../../../packages/shared/src"),
                  ],
                  use: {
                    loader: "swc-loader",
                    options: {
                      jsc: {
                        parser: { syntax: "typescript", tsx: true },
                        transform: { react: { runtime: "automatic" } },
                      },
                    },
                  },
                },
              ],
            },
          };
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
