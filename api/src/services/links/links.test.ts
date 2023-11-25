import type { Link } from '@prisma/client'

import { links, link, createLink, updateLink, deleteLink } from './links'
import type { StandardScenario } from './links.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('links', () => {
  scenario('returns all links', async (scenario: StandardScenario) => {
    const result = await links()

    expect(result.length).toEqual(Object.keys(scenario.link).length)
  })

  scenario('returns a single link', async (scenario: StandardScenario) => {
    const result = await link({ id: scenario.link.one.id })

    expect(result).toEqual(scenario.link.one)
  })

  scenario('creates a link', async (scenario: StandardScenario) => {
    const result = await createLink({
      input: {
        platform: 'GITHUB',
        path: 'String',
        userId: scenario.link.two.userId,
      },
    })

    expect(result.platform).toEqual('GITHUB')
    expect(result.path).toEqual('String')
    expect(result.userId).toEqual(scenario.link.two.userId)
  })

  scenario('updates a link', async (scenario: StandardScenario) => {
    const original = (await link({ id: scenario.link.one.id })) as Link
    const result = await updateLink({
      id: original.id,
      input: { platform: 'STACK_OVERFLOW' },
    })

    expect(result.platform).toEqual('STACK_OVERFLOW')
  })

  scenario('deletes a link', async (scenario: StandardScenario) => {
    const original = (await deleteLink({ id: scenario.link.one.id })) as Link
    const result = await link({ id: original.id })

    expect(result).toEqual(null)
  })
})
