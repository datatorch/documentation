---
id: projects
title: Projects
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

## Members

## User Roles

## Metadata
