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

import TitleWithDescription from './TitleWithDescription'

const meta: Meta<typeof TitleWithDescription> = {
  component: TitleWithDescription,
}

export default meta

type Story = StoryObj<typeof TitleWithDescription>

export const Primary: Story = {}
