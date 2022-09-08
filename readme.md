# React Native Template

A react native template using expo to jumpstart your next side-gig.

Here is what it's made of

- Expo
- Apollo/GraphQL
- React Native Paper
- Styled Components
- EVA Design System
- Custom Fonts
- Reusable Components

### Getting Started

Clone or fork this project

`git clone <this project>`

Make sure you have the necessary [Expo](https://docs.expo.dev/) tools installed on your machine.

If you haven't already installed yarn, what are you waiting for? Do that [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

In the root of this project, run `yarn`

Finally, run `yarn web` to run the project in your browser.

Now get to coding and building something great!

## Notes

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

When using the project for realsies and you have a real URK for your apollo server to hit, remove the ApolloProvider custom component, and instead use the Apollo's Provider component directly in the App.tsx file.
