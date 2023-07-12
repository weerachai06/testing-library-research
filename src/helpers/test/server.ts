import { GetAbilitiesQuery, GetAbilitiesQueryVariables } from '@/graphql-generated'
import { graphql, rest } from 'msw'
import { setupServer } from 'msw/node'

export const mockGraphql = graphql.link('http://localhost:3000')

export const server = setupServer()