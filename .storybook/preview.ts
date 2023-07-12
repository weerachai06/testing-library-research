import type { Preview } from "@storybook/react";
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withTests({
      results: results,
      filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
    })
  ]
};

export default preview;
