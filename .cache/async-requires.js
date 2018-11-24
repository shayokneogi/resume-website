// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-category-template-js": () => import("/Users/shayo/workspace/resume-website/src/templates/CategoryTemplate.js" /* webpackChunkName: "component---src-templates-category-template-js" */),
  "component---src-templates-post-template-js": () => import("/Users/shayo/workspace/resume-website/src/templates/PostTemplate.js" /* webpackChunkName: "component---src-templates-post-template-js" */),
  "component---src-templates-page-template-js": () => import("/Users/shayo/workspace/resume-website/src/templates/PageTemplate.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/shayo/workspace/resume-website/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/shayo/workspace/resume-website/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-category-js": () => import("/Users/shayo/workspace/resume-website/src/pages/category.js" /* webpackChunkName: "component---src-pages-category-js" */),
  "component---src-pages-contact-js": () => import("/Users/shayo/workspace/resume-website/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/shayo/workspace/resume-website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-search-js": () => import("/Users/shayo/workspace/resume-website/src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */)
}

exports.data = () => import("/Users/shayo/workspace/resume-website/.cache/data.json")

