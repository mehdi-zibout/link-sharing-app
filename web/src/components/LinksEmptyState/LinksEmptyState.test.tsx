import { render } from '@redwoodjs/testing/web'

import LinksEmptyState from './LinksEmptyState'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LinksEmptyState', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinksEmptyState />)
    }).not.toThrow()
  })
})
