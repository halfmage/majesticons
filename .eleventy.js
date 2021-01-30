const htmlmin = require("html-minifier");
const fg = require("fast-glob");
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("icons");

  // Custom files
  eleventyConfig.addPassthroughCopy("./site.webmanifest");
  eleventyConfig.addPassthroughCopy("./social.png");

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
    "./node_modules/clipboard/dist/clipboard.min.js": "./js/clipboard.js",
  });

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
