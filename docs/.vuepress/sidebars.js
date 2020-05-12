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
            'annotator-concepts',
            'annotator-images',
            'annotator-text',
            'annotator-audio'
          ]
        },
        'exports'
      ]
    },
    {
      title: 'Advanced',
      children: []
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
  ]
}
