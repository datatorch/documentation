---
id: cli-get-started
title: Get Started
---

# Get Started with the DataTorch CLI

The DataTorch CLI is a developer tool that gives control DataTorch projects directly from the command line.

After installing the python package with `pip install datatorch` you should have access to a
new command: **datatorch** (or **dt**).

DataTorch CLI is built on top of the python package. Thus, python >=3.6 must be
installed in order for it to work.

## Install

Have python >=3.6 then run:
```
pip install datatorch
```

## Log in
Now that the client is installed, run:
```
dt login
```
A prompt will appear saying:
```
Retrieve your API key from https://datatorch.io/settings/access-tokens
Paste your API key: 
```
Create an API key if you don't have one already, and paste it in.

This will appear if the validation is successful:
```
Successfully logged in.                     
Hello, User!
```
<!-- ## Add Agent -->