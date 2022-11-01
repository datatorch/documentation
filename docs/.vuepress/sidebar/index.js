const geometryjs = require('./geometry')

module.exports = {
  guide: () => [
    {
      title: 'Home',
      collapsable: false,
      children: [
        '',
        'quickstart',
        {
          title: 'Background',
          collapsable: false,
        }
      ]
    },

    {
      title: 'Project Management',
      collapsable: false,
      children: [
        'overview-project-management',
        'tutorial-collab-project-setup',
        'tutorial-data-setup',
        'projects',
        {
          title: 'Organizations',
          collapsable: false,
        },
        {
          title: 'Collaborators and permissions',
          collapsable: false,
        },
        {
          title: 'Dashboards',
          collapsable: false,
        },
        {
          title: 'Filesources',
          collapsable: false,
        },
        {
          title: 'Datasets',
          collapsable: false,
        }
      ]
    },

    {
      title: 'Data Annotation',
      collapsable: false,
      children: [
        'overview-data-annotation',
        'tutorial-keypoints',
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
        'tutorial-upload-data-python',
        'tutorial-graphql-api',
        'tutorial-agents-pipelines',
        'tutorial-import-coco',
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
    },

    {
      title: 'Python',
      collapsable: false,
      children: [
        'python/overview-python',
        'tutorial-upload-data-python',
        'python/tutorial-upload-data-google-collab',
        'python/cli',
        'python/environment-variables',
        'python/examples'
      ]
    }
  ],
  geometryjs: () => [...geometryjs]
}
