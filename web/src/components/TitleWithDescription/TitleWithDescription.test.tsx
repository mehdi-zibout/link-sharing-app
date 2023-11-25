import { render } from '@redwoodjs/testing/web'

import TitleWithDescription from './TitleWithDescription'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TitleWithDescription', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TitleWithDescription />)
    }).not.toThrow()
  })
})
