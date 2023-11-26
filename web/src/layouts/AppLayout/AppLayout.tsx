import { Link, NavLink, routes } from '@redwoodjs/router'

import EyeIcon from 'src/assets/EyeIcon'
import LinkIcon from 'src/assets/LinkIcon'
import Logo from 'src/assets/Logo'
import LogoIcon from 'src/assets/LogoIcon'
import UserCircleIcon from 'src/assets/UserCircleIcon'
import { Button } from 'src/components/Button/Button'
import MobilePreview from 'src/components/MobilePreview/MobilePreview'
import { useSession } from 'src/SessionContext/SessionContext'

type AppLayoutProps = {
  children?: React.ReactNode
}

const NAV_LINKS = [
  { label: 'Links', to: '/links', Icon: LinkIcon },
  {
    label: 'Profile Details',
    to: '/profile-details',
    Icon: UserCircleIcon,
  },
]

const AppLayout = ({ children }: AppLayoutProps) => {
  const { id } = useSession()
  return (
    <main className="bg-light-grey pb-6 md:p-6">
      <header className="flex items-center justify-between rounded-xl bg-white px-6 py-4 md:pr-4">
        <Link to={routes.home()}>
          <LogoIcon className="h-8 w-8 md:hidden" />
          <Logo className="hidden h-8 w-[146px] md:block" />
          <span className="sr-only">Link Sharing App Logo</span>
        </Link>
        <nav className="flex gap-x-2">
          {NAV_LINKS.map(({ label, to, Icon }) => (
            <NavLink
              key={label}
              className="flex items-center gap-x-2 rounded-lg fill-grey px-[27px] py-[11px] text-grey transition duration-300 hover:fill-purple hover:text-purple"
              to={to}
              activeClassName="bg-light-purple text-purple fill-purple"
            >
              <Icon className="h-5 w-5 fill-inherit" />
              <span className="text-hs max-md:sr-only">{label}</span>
            </NavLink>
          ))}
        </nav>
        <Button variant="secondary" className="px-4 py-[11px]" asChild>
          <Link to={routes.user({ id })}>
            <EyeIcon className="fill-purple md:hidden" />
            <span className="max-md:sr-only">Preview</span>
          </Link>
        </Button>
      </header>
      <div className="p-4 md:p-6 xl:grid xl:grid-cols-3 xl:gap-x-6">
        <MobilePreview />
        <div className="h-fit xl:col-span-2">{children}</div>
      </div>
    </main>
  )
}

export default AppLayout
