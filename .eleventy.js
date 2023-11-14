const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')

const excludedTags = ['articles', 'arts', 'all']

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(rss)

  // Manually copy static assets.
  eleventyConfig.addPassthroughCopy('src/stylesheets')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy("src/javascripts")
  eleventyConfig.addPassthroughCopy('src/about/*')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')

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
