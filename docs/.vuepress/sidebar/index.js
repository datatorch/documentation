const geometryjs = require('./geometry')

module.exports = {
  guide: () => [
    {
      title: 'Guide',
      children: [
        '',
        'getting-started',
        'projects',
        {
          title: 'Annotator',
          collapsable: true,
          children: [
            'annotator/concepts',
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
        'exports'
      ]
    },
    {
      title: 'Enterprise',
      children: [
        {
          title: 'Deployment',
          collapsable: true,
          children: ['helm-charts', 'docker-compose']
        }
      ]
    }
  ],
  geometryjs: () => [...geometryjs]
}
