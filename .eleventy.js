module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  const url = process.env.GITHUB_ACTIONS
  ? 'https://vickymidson.github.io/design-history/'
  : '/'
const pathPrefix = process.env.GITHUB_ACTIONS
  ? '/design-history/'
  : '/'
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    pathPrefix, 
    url,
    header: {
      organisationLogo: false,
      productName: 'Apply for a juggling licence design history',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      contentLicence: {
        html: 'A service for circus professionals. <a class="govuk-footer__link" href="">GitHub source</a>.'
      },
      copyright: {
        text: '© X-GOVUK'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
