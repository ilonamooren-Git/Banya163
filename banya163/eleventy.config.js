import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function (config) {
  config.addPassthroughCopy({ static: "/" });
  config.addPassthroughCopy({ "pages/images": "images" });

  // Foto's automatisch verkleinen en als WebP aanbieden, hoe groot de upload ook is.
  config.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "auto"],
    widths: [640, 1280, 2000],
    htmlOptions: { imgAttributes: { loading: "lazy", decoding: "async", sizes: "(max-width: 860px) 100vw, 60vw" } },
  });

  // Tekstvak uit het CMS -> alinea's (lege regel = nieuwe alinea).
  config.addFilter("paras", (text, cls) => {
    const c = cls ? ` class="${cls}"` : "";
    return String(text || "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
      .map((p) => `<p${c}>${esc(p).replace(/\n/g, "<br>")}</p>`).join("\n");
  });
  config.addFilter("lines", (text) => esc(text).replace(/\n/g, "<br>"));

  return {
    dir: { input: "pages", includes: "../_includes", data: "../content", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
