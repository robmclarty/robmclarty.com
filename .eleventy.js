const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')
const sass = require('sass')

const excludedTags = ['articles', 'arts', 'all']

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(rss)

  // Manually copy static assets.
  eleventyConfig.addPassthroughCopy('src/about/*')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy({ 'src/static/stylesheets/*.css': 'stylesheets' })
  eleventyConfig.addPassthroughCopy({ 'src/static/images': 'images' })
  eleventyConfig.addPassthroughCopy({ 'src/static/javascripts': 'javascripts' })
  eleventyConfig.addPassthroughCopy({ 'src/static/fonts': 'fonts' })
  eleventyConfig.addPassthroughCopy({ 'src/words/articles/**/*.jpg': 'images/words/articles' })

  // Create and use .scss extension and output as transformed .css
  // eleventyConfig.addTemplateFormats('scss')
  // eleventyConfig.addExtension('scss', {
  //   outputFileExtension: 'css', // default: "html"

  //   // `compile` is called once per .scss file in the input directory
  //   compile: async inputContent => {
  //     let result = sass.compileString(inputContent)

  //     // This is the render function, `data` is the full data cascade
  //     return async data => result.css
  //   }
  // })

  // Exclude from tagList.
  eleventyConfig.addCollection('tagList', collection => {
    const tagSet = new Set()

    collection.getAll().forEach(item => {
      if (!item.data.tags) return

      item.data.tags
        .filter(tag => !excludedTags.includes(tag))
        .forEach(tag => tagSet.add(tag))
    })

    return Array.from(tagSet).sort()
  })

  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  }
}
