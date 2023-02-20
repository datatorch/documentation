# Variables

You can use expressions to programmatically access contexts or set variables in pipeline files and action-datatorch.yaml files. An expression can be any combination of literal values,
references to a context, or functions. You can combine literals, context
references, and functions using operators.

## Context

Contexts are a way to access information about workflow runs, runner
environments, jobs, and steps. Contexts use the following syntax.

::: v-pre
`${{ <context> }}`
:::

| Variable               |  Type  | Description                                                                                                            |
| ---------------------- | :----: | ---------------------------------------------------------------------------------------------------------------------- |
| agent                  | object | Information about the agent.                                                                                           |
| agent.id               | object | ID of the agent.                                                                                                       |
| machine                | object | Information about the machine the agent is running on.                                                                 |
| machine.name           | string | The computer’s network name. An empty string is returned if the value cannot be determined.                            |
| machine.os             | string | The system/OS name, e.g. `Linux`, `Windows`, or `Java`. An empty string is returned if the value cannot be determined. |
| machine.version        | string | The system’s release version, e.g. `#3 on degas`. An empty string is returned if the value cannot be determined.       |
| python                 | string | Information about the python instance the agent is running on.                                                         |
| python.version         | string | Python version of the current agent.                                                                                   |
| python.implementation  | string | Python implementation of the current agent.                                                                            |
| pipeline               | object | Information about the pipeline                                                                                         |
| pipeline.id            | string | Id of the current pipeline                                                                                             |
| pipeline.name          | string | Name of the current pipeline                                                                                           |
| pipeline.creatorId     | string | Id of the user who created this pipeline                                                                               |
| pipeline.projectId     | string | Id of the project this pipeline belongs to                                                                             |
| pipeline.lastRunNumber |  int   | Last number used for running                                                                                           |
| run                    | object | Information about the run                                                                                              |
| run.id                 | string | ID of the pipeline run.                                                                                                |
| run.name               | string | Name of the pipeline run.                                                                                              |
| run.config             | object | Parse JSON version of the runs YAML.                                                                                   |
| run.runNumber          |  int   | Number of the pipeline run.                                                                                            |
| step                   | object | Information about the current running step.                                                                            |
| step.id                | string | ID of the step.                                                                                                        |
| step.name              | string | name of the step.                                                                                                      |
| action                 | object | Information about the current (or previous if no action is active) action being executed.                              |
| action.name            | string | Name of the action.                                                                                                    |
| action.version         | string | Version of the action.                                                                                                 |
| action.directory       | string | Directory where the actions files are.                                                                                 |
| variable               | object | Contains inputs and outputs from previous steps                                                                        |
| variable.`<key>`       |  any   | Input and output from previous steps. All inputs and outputs are added to this variable object.                        |

## Examples

A Datatorch pipeline file using context for a custom annotator tool:

```yaml
# DataTorch Pipeline file
# This is NOT an action-datatorch.yaml file

name: DEXTR

triggers:
  # Adds a button to the annotator.
  annotatorButton:
    name: "DEXTR"
    icon: brain
    # Annotator will prompt the user for 4 points before triggering the pipeline
    flow: 4-points

jobs:
  predict:
    # Properties about the trigger event can be accessed at 'event' property
    steps:
      - name: Download File
        action: datatorch/download-file@v1
        inputs:
          # Get the file id for the event that triggered this.
          fileId: ${{ event.fileId }}

      - name: Predict Segmentation
        action: datatorch/dextr@latest
        inputs:
          # Download file path from the previous action.
          imagePath: ${{ variable.path }}
          # Get the 4 points the user clicked
          points: ${{ event.flowData.points }}
          # Annotation created by the four points. We will insert the
          # segmentation into this annotation
          annotationId: ${{ event.annotationId }}
```

An action-datatorch.yaml file in an action repository for inporting COCO annotations:

```yaml
# action-datatorch.yaml

name: Import COCO
description: Imports annotation in COCO format into a DataTorch Project. Files are are matched by name.
inputs:
  path:
    type: string
    required: true
    description: Absolute path to the coco file
  bbox:
    type: boolean
    default: false
    description: Create a bbox annotation.
  segmentation:
    type: boolean
    default: true
    description: Create segmentation annotations.
  project:
    type: string
    default: ${{ pipeline.projectId }}
    description: >
      Id or namespace and slug of the project to import the annotations into. This
      will default to the flows project if not set.
  maxIou:
    type: float
    default: 0.99
    description: >
      If an annotation exists on the file with an union over intersection of the
      annotation about to be imported, the annotation will not be imported. Set
      to 0 to disable. Disabling can significantly increase performance.
  simplify:
    type: float
    default: 0.5
    description: >
      Simplification tolerance applied to coco segmentations before importing.
      Set to 0 to disable. Disabling can significantly increase performance.
  ignoreAnnotationsWithIds:
    type: boolean
    default: true
    description: Annotations with the property 'datatorch_id' will be ignored.
runs:
  using: python
  main: import_coco.py
```