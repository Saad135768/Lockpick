import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-unfetch'
import { setContext } from 'apollo-link-context'
import { withClientState } from 'apollo-link-state'
import Cookies from 'js-cookie'
import * as R from 'ramda'

const GRAPHQL_URL = 'https://api.lockpick.qpix.io/'
// const GRAPHQL_URL = 'http://localhost:4000'
// const GRAPHQL_URL = 'https://api.yorklongman.qpix.io/'
const cache = new InMemoryCache({
  addTypename: false,
})
const link = createUploadLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
  // credentials: 'include'
})
const defaultState = {
  navigation: {
    complete: true,
    __typename: 'navigation',
  },
}
const stateLink = withClientState({
  cache,
  defaults: defaultState,
//   resolvers: {},
})

const token = typeof window !== 'undefined' ? Cookies.get('token') : ''

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo((ctx) => {
  const authLink = setContext(async (_, { headers }) => {
    let actualToken
    if (token) {
      actualToken = token
    }
    if (ctx.headers && ctx.headers.cookie) {
      if (R.pathOr([], ['headers', 'cookie'])(ctx).split('token=')[1]) {
        // eslint-disable-next-line prefer-destructuring
        actualToken = R.pathOr(
          [],
          ['headers', 'cookie'],
        )(ctx)
          .split('token=')[1]
          .split(';')[0]
      }
    }
    return {
      headers: {
        ...headers,
        ...!(headers && (headers.authorization || headers.Authorization)) && { authorization: `Bearer ${actualToken}` },
      },
    }
  })
  return new ApolloClient({
    link: stateLink.concat(authLink.concat(link)),
    cache:
      //  rehydrate the cache using the initial data passed from the server:
      cache.restore(ctx.initialState || {}),
  })
})
