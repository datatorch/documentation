const sidebars = require('./sidebars')

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
          '/guide/': sidebars.guide()
        }
      }
    }
  }
})
