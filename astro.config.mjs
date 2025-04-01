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
      sidebar: [],
    }),
  ],
  server: {
    port: 1107,
  },
});
