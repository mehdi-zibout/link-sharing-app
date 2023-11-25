import { Link, NavLink, routes } from '@redwoodjs/router'

import EyeIcon from 'src/assets/EyeIcon'
import LinkIcon from 'src/assets/LinkIcon'
import Logo from 'src/assets/Logo'
import LogoIcon from 'src/assets/LogoIcon'
import UserCircleIcon from 'src/assets/UserCircleIcon'
import { Button } from 'src/components/Button/Button'
import Card from 'src/components/Card/Card'
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
    <main className="min-h-screen bg-light-grey pb-6 md:p-6">
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
        <Card className="hidden bg-white p-6 xl:block ">
          <div className="mt-[70px]">
            <svg
              width="308"
              height="632"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
                stroke="#737373"
              />
              <path
                d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
                fill="#fff"
                stroke="#737373"
              />
            </svg>
          </div>
        </Card>
        <div className="xl:col-span-2">{children}</div>
      </div>
    </main>
  )
}

export default AppLayout
