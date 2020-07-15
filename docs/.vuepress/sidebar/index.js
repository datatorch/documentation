const geometryjs = require('./geometry')

module.exports = {
  guide: () => [
    {
      title: 'Guide',
      children: [
        '',
        'getting-started',
        'projects',
        'exports',
        {
          title: 'Annotator',
          collapsable: true,
          children: [
            'annotator/concepts',
            'annotator/layouts',
            'annotator/images',
            'annotator/text',
            'annotator/audio'
          ]
        },
        {
          title: 'Python',
          collapsable: true,
          children: [
            'python/',
            'python/cli',
            'python/environment-variables',
            'python/examples'
          ]
        },
        {
          title: 'Agents',
          collapsable: true,
          children: ['agents/', 'agents/flows', 'agents/actions']
        }
      ]
    },
    {
      title: 'Enterprise',
      children: [
        {
          title: 'Deployment',
          collapsable: true,
          children: ['helm-charts', 'docker-compose']
        },
        'monitoring'
      ]
    }
  ],
  geometryjs: () => [...geometryjs]
}
