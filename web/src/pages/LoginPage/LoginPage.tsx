import { useRef } from 'react'
import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Form } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmailIcon from 'src/assets/EmailIcon'
import PasswordIcon from 'src/assets/PasswordIcon'
import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type LoginFormData = z.infer<typeof loginSchema>
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

  const onSubmit = async (data: LoginFormData) => {
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
      <AuthLayout>
        <div className="mb-10">
          <h1 className="mb-2 text-[1.5rem] font-bold leading-[150%] text-dark-grey md:text-hm">
            Login
          </h1>
          <p className="text-bm  text-grey">
            Add your details below to get back into the app
          </p>
        </div>
        <Form
          onSubmit={onSubmit}
          config={{ resolver: zodResolver(loginSchema) }}
          className="space-y-6"
        >
          <Input
            label="Email address"
            name="email"
            placeholder="e.g. alex@email.com"
            Icon={EmailIcon}
            ref={emailRef}
            type="email"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            Icon={PasswordIcon}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-center text-bm text-grey">
            Don’t have an account? <br className="md:hidden" />{' '}
            <Link className="text-purple" to={routes.signup()}>
              Create account
            </Link>
          </p>
        </Form>
      </AuthLayout>
    </>
  )
}

export default LoginPage
