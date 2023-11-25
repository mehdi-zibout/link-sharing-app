import { render } from '@redwoodjs/testing/web'

import ProfileDetailsPage from './ProfileDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileDetailsPage />)
    }).not.toThrow()
  })
})
