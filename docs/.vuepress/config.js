const sidebars = require('./sidebar')
const plugins = require('./plugins')

module.exports = context => ({
  title: 'DataTorch Documentation',
  head: [[
    'link', {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
    }]
  ],
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
    displayAllHeaders: true,
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
