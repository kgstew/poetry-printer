import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) console.log('GraphQL Errors', graphQLErrors);
    graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
    credentials: 'include',
    uri: process.env.SERVICES_URI + '/graphql'
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
    cache,
    link
});

export default client;
