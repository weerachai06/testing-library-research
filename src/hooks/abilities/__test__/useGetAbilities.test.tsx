import { mockResponse, setupGetAbilities } from "./mock/setupGetAbilities"
import { useGetAbilities } from "../useGetAbilities"
import { ApolloProvider } from '@/provider'
import React from "react"
import { waitFor, renderHook } from '@testing-library/react'

describe('useOrderListQuery', () => {
  beforeEach(() => setupGetAbilities())

  test('should able to query abilities data', async () => {
    const { result } = renderHook(
      () =>
        useGetAbilities(),
      {
        wrapper: ({ children }: { children: React.ReactNode}): React.JSX.Element => {
          return <ApolloProvider>{children}</ApolloProvider>
        },
      }
    )
    await waitFor(() => !result.current.loading)
    
    expect(result.current.data).toEqual(mockResponse)
  })
})
