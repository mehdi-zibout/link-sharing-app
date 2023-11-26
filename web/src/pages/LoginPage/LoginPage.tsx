import { useRef } from 'react'
import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Form, useForm } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmailIcon from 'src/assets/EmailIcon'
import PasswordIcon from 'src/assets/PasswordIcon'
import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import TitleWithDescription from 'src/components/TitleWithDescription/TitleWithDescription'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must have at least 8 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>
const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  const formMethods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

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
      switch (response.error) {
        case 'not_found': {
          formMethods.setError('email', { message: 'Please check again' })
          break
        }
        case 'incorrect_password': {
          formMethods.setError('password', { message: 'Please check again' })
          break
        }
      }
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <div className="mb-10">
        <TitleWithDescription
          title="Login"
          description="Add your details below to get back into the app"
        />
      </div>
      <Form formMethods={formMethods} onSubmit={onSubmit} className="space-y-6">
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
        <Button
          disabled={formMethods.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          Login
        </Button>
        <p className="text-center text-bm text-grey">
          Don’t have an account? <br className="md:hidden" />{' '}
          <Link className="text-purple" to={routes.signup()}>
            Create account
          </Link>
        </p>
      </Form>
    </>
  )
}

export default LoginPage
