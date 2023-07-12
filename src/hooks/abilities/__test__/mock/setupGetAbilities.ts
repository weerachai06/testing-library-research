import { GetAbilitiesQuery, GetAbilitiesQueryVariables, mockGetAbilitiesQuery } from "@/graphql-generated"
import { server, mockGraphql } from "@/helpers/test/server"

export const mockResponse = {
  abilities: {
    count: 30,
    message: 'Test',
    status: true,
  }
}

export const setupGetAbilities = (): void =>
  server.use(
    mockGraphql.query<GetAbilitiesQuery, GetAbilitiesQueryVariables>(
      'getAbilities',
      (_req, res, ctx) => { 
        return res( ctx.data(mockResponse)
    )
    }),
  )