// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-category-template-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/templates/CategoryTemplate.js")),
  "component---src-templates-post-template-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/templates/PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/templates/PageTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/shayo/workspace/resume-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/pages/404.js")),
  "component---src-pages-category-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/pages/category.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/shayo/workspace/resume-website/src/pages/search.js"))
}

