import type { Meta, StoryObj } from '@storybook/react'

import ProfileDetailsPage from './ProfileDetailsPage'

const meta: Meta<typeof ProfileDetailsPage> = {
  component: ProfileDetailsPage,
}

export default meta

type Story = StoryObj<typeof ProfileDetailsPage>

export const Primary: Story = {}
