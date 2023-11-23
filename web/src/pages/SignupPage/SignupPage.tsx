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

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

type SignUpFormData = z.infer<typeof signUpSchema>

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: SignUpFormData) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <AuthLayout>
        <div className="mb-10">
          <h1 className="mb-2 text-[1.5rem] font-bold leading-[150%] text-dark-grey md:text-hm">
            Create account
          </h1>
          <p className="text-bm  text-grey">
            Let’s get you started sharing your links!
          </p>
        </div>
        <Form
          onSubmit={onSubmit}
          config={{
            resolver: zodResolver(signUpSchema),
          }}
          className="space-y-6"
        >
          <Input
            label="Email address"
            ref={emailRef}
            name="email"
            placeholder="e.g. alex@email.com"
            Icon={EmailIcon}
          />
          <Input
            label="Create Password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            Icon={PasswordIcon}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="At least 8 characters"
            Icon={PasswordIcon}
          />
          <p className="text-bs text-grey">
            Password must contain at least 8 characters
          </p>
          <Button type="submit" className="w-full">
            Create new account
          </Button>
          <p className="text-center text-bm text-grey">
            Don’t have an account? <br className="md:hidden" />{' '}
            <Link className="text-purple" to={routes.login()}>
              Login
            </Link>
          </p>
        </Form>
      </AuthLayout>
    </>
  )
}

export default SignupPage
