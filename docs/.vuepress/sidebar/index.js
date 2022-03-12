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
        // {
        //   title: 'Annotator',
        //   // collapsable: true,
        //   children: [
        //     'annotator/concepts',
        //     'annotator/layouts',
        //     'annotator/images',
        //     'annotator/text',
        //     'annotator/audio'
        //   ]
        // },
        // {
        //   title: 'Python',
        //   collapsable: true,
        //   children: [
        //     'python/',
        //     'python/cli',
        //     'python/environment-variables',
        //     'python/examples'
        //   ]
        // },
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
      title: 'Annotation',
      children: [
        'Auto-Annotate',
        'Set up a labelling workforce',
        'Use Interpolation in video and DICOM',
        'Annotate DICOM images',
        'Image manipulation',

        {
          title: 'Add & Subtract Polygons',
          collapsable: true,
          children: [
            'Add & Subtract Polygons/Add-&-merge-polygons',
            'Add & Subtract Polygons/Subtract-&-Cut-polygons',
            'Add & Subtract Polygons/Merge-and-subtract-keyboard-shortcuts'
          ]
        },

        {
          title: 'The Brush Tool',
          collapsable: true,
          children: [
            'The Brush Tool/Erase-&-subtract-polygon-sections',
            'The Brush Tool/Add-to-&-link-polygon-sections',
            'The Brush Tool/Quickly-make-square-or-circle-annotations',
            'The Brush Tool/Brush-tool-keyboard-shortcuts'
          ]
        },

        {
          title: 'Organize annotations',
          collapsable: true,
          children: [
            'Organize annotations/Re-order-annotations',
            'Organize annotations/Hide-annotations',
            'Organize annotations/Video-timeline-order',
            'Organize annotations/Keyboard-shortcuts-for-annotation-order'
          ]
        },

      ]
    },


    {
      title: 'Dataset Management',
      children: [
        'Create a Dataset',
        'Create and use tags',
        'Filter & sort data',
        'Merge datasets',
        'User roles',
        'Make changes in bulk',
        'Manage your team classes',
        'Manage multiple teams',
        {
          title: 'Import visual data via the UI',
          collapsable: true,
          children: [
            'Import visual data via the UI/Supported file formats',
            'Import visual data via the UI/Upload video files',
            'Import visual data via the UI/Convert images and DICOM slices'
          ]
        },

        {
          title: 'Export your data',
          collapsable: true,
          children: [
            'Export your data/Create an Export Version',
            'Export your data/Download an Export',
            'Export your data/Computer Vision Export Formats'
          ]
        },

        {
          title: 'Workflow',
          collapsable: true,
          children: [
            'Workflow/Add your team',
            'Workflow/Set up your team workflow',
            'Workflow/Assign and complete tasks'
          ]
        },
      ]
    },

    {
      title: 'Documentation',
      children: [
        'Import visual data to DataTorch',
        'Webhooks',
        'Import visual data with Python',
        'SSO',
        'Use your own model',
        {
          title: 'External storage configuration',
          collapsable: true,
          children: [
            'External storage configuration/Google Cloud Storage',
            'External storage configuration/AWS S3',
            'External storage configuration/Azure Blob Storage',
            'External storage configuration/Registering images or videos'
          ]
        }
      ]
    },

    {
      title: 'CLI',
      children: [
        'Install CLI',
        'Import data CLI',
        'Export data CLI'
        
      ]
    },


    {
      title: 'PyTorch',
      children: [
        'Loading a dataset in Python',
        'Darwin X Torchvision',
        'Darwin X Detectron2'
        
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
      title: 'Enterprise',
      children: [
        {
          title: 'Deployment',
          children: ['helm-charts', 'docker-compose']
        },
        'monitoring'
      ]
    },

    {
      title: 'Neural Networks',
      children: [
        'Train a Neural Network',
        'Neural Networks with Auto-Annotate',
        'Label automatically',
        'Run models through API',
        'Scan text automatically',
        'Manage your models'
      ]
    },

    {
      title: 'Tutorials',
      children: [
        'tutorial-keypoints',
        'tutorial-import-coco',
        'tutorial-setup-python'
      ]
    }
  ],
  geometryjs: () => [...geometryjs]
}
