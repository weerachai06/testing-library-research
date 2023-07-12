
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from '../__stories__/Button.stories'
import { vi } from 'vitest'

const { Primary } = composeStories(stories)

test('Should render component mock for test.', async () => {
  const user = userEvent.setup()
  const onMockCalled = vi.fn()
  render(<Primary onClick={onMockCalled} label="Test 2" />)
  const button = screen.getByRole('button');


  await user.click(button)

  await waitFor(() => expect(onMockCalled).toHaveBeenCalled())
  // expect(button).toMatchSnapshot()
})