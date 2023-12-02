const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')
// const Image = require('@11ty/eleventy-img')

const excludedTags = ['articles', 'arts', 'all']

// const imageShortcode = async (
//   src,
//   alt,
//   className = undefined,
//   widths = [400, 800, 1280],
//   formats = ['jpeg'],
//   sizes = '100vw'
// ) => {
//   const imageMetadata = await Image(src, {
//     widths: [...widths, null],
//     formats: [...formats, null],
//     outputDir: 'images/words/articles',
//     urlPath: '/images/words/articles',
//   });
//   const imageAttributes = {
//     alt,
//     sizes,
//     loading: "lazy",
//     decoding: "async",
//   };

//   return Image.generateHTML(imageMetadata, imageAttributes);
// }

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(rss)
  // eleventyConfig.addShortcode('image', imageShortcode)

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
