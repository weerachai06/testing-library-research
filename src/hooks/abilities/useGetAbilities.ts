import { Exact, GetAbilitiesQuery, useGetAbilitiesQuery } from "@/graphql-generated"
import { QueryHookOptions } from "@apollo/client";

export const useGetAbilities = (options?: QueryHookOptions<GetAbilitiesQuery, Exact<{
  [key: string]: never;
}>> | undefined) => {
  return useGetAbilitiesQuery(options)
}