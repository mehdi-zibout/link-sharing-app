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

import CardWithButton from './CardWithButton'

const meta: Meta<typeof CardWithButton> = {
  component: CardWithButton,
}

export default meta

type Story = StoryObj<typeof CardWithButton>

export const Primary: Story = {}
