module.exports = config => {

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/css/');
    config.addPassthroughCopy('./src/fonts/');
    config.addPassthroughCopy('./src/images/');
    
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