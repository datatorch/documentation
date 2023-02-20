# Pipeline Creation

Pipelines are created by defining the pipeline structure in a YAML file. You can define the file in the DataTorch webclient, or you can create the file locally and test it using the CLI tool.

## Testing Locally

If you have just finished creating a pipeline you can test it locally using the
CLI command

```sh
datatorch pipeline run <pipeline path>
```

This will run the pipeline locally without pushing any output to the DataTorch
platform.

## Pipeline Syntax

Pipeline files use YAML or JSON syntax, and must have either a `.yml`,
`.yaml` or `.json` file extension. Make sure you have a understanding of the
YAML format before continuing.

### `name`

**Required.** The name of your pipeline must be unique to the project. DataTorch
displays the name of you pipeline under the `Pipelines` tab in your project.

### `jobs`

**Required.** A pipeline run is made up of one or more jobs. Jobs run in
parallel by default.

### `project`
???

### `triggers`
An object that describes what causes the pipeline to execute. Defaults to `manual`. Object can either be defined as `manual` (runs when user presses the button or calls using CLI), or `annotatorButton` (runs as a tool in the annotator ).

<details>
  <summary>manual</summary>

  ```yaml
  project: ${project}
  name: My New Pipeline

  triggers:
    manual:
      role: 'OWNER'
      form: { JSON }
  
  jobs: ...
  ```

  `role` is an optional parameter that refers to the role name the user is required to have.

  `form` is an optional parameter that defines a JSON schema.

</details>

<br />

<details>
  <summary>annotatorButton</summary>

  ```yaml
  project: ${project}
  name: My New Pipeline

  triggers:
    annotatorButton:
      name: "DEXTR"
      icon: brain
      flow: 4-points
  
  jobs: ...
  ```

  `name` **Required.** A unique id string for the annotator action.

  `icon` **Required.** The icon to show on the annotator toolbar to trigger thre pipeline. Currently, the only available icon is `brain`.

  `flow` **Required.** Defines annotator tool user behavior to be used as input to the pipeline.
  Can be `2-points`,`4-points`, or `segmentation`.

</details>

### `$schema`
???

## Jobs Syntax
### `<job_id>`

**Required.** Each job must have an id to associate with the job. The key `job_id` is a string
and its value is a map of the job's configuration data. You must replace
<job_id> with a string that is unique to the jobs object. The <job_id> must
start with a letter or \_ and contain only alphanumeric characters, -, or \_.

### `<job_id>.name`

The name of the job displayed on DataTorch.

### Example

```yaml
jobs:
  analyze-data:
    name: Analyze Data
  train-model:
    name: Train Model
    steps: ...
```

### `<job_id>.steps`

A job contains a sequence of tasks called `steps`. Steps can run commands, run
setup tasks, or run an action in your repository, a public repository, or an
action published in a Docker registry. Not all steps run actions, but all
actions run as a step. Each step runs in its own process in the runner
environment and has access to the workspace and filesystem. Because steps run in
their own process, changes to environment variables are not preserved between
steps.

## Steps Syntax

### `steps.[].name`

A name for your step to display on DataTorch.

### `steps.[].action`

**Required.** Selects an action to run as part of a step in your job. An action
is a reusable unit of code. This property can ether be a `string` or an
`object`. 

<details>
  <summary>as string</summary>

  ```yaml
  name: 'Action Example'
    jobs:
      add:
        steps:
          - name: Python Example
            action: myorg/python@v1
  ```

  Using a `string` will default to using GitHub for downloading the action onto
  the agent. For example, `myorg/python@v1` would download and run the action
  in the github repo `https://github.com/myorg/python` with the tag v1.
  If an `action-datatorch.yaml` file does not exist, the job will fail.

</details>

<br />

<details>
  <summary>as object</summary>

  ```yaml
  name: 'Action Example'
    jobs:
      add:
        steps:
          - name: Python Example
           # This will do the same as above
           # Specify repository, both name and tag are required.
            action:
             name: myorg/python
             tag: v1
             git: git://github.com/myorg/python.git
```

  If you would like to store your actions on a different git service you can also
  specify an object containing the required information. This also may be useful
  if the action is private as you can specify the username and password in the
  URI.

  Object properties:

  - `action.name` **Required.** Name of the action
  - `action.tag` **Required.** Tag (or version) of the action. This tag will be
  used when cloning the repo to specify the `--branch` parameter.
  - `action.git` (Defaults to Github). The URI of the repository to be cloned.
  
</details>

### `steps.[].inputs`

A `map` of the input parameters defined by the action. Each input parameter is a
key/value pair.

The inputs can be used for templating and are passed into each subprocess
through arguments.

In docker the parameters are set as environment variables in docker. The
variable is prefixed with `INPUT_` and converted to upper case.
