import { render } from '@redwoodjs/testing/web'

import Dropdown from './PlatformsDropdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dropdown />)
    }).not.toThrow()
  })
})
