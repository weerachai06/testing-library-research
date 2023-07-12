import React, { PropsWithChildren } from 'react'
import { ApolloClient, ApolloProvider as ApolloProviderComponent, HttpLink, InMemoryCache } from '@apollo/client'
import {fetch as crossFetch} from 'cross-fetch'

export const createHttpLink = (options?: any) => {
  return new HttpLink({
    fetch: crossFetch,
    credentials: 'same-origin',
    uri: 'http://localhost:3000',
    ...options,
  })
}

const client = new ApolloClient({
  link: createHttpLink(),
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ApolloProviderComponent client={client}>{children}</ApolloProviderComponent>
  )
}

export default ApolloProvider