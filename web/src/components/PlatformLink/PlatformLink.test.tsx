import { render } from '@redwoodjs/testing/web'

import PlatformLink from './PlatformLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlatformLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlatformLink />)
    }).not.toThrow()
  })
})
