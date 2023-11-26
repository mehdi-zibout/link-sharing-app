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

import MobilePreview from './MobilePreview'

const meta: Meta<typeof MobilePreview> = {
  component: MobilePreview,
}

export default meta

type Story = StoryObj<typeof MobilePreview>

export const Primary: Story = {}
