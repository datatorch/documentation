# Flows

Flows are custom automated processes that you can set up in your project to
build, test, package, release, or deploy any project on DataTorch. With flows
you can automate your machine learning life cycle with a wide range of tools and
services.

Flows must have at least one job, and jobs contain a set of steps that perform
individual tasks. Steps can run commands or use an action. You can create your
own actions or use actions shared by the DataTorch community and customize them
as needed.

You can configure a workflow to start when a DataTorch event occurs, on a schedule,
or from an external event (commonly referred to as Triggers).

You need to configure workflows using YAML or JSON syntax. You can also upload
flow files using the DataTorch CLI tool. Once you've successfully created a flow
file and triggered the workflow, you will see the build logs, tests results,
artifacts, and statuses for each step of your workflow.

## Creating a flow

1. On DataTorch, navigate to the main page of the project.
2. On the left sidebar click the **Flows** tab.
3. Inside the second sidebar click the **+** icon.
4. Use the YAML editor to define your flow. Checkout the [Flow
   Syntax](/agents/flows.html#flow-syntax) section for more information.
5. Click create. If any errors exist they will be shown in red below the button.

## Variables and Secrets

## Testing Locally

If you have just finished creating a flow you can test it locally using the CLI
command

```sh
datatorch flow run <flow path>
```

This will run the flow locally without pushing any output to the DataTorch platform.

## Flow syntax

Workflow files use YAML or JSON syntax, and must have either a `.yml`, `.yaml`
or `.json` file extension. Make sure you have a understanding of the YAML format
before continuing.

### `name`

**Required.** The name of your flow must me unique to the project. DataTorch
displays the name of you flow under the `Flows` tab in your project.

### `jobs`

**Required.**
A flow run is made up of one or more jobs. Jobs run in parallel by default.

### `jobs.<job_id>`

Each job must have an id to associate with the job. The key `job_id` is a string
and its value is a map of the job's configuration data. You must replace
<job_id> with a string that is unique to the jobs object. The <job_id> must
start with a letter or \_ and contain only alphanumeric characters, -, or \_.

#### Example

```yaml
jobs:
  analyze-data:
    name: Analyze Data
  train-model:
    name: Train Model
```

### `jobs.<job_id>.name`

The name of the job displayed on DataTorch.

### `jobs.<job_id>.steps`

A job contains a sequence of tasks called `steps`. Steps can run commands, run
setup tasks, or run an action in your repository, a public repository, or an
action published in a Docker registry. Not all steps run actions, but all
actions run as a step. Each step runs in its own process in the runner
environment and has access to the workspace and filesystem. Because steps run in
their own process, changes to environment variables are not preserved between
steps.

### `jobs.<job_id>.steps.[].name`

A name for your step to display on DataTorch.

### `jobs.<job_id>.steps.[].action`

**Required.** Selects an action to run as part of a step in your job. An action
is a reusable unit of code. This property can ether be a `string` or an
`object`.

Using a `string` will default to using GitHub for downloading the action onto
the agent. For example, `datatorch/python@v1` would download and run the action
in the github repo `https://github.com.datatorch/python` with the tag v1. If an
`action-datatorch.yaml` file does not exists, the job will fail.

If you would like to store your actions on a different git service you can also
specify an object containing the required information. This also may be useful
if the action is private as you can specify the username and password in the
URI.

Object properties:

- `action.name` **Required.** Name of the action
- `action.tag` **Required.** Tag (or version) of the action. This tag will be
  used when cloning the repo to specify the `--branch` parameter.
- `action.git` (Defaults to Github). The URI of the repository to be cloned.

#### Example

Using action `string`:

```yaml
name: 'Action Example'
jobs:
  add:
    steps:
      - name: Python Example
        action: datatorch/python@v1
```

Using action `object`:

```yaml
name: 'Action Example'
jobs:
  add:
    steps:
      - name: Python Example
        # This will do the same as above
        # Specify repository, both name and tag are required.
        action:
          name: datatorch/python
          tag: v1
          git: https://github.com/datatorch/python
```

### `jobs.<job_id>.steps.[].inputs`

A `map` of the input parameters defined by the action. Each input parameter is a
key/value pair.

The inputs can be used for templating and are passed into each subprocess
through arguments.

In docker the parameters are set as environment variables in docker. The
variable is prefixed with `INPUT_` and converted to upper case.
