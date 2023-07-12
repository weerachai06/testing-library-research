import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Ability = {
  __typename?: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']['output']>;
  slot?: Maybe<Scalars['Int']['output']>;
};

export type BaseList = {
  __typename?: 'BaseList';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<BaseName>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type BaseName = {
  __typename?: 'BaseName';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  message?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<BaseName>;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
};

export type Move = {
  __typename?: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  abilities?: Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<Scalars['Int']['output']>;
  forms?: Maybe<Array<Maybe<BaseName>>>;
  game_indices?: Maybe<Array<Maybe<GameIndex>>>;
  height?: Maybe<Scalars['Int']['output']>;
  held_items?: Maybe<Array<Maybe<HeldItem>>>;
  id?: Maybe<Scalars['Int']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  location_area_encounters?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  moves?: Maybe<Array<Maybe<Move>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  species?: Maybe<BaseName>;
  sprites?: Maybe<Sprite>;
  stats?: Maybe<Array<Maybe<Stat>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
  types?: Maybe<Array<Maybe<Type>>>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type PokemonItem = {
  __typename?: 'PokemonItem';
  artwork?: Maybe<Scalars['String']['output']>;
  dreamworld?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PokemonList = {
  __typename?: 'PokemonList';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  nextOffset?: Maybe<Scalars['Int']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  prevOffset?: Maybe<Scalars['Int']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<PokemonItem>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  abilities?: Maybe<BaseList>;
  ability?: Maybe<BaseResponse>;
  berries?: Maybe<BaseList>;
  berry?: Maybe<BaseResponse>;
  eggGroup?: Maybe<BaseResponse>;
  eggGroups?: Maybe<BaseList>;
  encounterMethod?: Maybe<BaseResponse>;
  encounterMethods?: Maybe<BaseList>;
  evolutionChain?: Maybe<BaseResponse>;
  evolutionChains?: Maybe<BaseList>;
  evolutionTrigger?: Maybe<BaseResponse>;
  evolutionTriggers?: Maybe<BaseList>;
  gender?: Maybe<BaseResponse>;
  genders?: Maybe<BaseList>;
  growthRate?: Maybe<BaseResponse>;
  growthRates?: Maybe<BaseList>;
  location?: Maybe<BaseResponse>;
  locations?: Maybe<BaseList>;
  move?: Maybe<BaseResponse>;
  moves?: Maybe<BaseList>;
  nature?: Maybe<BaseResponse>;
  natures?: Maybe<BaseList>;
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<PokemonList>;
  region?: Maybe<BaseResponse>;
  regions?: Maybe<BaseList>;
  species?: Maybe<BaseList>;
  types?: Maybe<BaseList>;
};


export type QueryAbilityArgs = {
  ability: Scalars['String']['input'];
};


export type QueryBerryArgs = {
  berry: Scalars['String']['input'];
};


export type QueryEggGroupArgs = {
  eggGroup: Scalars['String']['input'];
};


export type QueryEncounterMethodArgs = {
  encounterMethod: Scalars['String']['input'];
};


export type QueryEvolutionChainArgs = {
  id: Scalars['String']['input'];
};


export type QueryEvolutionTriggerArgs = {
  name: Scalars['String']['input'];
};


export type QueryGenderArgs = {
  gender: Scalars['String']['input'];
};


export type QueryGrowthRateArgs = {
  growthRate: Scalars['String']['input'];
};


export type QueryLocationArgs = {
  location: Scalars['String']['input'];
};


export type QueryMoveArgs = {
  move: Scalars['String']['input'];
};


export type QueryNatureArgs = {
  nature: Scalars['String']['input'];
};


export type QueryPokemonArgs = {
  name: Scalars['String']['input'];
};


export type QueryPokemonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionArgs = {
  region: Scalars['String']['input'];
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']['output']>;
  back_female?: Maybe<Scalars['String']['output']>;
  back_shiny?: Maybe<Scalars['String']['output']>;
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  front_default?: Maybe<Scalars['String']['output']>;
  front_female?: Maybe<Scalars['String']['output']>;
  front_shiny?: Maybe<Scalars['String']['output']>;
  front_shiny_female?: Maybe<Scalars['String']['output']>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat?: Maybe<Scalars['Int']['output']>;
  effort?: Maybe<Scalars['Int']['output']>;
  stat?: Maybe<BaseName>;
};

export type Type = {
  __typename?: 'Type';
  slot?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<BaseName>;
};

export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<BaseName>;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']['output']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
};

export type GetAbilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAbilitiesQuery = { __typename?: 'Query', abilities?: { __typename?: 'BaseList', count?: number | null, status?: boolean | null, message?: string | null } | null };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetAbilitiesQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ abilities })
 *   )
 * })
 */
export const mockGetAbilitiesQuery = (resolver: ResponseResolver<GraphQLRequest<GetAbilitiesQueryVariables>, GraphQLContext<GetAbilitiesQuery>, any>) =>
  graphql.query<GetAbilitiesQuery, GetAbilitiesQueryVariables>(
    'getAbilities',
    resolver
  )


export const GetAbilitiesDocument = gql`
    query getAbilities {
  abilities {
    count
    status
    message
  }
}
    `;

/**
 * __useGetAbilitiesQuery__
 *
 * To run a query within a React component, call `useGetAbilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAbilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAbilitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAbilitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetAbilitiesQuery, GetAbilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAbilitiesQuery, GetAbilitiesQueryVariables>(GetAbilitiesDocument, options);
      }
export function useGetAbilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAbilitiesQuery, GetAbilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAbilitiesQuery, GetAbilitiesQueryVariables>(GetAbilitiesDocument, options);
        }
export type GetAbilitiesQueryHookResult = ReturnType<typeof useGetAbilitiesQuery>;
export type GetAbilitiesLazyQueryHookResult = ReturnType<typeof useGetAbilitiesLazyQuery>;
export type GetAbilitiesQueryResult = Apollo.QueryResult<GetAbilitiesQuery, GetAbilitiesQueryVariables>;