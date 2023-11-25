import { Redirect, routes } from '@redwoodjs/router'

const HomePage = () => {
  return <Redirect to={routes.links()} options={{ replace: true }} />
}

export default HomePage
