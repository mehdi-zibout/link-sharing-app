import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import EmailIcon from 'src/assets/EmailIcon'
import Logo from 'src/assets/Logo'
import PasswordIcon from 'src/assets/PasswordIcon'
import { useAuth } from 'src/auth'
import Input from 'src/components/Input/Input'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <main className="p-8">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="mb-10">
          <Logo className="w-[182.5px] h-10 mb-16" />
          <h1 className="font-bold text-dark-grey text-[1.5rem] leading-[150%] mb-2">
            Login
          </h1>
          <p className="text-grey  text-bm">
            Add your details below to get back into the app
          </p>
        </header>
        <Form onSubmit={onSubmit} className="space-y-6">
          <Input
            label="Email address"
            name="email"
            placeholder="e.g. alex@email.com"
            Icon={EmailIcon}
            validation={{
              required: {
                value: true,
                message: "Can't be empty",
              },
            }}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            Icon={PasswordIcon}
            validation={{
              required: {
                value: true,
                message: "Can't be empty",
              },
            }}
          />
          <Submit className="rw-button rw-button-blue">Login</Submit>
          <div className="text-bm text-center">
            <p className=" text-grey">Don’t have an account?</p>
            <p className=" text-purple">
              <Link to={routes.signup()}>Create account</Link>
            </p>
          </div>
        </Form>
      </main>
    </>
  )
}

export default LoginPage
