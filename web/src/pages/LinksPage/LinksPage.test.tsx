import { render } from '@redwoodjs/testing/web'

import LinksPage from './LinksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LinksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinksPage />)
    }).not.toThrow()
  })
})
