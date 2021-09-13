module.exports = config => {
    
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