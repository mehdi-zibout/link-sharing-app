import { render } from '@redwoodjs/testing/web'

import LinkInput from './LinkInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LinkInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkInput />)
    }).not.toThrow()
  })
})
