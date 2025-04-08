import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://paymentpointers.org",
  integrations: [
    starlight({
      title: "Blank Starlight",
      description: "Blank Starlight site for docs team to experiment and play around with.",
      customCss: [
        "./node_modules/@interledger/docs-design-system/src/styles/teal-theme.css",
        "./node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css",
      ],
      plugins: [starlightLinksValidator()],
      components: {
        Header: "./src/components/Header.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
      },
      expressiveCode: {
        styleOverrides: {
          borderColor: "transparent",
          borderRadius: "var(--border-radius)",
        },
      },
      social: {
        github: "https://github.com/interledger/blank-starlight",
      },
      sidebar: [
        {
          label: "Overview",
          items: [
            {label: "Introducing Rafiki", link: "overview/intro"},
              {
                label: "Concepts",
                collapsed: true,
                items: [],
              },
          ],
        },
        {
          label: "Installation",
          items: [
            "installation/docker",
            "installation/kubernetes",
          ],
        },
        {
          label: "Integration",
          items: [
            {
              label: "Requirements",
              collapsed: true,
              items: [],
            },
            {
              label: "Services",
              collapsed: true,
              items: [],
            },
            {
              label: "Test locally",
              collapsed: true,
              items: [],
            },
          ],
        },
        {
          label: "Administration",
          collapsed: true,
          items: [
            {label: "Rafiki Admin", link: "overview/intro"},
            {
              label: "Manage liquidity",
              collapsed: true,
              items: [],
            },
          ],
        },
        {
          label: "Resources",
          collapsed: true,
          items: [
            {label: "Item", link: "overview/intro"},
          ],
        },
        {
          label: "APIs",
          collapsed: true,
          items: [
            {label: "Item", link: "overview/intro"},
          ],
        },
      ],
    }),
  ],
  server: {
    port: 1107,
  },
});
