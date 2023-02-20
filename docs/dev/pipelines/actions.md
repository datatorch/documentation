# Action Creation

Actions are created by placing a file called __action-datatorch.yaml__ in a repository.

## action-datatorch.yaml Syntax

```yaml
# action-datatorch.yaml

name: Python Add
description: Example running a python to add two numbers.
inputs:
  a:
    type: integer
    required: true
    description: First number
  b:
    type: integer
    required: true
    description: Second number
outputs:
  sum:
    type: integer
    description: Value of X and Y added together
runs:
  using: python
  main: add.py
```

### `name`
**Required.** The name of the action. DataTorch
displays the name of your action when it is used, in the pipeline run history.

### `description`
A description of the action for user friendlieness.

### `inputs`
See Inputs/Outputs Syntax below for more info. A set of user-defined objects that represent the variables that are passed from the pipeline file in the DataTorch client to the code files defined in `runs`.

For the above example, here is how the pipeline YAML file (not the action-datatorch.yaml file) would look, to pass values into the `inputs` section (assuming your action repository containing the action-datatorch.yaml file is in the GitHub org 'myorg', and the repository is named 'add'):

```yaml
# DataTorch Pipeline yaml
# This is NOT an action-datatorch.yaml file

name: 'Add Example'
jobs:
  add:
    steps:
      - name: Add Two Numbers
        action: myorg/add
        inputs:
          a: 5
          b: 5
```

The inputs in this pipeline file will correspond to the inputs defined in the action-datatorch.yaml file located in the 'myorg/add' repository.

### `runs`
**Required.** Defines the files in the repo to be run, and the enviornment to run it in.

`runs.using` **Required.** The enviornment your code will be run in.

`runs.main` **Required.** The entry file containing the code that will be run.

The inputs defined in your `inputs` object are passed into the file defined by `runs.main.` See 'runs.main file' section in sidebar for more info.

### `outputs`
A set of user-defined objects that represents the values that are returned to DataTorch, from the code files defined in `runs`.

### `cache`
???

### `$schema`
???

## Inputs/Outputs Syntax

The `inputs` and `outputs` objects both use the same syntax to describe the input and output variables.

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
### `<input_id>`
**Required.** The unique variable name of the input. The key `input_id` is a string
and its value is a map of the input's configuration. The <input_id> must
start with a letter or \_ and contain only alphanumeric characters, -, or \_.

### `<input_id>.description`
A description of the purpose of the input variable.

### `<input_id>.type`
**Required.** The type of the variable being passed in. Can be `integer`, `float`, `string`, `boolean`, `array`.

### `<input_id>.default`
You can set a default value to be passed in, if one is not provided.
This is also where context variables tend to be used.

### `<input_id>.required`
Boolean. Defaults to `false`. Set to `true` if the variable is required.

## Advanced example
This example is an actions-datatorch.yaml file to be placed in an action repository that will be triggered by a custom button in the annotator that takes in 4 points on the image, and runs DEXTR for segmentation.

```yaml
# action-datatorch.yaml

name: DEXTR
description: Runs DEXTR on a given image.
inputs:
  imagePath:
    type: string
    required: true
    description: Absolute path to image
  points:
    type: array
    required: true
    description: >
      4 points marking the most left, right, bottom and top points of the shape
  url:
    type: string
    default: http://localhost:3445
    description: >
      Url for sending requests. A DEXTR docker image will be spun up on this
      port if not found.
  image:
    type: string
    default: datatorch/action-dextr
    description: Docker image to spin up.
  annotationId:
    type: string
    default: null
    description: >
      Annotation to insert segmentation into. If not provided the segmentation
      will not be inserted.
  simplify:
    type: float
    default: 1.5
    description: >
      Simplification tolerance applied to segmentation before importing. Set to
      0 to disable. Disabling can significantly increase pipeline performance,
      but decrease annotator performance.
outputs:
  segmentation:
    type: array
    description: Segmentation of points predicted by DEXTR
runs:
  using: python
  main: entry.py
```

## Types of Actions

Currently DataTorch supports the following types of environments that can be used
to run your action:

| Type         | Operating System |
| ------------ | ---------------- |
| Docker       | Linux            |
| Python       | Linux            |
| Node         | Linux            |
| Scripts      | Linux            |
| Command line | Linux            |

Set these by defining the enviornment in the `runs` object of your action-datatorch.yaml file.