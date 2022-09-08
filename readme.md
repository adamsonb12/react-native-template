### Environment Variables

- Add env vars to the `.env` file
- Access the env vars via `@env`
  1. `import { GRAPHQL_ENDPOINT, ENABLE_GRAPHQL } from "@env";`

### GraphQL

- To enable GraphQL
  1. set `ENABLE_GRAPHQL=true`
  2. set `GRAPHQL_ENDPOINT=<endpoint address>`
- Example query

```
        const QUERY = gql`
            query GetFeed {
                feed {
                    id
                    description
                    url
                }
            }
        `;
```

- Use inside a component

```
    import { useQuery, gql } from "@apollo/client";

    const FakeComponent = () => {
        const { data, loading, error } = useQuery(QUERY);

        return (
            <View>
            {data?.feed?.map((f, index) => {
                return <Text key={index}>{f.url}</Text>;
            })}
            </View>
        );
    }
```
