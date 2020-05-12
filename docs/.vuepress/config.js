const sidebars = require('./sidebars')
const plugins = require('./plugins')

module.exports = context => ({
  title: 'DataTorch Documentation',
  locales: {
    '/en/': {
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
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/': sidebars.guide()
        }
      }
    }
  },
  plugins: plugins()
})
