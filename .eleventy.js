const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')

const excludedTags = ['articles', 'arts', 'all']

module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    'md',
    'njk',
    'jpg' // include images as "templates" so they get automatically copied alongside the html output
  ])

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(rss)

  // Manually copy static assets.
  eleventyConfig.addPassthroughCopy('src/about/*')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/index.html')
  eleventyConfig.addPassthroughCopy({ 'src/static/stylesheets/*.css': 'stylesheets' })
  eleventyConfig.addPassthroughCopy({ 'src/static/images': 'images' })
  eleventyConfig.addPassthroughCopy({ 'src/static/javascripts': 'javascripts' })
  eleventyConfig.addPassthroughCopy({ 'src/static/fonts': 'fonts' })

  eleventyConfig.addPassthroughCopy('src/art')
  eleventyConfig.addPassthroughCopy('src/web')

  // Exclude from tagList.
  eleventyConfig.addCollection('tagList', collection => {
    const tagSet = new Set()

    collection.getAll().forEach(el => {
      if (!el.data.tags) return

      el.data.tags
        .filter(tag => !excludedTags.includes(tag))
        .forEach(tag => tagSet.add(tag))
    })

    return Array.from(tagSet).sort()
  })

  eleventyConfig.addCollection('wordTags', collection => {
    const tagSet = new Set()

    collection.getAll().forEach(el => {
      if (!el.data.tags) return

      el.data.tags
        .filter(tag => !excludedTags.includes(tag))
        .filter(tag => tag.substring(0, 4) !== 'art-')
        .forEach(tag => tagSet.add(tag))
    })

    return Array.from(tagSet).sort()
  })

  // TODO: sort somehow so same articles aren't always on top
  eleventyConfig.addFilter('morePublishedWords', (arr, collectionName, currentUrl, limit = undefined) => {
    return arr
      .filter(el => el.data.published)
      .filter(el => el.data.tags.includes(collectionName))
      .filter(el => el.url !== currentUrl)
      .slice(0, limit)
  })

  eleventyConfig.addNunjucksShortcode("current_year", () => {
    return "2024";
  })

  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  }
}
