// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AppLayout from './layouts/AppLayout/AppLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import SessionProvider from './SessionContext/SessionContext'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>
      <PrivateSet unauthenticated="login">
        <Set wrap={AppLayout}>
          <Set wrap={SessionProvider}>
            <Route path="/links" page={LinksPage} name="links" />
            <Route path="/profile-details" page={ProfileDetailsPage} name="profileDetails" />
          </Set>
        </Set>
        <Route path="/" page={HomePage} name="home" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
