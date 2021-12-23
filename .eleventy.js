const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt = "", sizes = "1320px", classes = "", styles = "") {
  let metadata = await Image(`./src/images/${src}`, {
    widths: [200, 400, 800, 1200, 1600, null],
    formats: ["webp", "jpeg"],
    urlPath: "/images/",
    outputDir: "./dist/images/",
    // dryRun: true
  });

  const data = metadata.jpeg;
  const lowsrc = metadata.jpeg[0];

  // return `<img src="${lowsrc.url}" srcset="${data.map(img => img.srcset).join(", ")}" sizes="${sizes}" alt="${alt}" ${classes ? 'class="' + classes + '"' : ''} ${styles ? 'style="' + styles + '"' : ''} loading="lazy" decoding="async">`;
  return `<picture class="full-width">
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
    }).join("\n")}
      <img
        src="${lowsrc.url}"
        alt="${alt}"
        ${classes ? 'class="' + classes + '"' : ''}
        ${styles ? 'style="' + styles + '"' : ''}
        loading="lazy"
        decoding="async">
    </picture>`;
}

module.exports = config => {

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/fonts/');
  // config.addPassthroughCopy('./src/images/');
  // favicons
  config.addPassthroughCopy('./src/*.png');
  config.addPassthroughCopy('./src/*.svg');
  config.addPassthroughCopy('./src/*.ico');

  // pre-process images
  config.addNunjucksAsyncShortcode("image", imageShortcode);
  config.addLiquidShortcode("image", imageShortcode);
  config.addJavaScriptFunction("image", imageShortcode);

  return {
    // Tell eleventy to process templates with Nunjucks
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    // Define input and output folders
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};