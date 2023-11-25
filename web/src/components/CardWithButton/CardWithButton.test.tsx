import { render } from '@redwoodjs/testing/web'

import CardWithButton from './CardWithButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardWithButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardWithButton />)
    }).not.toThrow()
  })
})
