const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')

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
  eleventyConfig.addPassthroughCopy({ 'src/words/articles/**/*.jpg': 'images/words/articles' }) // how to preserve folder structure?

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
