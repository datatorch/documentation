---
id: python-client-setup-tutorial
title: Set up DataTorch Python client
---
# Setup DataTorch Python Client

## Install Python client

Simply run this command to install:

```python
pip install datatorch
```

## Generate Access Token

Before you can login, you will need to generate an access token in your User Settings section of the DataTorch webclient. 

After logging in, click on your profile icon and select "Settings" to proceed to the User Settings page.

<Figure 
  src="/figures/tutorials/setup-python-client/user-settings.png"
  width="100%"
  max-width="450px"
  caption="Click here to enter user settings"
/>

Afterwards, click on "Access Tokens", then "New Key". Enter a name for your key then click "Create" to generate a new key.

<Figure 
  src="/figures/tutorials/setup-python-client/new-key.png"
  width="100%"
  max-width="900px"
  caption="You should see this prompt when you click 'New Key' "
/>

You will recieve a prompt with your key. Mark it down securely so that you can copy it in order to log in to the Python client.

<Figure 
  src="/figures/tutorials/setup-python-client/api-key.png"
  width="100%"
  max-width="450px"
  caption="API key"
/>

## Login to Python client

Now that you have your API key, login to the client by using: 

```python
datatorch login
```

Follow the prompts and paste in the API key when asked. You can run the

```python
datatorch --help
```

command for information on all of the options, commands, and arguments.

<Figure 
  src="/figures/tutorials/setup-python-client/datatorch-help.png"
  width="100%"
  max-width="450px"
  caption="Output of the datatorch --help command"
/>