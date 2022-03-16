---
id: create-projects
title: Create Projects
---

<CenteredImage src="intro.png" width="42%" />

# Projects

Projects are the top level of a machine-learning project. It contains datasets,
storage providers, annotations and workspaces. These subsections are describe in
more detail below.

## Storage Providers

Storage providers are where your files reside. They contain the file that your
project will need for its lifecycle. A project have contain multiple storage
providers incase your data is separate over different sources or for
organizational purposes.

Currently the following storage providers are supported:

- Google Cloud Bucket
- Azure Blob Storage
- AWS S3 Bucket
- Local Server Storage (Enterprise)

If you would like support for other storage providers checkout our
[open-source library](https://github.com/datatorch/node-storage) for storage.

## Datasets

Datasets are optional when creating projects. They allow users to group files
together. When you import a file (by upload or through the explorer) you can
optionally specify a dataset to attach the file too. Files can only be under
one dataset.

Datasets are also useful when exporting, as data exports filtered based on the
dataset they are attached too.

## Jobs

Labeling Jobs provide a useful management tool. It can help solve the problems
of quality assurance, viewing progress and meeting deadlines.

Labeling Jobs allow managers to assign tasks to labelers in order to annotate a
group of files. A job contains multiple tasks where each task corresponds to a
labeler and each job corresponds to a selection of files.

### Passthroughs

When creating a job a user can specify the number of times a file should be
annotated by different labelers. This metrics is called **passthroughs**. Below is
an example of how the passthrough metric divides the files among users.

<table>
    <thead>
        <tr>
            <th>Total Files</th>
            <th>Number of Labelers</th>
            <th>Passthroughs</th>
            <th>Distribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>1000</td>
            <td rowspan=4>5</td>
            <td>1</td>
            <td>Each user will annotate <b>200 files</b> and each file will be view once.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Each user will annotate <b>400 files</b> and each file will be viewed by <b>2 labelers</b>.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Each user will annotate <b>100 files</b> and each file will be viewed by <b>all 5 labelers</b>.</td>
        </tr>
    </tbody>
</table>

Partial passthroughs can also be specify which can be useful when managers wish
for some of the data annotations to have duplicates. This can allow for faster
turn around time and partial quality assurance.

### Tasks

A task is assigned to a label which contains files for the labeler to annotate.

#### Task File Status Flow

<Figure 
  src="/figures/projects/task-status-flow.png"
  width="100%"
  max-width="600px"
  caption="File Status Diagram"
/>

1. A file has been added to a task. The labeler may have started annotating but
   does not consider the file completed.
2. The labeler thinks the file does not contain any relevant information.
3. The labeler finished all annotations and considers the file complete.
4. The labeler thinks the file does not contain any relevant information.
5. Labeler changes status to skipped based on reviewers feedback.
6. Labeler corrects annotations based on the reviewers feedback.
7. The files annotations maybe completed. Waiting for reviewer to approval.
8. Reviewer requests the file to be annotated as it contains relevant data.
9. Reviewer places comments on the task, annotation, or file to express concerns
   with annotations.
10. The reviewer finds annotations are not correct.
11. Reviewer considers file invalid.
12. The reviewer does not want to manually look at the rest of the files and
    marks the rest of the files as completed. This can be set by using the Mask
    as a approved button or by using consensus.
13. The reviewer manually inspects and approves of a files annotations.
14. Both reviewer and validator consider file invalid.
15. Annotations are completed and approved but were not visually inspected.
16. Annotations are completed and approved.
