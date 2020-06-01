---
id: intro
title: Getting Started
---

<CenteredImage src="rocket.png" width="40%" />

# Getting Started

In this section we will quickly get you up and annotating data. We will look at
creating projects, uploading data, annotating data and finally exporting data.

## Signing up

Go the [sign up page](https://datatorch.io/auth?tab=register) and create an
account or use an existing service for authentication. Follow the prompts to
create your personal account.

## Creating a Project

Once you have registered an account, you can create a project by clicking the
plus icon ( **+** ) found on the navigation bar. During the creation process of
a project you can customize some of the options. Further customization can be
done in the settings panel of the project.

<Figure 
  src="/figures/getting-started/create-project.png"
  width="100%"
  max-width="450px"
  caption="Initial form for creating a project"
/>

Once you have created your project you will be redirected to the home page. You
can expand the sidebar by clicking the double caret icon ( **»** ) at the bottom to view
the title of each tab.

### Sharing your Project

You can add users to your project using the Memebers tab.

<Figure 
  src="/figures/getting-started/invite-members.png"
  width="100%"
  max-width="320px"
  caption="Form used to invite members to a project"
/>

Default classes are created for each of your projects. If you would like to
learn more about creating custom roles, checkout [User
Roles](/projects.html#user-roles).

## Uploading your Data

Before you are able to upload files, you first must create a datasets. You can
think of datasets as folders, they are intend to help manage large datasets.
Futhermore, they can become useful when creating export schemas (more on this
later).

Next, we must configure where the files will be stored. If a default storage
mount has been configured for your instance, once will be added on the creation
of your project. Otherwise you must configure a storage mount.

Currently, DataTorch supports:

- Local
- AWS S3 Buckets
- Azure Blobs
- Google Cloud Buckets

If you would like to request additional support for other storage options,
please create an issue on the [node-storage
repository](https://github.com/datatorch/node-storage).

### Creating a Storage Mount

To mount a custom storage go to your projects `Settings > Storage` menu. From
here, click the add button in the top right corner. Fill in the correct
information to connect to your storage mount.

Once you have successfully created a storage mount, the option to upload files
to a dataset will become available. Currently the webclient is limited to a
maximum of 50 files with a 50 MB size for each file.

## Annotating Files

## Creating Exports

Exports allow you download your annotations in order to begin training your
machine learning models. DataTorch allows you to specify exactly which
properties of your dataset you would like to export.

## Discovering projects

If there's a particular topic that interests you, the visit
[Topics](https://datatorch.io/topics) webpage. For example, if you are
interested in datasets related to cars, you can find relevant projects by going
to [https://datatorch.io/topics/cars](https://datatorch.io/topics/cars). You can
also search for projects that match a topic you're interested in by using the
search form found in the navigation bar.

If you've been active on DataTorch, you can find personalized recommendations
for projects and good first issues based on your past contributions, stars, and
other activities in Explore.
