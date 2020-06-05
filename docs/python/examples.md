# Examples

## Authentication

A access tokens can be created in the [user
settings](https://datatorch.io/settings/access-tokens).

A user many set the global access token using `datatorch login` or with
environment variables `DATATORCH_API_KEY`

```python
from datatorch.api import ApiClient

# Use global access token set by CLI
api = ApiClient()

# Specify an already existing token
api = ApiClient(api_key='API_TOKEN')

# Custom DataTorch instance
api = ApiClient(api_url='http://example.com/api')
```

## Execute Raw GraphQL

Using raw GraphQL queries is the preferred method for interaction with the
DataTorch API. Checkout the [GraphQL
playground](https://datatorch.io/api/graphql) for an interactive version along
with documentation. Users may have to set the address to
`https://datatorch.io/api/graphql`.

```python
import gql from gql
from datatorch.api import ApiClient

# Create RAW GraphQL
QUERY = gql('''
    query GetFile($id: ID!) {
      file(id: $id) {
        id
        name
        path
        status
        link {
          id
          name
        }
      }
    }
''')

api = ApiClient()
# Execute Query passing in the file ID
raw = api.execute(QUERY, params={'id': file_id})
```

## Manipulating Files

Depending on the image you know about the file will depend on the method you use
for retrieval.

```python
from datatorch.api import ApiClient, Annotation

random_file = ApiClient().file(file_id)
annotation = Annotation()
random_file.addAnnotation()
```

## Create Labels and annotations

```python
from datatorch.api import ApiClient

api
```
