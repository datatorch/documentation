# Examples

## Authentication

A access tokens can be created in the [user
settings](https://datatorch.io/settings/access-tokens).

```bash
$ datatorch login
```

```python
from datatorch.api import ApiClient

# Use global access token set by CLI
api = ApiClient()

# Specify an already existing token
api = ApiClient(api_key='API_TOKEN')

# Custom DataTorch instance
api = ApiClient(api_url='http://example.com/api')
```

Alternatively a user can set the global access token environment variables
`DATATORCH_API_KEY`

## Execute Raw GraphQL

Building your own GraphQL queries provides you with the ability to return data
you need by querying the server once in the most efficient way. Thus using raw
GraphQL queries is the **preferred method** for interaction with the DataTorch
API.

Checkout the [GraphQL playground](https://datatorch.io/api/graphql) for an
interactive GraphQL client along with documentation. Users may have to set the
address to `https://datatorch.io/api/graphql` for it to work correctly.

```python
from datatorch.api import ApiClient

api = ApiClient()

# Create RAW GraphQL
QUERY = '''
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
'''
raw = api.execute(QUERY, params={'id': file_id})
# Execute GraphQL files
raw = api.execute_file('dir/to/file.gql', params={'id': file_id})
```

## Manipulating Files

Depending on the information you know about the file will depend on the method
you use for retrieval.

```python
from datatorch.api import ApiClient, Annotation, BoundingBox

anno = Annotation()
anno.add(BoundingBox.create(10, 10, 50, 50))

your_file = ApiClient().file(file_id)
your_file.add(anno)

anno2 = anno.copy()
```

Objects will only be inserted once they have been attached to an object that
already exists on the server.

## Advance Filtering

In this example we will look at using `Where` filtering object to play complex
queries for retrieving files.

Parameters passed into the `Where` constructor start with an property followed
by an operator. Information about the available operators and properties for each
class can be found by viewing the GraphQL documentation.

The where clause in the example below will return:

- files that are PNG's _and_,
- the file path starts with `example/path` _and_,
- the file is a child of the storage provider named `aws-storage`

```python
from datatorch.api import ApiClient, Where

client = ApiClient()

file_where = Where(
    mimetype='image/png'
    path__starts_with='example/path',
    link=Where(name='aws-storage')
)

files = client.files(where=file_where)
```
