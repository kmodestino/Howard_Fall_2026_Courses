import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Prof. Modestino | Howard University",
    pageTitleSuffix: "Spring 2026",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "kmodestino.github.io/Howard_Spring2026_Courses",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
  lightMode: {
  light: "#faf8f8",         // Page background
  lightgray: "#e5e5e5",     // Borders
  gray: "#b8b8b8",          // Graph links/dates
  darkgray: "#4e4e4e",      // Body text
  dark: "#2b2b2b",          // Header text
  secondary: "#003A70",     // Howard Blue (Links/Folders)
  tertiary: "#E51937",      // Howard Red (Hover effect)
  highlight: "rgba(0, 58, 112, 0.15)", // Page link background
  textHighlight: "#fff2ad", // The yellow "highlighter" color for search/marked text
},
 darkMode: {
  light: "#161617",         // Dark background
  lightgray: "#393639",     // Borders
  gray: "#646464",          // Meta-text/dates
  darkgray: "#d4d4d4",      // Body text
  dark: "#ebebec",          // Header text
  secondary: "#7ea3ff",     // Softer Blue (easier for eyes in dark mode)
  tertiary: "#ff7e7e",      // Softer Red/Pink (hover effect)
  highlight: "rgba(126, 163, 255, 0.15)", // Subtle link highlight
  textHighlight: "#b3aa02", // Darker gold highlight for search hits
},
},
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
