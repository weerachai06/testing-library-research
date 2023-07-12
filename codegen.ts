
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://graphql-pokeapi.graphcdn.app',
  documents: "./src/**/*.graphql",
  generates: {
    "src/graphql-generated/index.ts": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-msw',
        'typescript-react-apollo'
      ]
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"]
    // }
  }
};

export default config;
