---
id: overview-pipelines
title: Overview
---

# Agents and Pipelines

### DataTorch Pipelines gives you the ability to download and execute code on any external computer, all within DataTorch.

<br />
<Figure 
  src="/figures/dev/pipelines-sidebar.png"
  width="100%"
  max-width="800px"
  caption="Agents (top) and Pipelines (bottom) sections of the project sidebar"
/>

Here's an overview of the process:
- An external computer is registered as an agent and activated via the command line tool
- A user assigns one of their activated agents to a DataTorch project
- A pipeline is created in that project by creating a YAML file that points to files in a code repository 
- The YAML file is edited to define jobs with expected inputs, outputs, and triggers for running the code in the files
- The user triggers the pipeline within DataTorch by pressing the run button
- Upon triggering, the agent downloads the code from the given repo, runs its jobs according to the given inputs, and returns the output


## Terminology

__Agent__ refers to an external computer that DataTorch is able to control.

__Pipeline__ refers to instructions, defined in a YAML file, that detail the specific code that runs on an agent, and the circumstances surrounding its execution.

__Job__ refers to subtasks that are created and run as part of a pipeline.

__Run__ refers to the process of a pipeline being triggered, with its jobs being executed on an agent.

---

# Set up agent and run basic pipeline
<img src="/python.png"
    width="100px"
     alt="Markdown Monster icon"
     style="float: left; margin-right: 10px;" />

Set up an agent, assign it to a project, then create and run a pipeline.

[See how →](./tutorial-agents-pipelines)

<br/>

<br/>

<br/>

<br/>
