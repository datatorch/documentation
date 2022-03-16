---
id: tutorial-data-setup
title: Quickstart - Data Set Up
---

# Set up a dataset with data from different sources

Create a dataset in your project that combines data from different storages.

---

Let's say you want to train your model on a dataset, but the files for that dataset are distributed across different locations: some are stored locally on your machine, some are on other machines, and others are saved across multiple cloud storages.

With DataTorch, we can consolidate these files into a dataset without needing to move them all onto the same storage.

## Access Filesources

While in the project page, click the Files tab to enter the file manager.

<img src="/figures/getting-started/create-project.png"
    width="500px"
     alt="Markdown Monster icon" />

DataTorch provides every account with 10 GB free Azure storage as a default Filesource, so you can start uploading data immediately.

## Add local files via web UI to default Filesource

Moving data from your local machine via the web UI is the most straightforward way to upload.

Click "DataTorch Storage", then "Upload" and follow the modal to move files into the cloud storage.

<img src="/figures/getting-started/create-project.png"
    width="500px"
     alt="Markdown Monster icon" />

## Add files remotely to a Filesource via Python Client

You can also use our Python client to programmatically upload data to any of the Filesources you have access to.
That is beyond the scope of this quickstart, but you can learn more [here](/).

## Add Google Cloud Bucket as a Filesource

Click the green plus icon (**+**). Under the "Type" dropdown, select your cloud storage provider.

<img src="/figures/getting-started/create-project.png"
    width="500px"
     alt="Markdown Monster icon" />

## Add Azure Blob Storage as a Filesource

Click the green plus icon (**+**). Under the "Type" dropdown, select your cloud storage provider.

<img src="/figures/getting-started/create-project.png"
    width="500px"
     alt="Markdown Monster icon" />

## Add AWS S3 Bucket as a Filesource

Click the green plus icon (**+**). Under the "Type" dropdown, select your cloud storage provider.

<img src="/figures/getting-started/create-project.png"
    width="500px"
     alt="Markdown Monster icon" />

## Create Dataset