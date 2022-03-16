const geometryjs = require('./geometry')

module.exports = {
  guide: () => [
    {
      title: 'Home',
      collapsable: false,
      children: [
        '',
        'quickstart',
      ]
    },

    {
      title: 'Project Management',
      collapsable: false,
      children: [
        'overview-project-management',
        'tutorial-collab-project-setup',
        'tutorial-data-setup',
        'create-projects',
        'create-organizations',
        'collaborators-permissions',
        'project-about-section',
        'manage-filesources',
        'manage-datasets',
      ]
    },

    {
      title: 'Data Annotation',
      collapsable: false,
      children: [
        'overview-data-annotation',
        'annotate-existing-label',
        'create-label',
        'annotation-tools',
        'annotation-metadata',
        'model-assisted-annotation',
        'custom-annotation-tools',
        'create-schema',
        'download-schema'
      ]
    },

    {
      title: 'Automation',
      collapsable: false,
      children: [
        'overview-automation',
        'install-python',
        'tutorial-import-coco',
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
          children: [
            'agents/',
            'agents/pipelines',
            'agents/actions',
            'agents/variables'
          ]
        }
      ]
    }
  ],
  geometryjs: () => [...geometryjs]
}
