const devSidebar = require('../../dev/.vuepress/api-sidebar.json')

// const modules = devSidebar.find(t => t.title === 'Modules')
// modules.children = modules.children.filter(s => !s.startsWith('classes'))

module.exports = ['', ...devSidebar]
