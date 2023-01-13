const meta = require("./src/_data/meta");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("inspect", require("node:util").inspect);
  eleventyConfig.addFilter("abs_url", function (path, base=meta.base) {
    return new URL(path, base).href;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
