const geometrySidebar = require('../../js/geometry/.vuepress/api-sidebar.json')

// const modules = geometrySidebar.find(t => t.title === 'Modules')
// modules.children = modules.children.filter(s => !s.startsWith('classes'))

module.exports = ['', ...geometrySidebar]
