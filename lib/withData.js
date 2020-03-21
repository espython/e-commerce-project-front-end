// // lib/withApollo.js
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
// import { createHttpLink } from 'apollo-link-http';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import { endpoint } from '../config';

// const link = createHttpLink({
//   fetch, // Switches between unfetch & node-fetch for client & server.
//   uri: endpoint
// });

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ headers, ctx, initialState }) =>
    new ApolloClient({
      uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
      request: operation => {
        operation.setContext({
          fetchOptions: {
            credentials: 'include'
          },
          headers
        });
      },
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);
