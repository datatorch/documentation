# Action Creation

Actions are individual tasks that you can combine to create jobs and customize
your pipelines. You can create your own actions, or use and customize actions shared
by the DataTorch community.

You can create actions by writing custom code that interacts with your
repository in any way you'd like, including integrating with DataTorch's APIs
and any publicly available third-party API.

Actions can run directly on a machine or in a Docker container. You can define
an action's inputs, outputs, and environment variables.

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

## Commands

Actions can communicate with the Agent to set environment variables, output
values used by other actions, add debug messages to the output logs, and other
tasks.
