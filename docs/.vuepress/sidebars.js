module.exports = {
  guide: () => [
    {
      title: 'Home',
      children: ['', 'getting-started', 'projects', 'annotator', 'exports']
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
