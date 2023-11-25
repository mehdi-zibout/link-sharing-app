// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Dropdown from './PlatformsDropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {}
