const sidebars = require('./sidebar')
const plugins = require('./plugins')

module.exports = context => ({
  title: 'DataTorch Documentation',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'DataTorch Documentation',
      description:
        'DataTorch Documentation. Learn everything you need to know about the DataTorch platform.'
    }
  },
  themeConfig: {
    logo: '/favicon-40x40.png',
    repo: 'datatorch/documentation',
    editLinks: true,
    smoothScroll: true,
    docsDir: 'docs',
    sidebarDepth: 2,
    algolia: {
      apiKey: '50841ae57ba1849ebda7fd9772332dc7',
      indexName: 'datatorch'
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/js/geometry/': sidebars.geometryjs(),
          '/': sidebars.guide()
        }
      }
    }
  },
  plugins: plugins()
})
