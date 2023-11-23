import { Toaster } from '@redwoodjs/web/dist/toast'

import Logo from 'src/assets/Logo'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="min-h-screen bg-white p-8 md:flex md:flex-col md:items-center md:justify-center md:bg-light-grey">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="mb-16 md:mb-[51px]">
          <Logo className="h-10 w-[182.5px] md:mx-auto" />
        </header>
        <div className="bg-white md:rounded-xl md:p-10">
          <div className="md:w-[396px] ">{children}</div>
        </div>
      </main>
    </>
  )
}

export default AuthLayout
