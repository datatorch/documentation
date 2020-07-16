# Variables

You can use expressions to programmatically set variables in workflow files and
access contexts. An expression can be any combination of literal values,
references to a context, or functions. You can combine literals, context
references, and functions using operators.

## Context

Contexts are a way to access information about workflow runs, runner
environments, jobs, and steps. Contexts use the following syntax.

::: v-pre
`${{ <context> }}`
:::

| Variable              |  Type  | Description                                                                                                            |
| --------------------- | :----: | ---------------------------------------------------------------------------------------------------------------------- |
| agent                 | object | Information about the agent.                                                                                           |
| agent.id              | object | ID of the agent.                                                                                                       |
| machine               | object | Information about the machine the agent is running on.                                                                 |
| machine.name          | string | The computer’s network name. An empty string is returned if the value cannot be determined.                            |
| machine.os            | string | The system/OS name, e.g. `Linux`, `Windows`, or `Java`. An empty string is returned if the value cannot be determined. |
| machine.version       | string | The system’s release version, e.g. `#3 on degas`. An empty string is returned if the value cannot be determined.       |
| python                | string | Information about the python instance the agent is running on.                                                         |
| python.version        | string | Python version of the current agent.                                                                                   |
| python.implementation | string | Python implementation of the current agent.                                                                            |
| flow                  | object | Information about the flow                                                                                             |
| flow.id               | string | Id of the current flow                                                                                                 |
| flow.name             | string | Name of the current flow                                                                                               |
| flow.creatorId        | string | Id of the user who created this flow                                                                                   |
| flow.projectId        | string | Id of the project this flow belongs to                                                                                 |
| flow.lastRunNumber    |  int   | Last number used for running                                                                                           |
| run                   | object | Information about the run                                                                                              |
| run.id                | string | ID of the flow run.                                                                                                    |
| run.name              | string | Name of the flow run.                                                                                                  |
| run.config            | object | Parse JSON version of the runs YAML.                                                                                   |
| run.runNumber         |  int   | Number of the flow run.                                                                                                |
| step                  | object | Information about the current running step.                                                                            |
| step.id               | string | ID of the step.                                                                                                        |
| step.name             | string | name of the step.                                                                                                      |
| action                | object | Information about the current (or previous if no action is active) action being executed.                              |
| action.name           | string | Name of the action.                                                                                                    |
| action.version        | string | Version of the action.                                                                                                 |
| action.directory      | string | Directory where the actions files are.                                                                                 |
| variable              | object | Contains inputs and outputs from previous steps                                                                        |
| variable.`<key>`      |  any   | Input and output from previous steps. All inputs and outputs are added to this variable object.                        |
