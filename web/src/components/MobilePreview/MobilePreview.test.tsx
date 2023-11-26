import { render } from '@redwoodjs/testing/web'

import MobilePreview from './MobilePreview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobilePreview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobilePreview />)
    }).not.toThrow()
  })
})
