import { back } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { Button } from 'src/components/Button/Button'
import UserCell from 'src/components/UserCell'
const UserPage = ({ id }: { id: number }) => {
  return (
    <>
      <MetaTags title="User" description="User page" />
      <main className="min-h-screen bg-light-grey pb-6 md:p-6">
        <header className="flex items-center justify-between rounded-xl bg-white px-6 py-4 md:pr-4">
          <Button
            onClick={() => {
              back()
            }}
            variant={'secondary'}
          >
            Back to editor
          </Button>
          <Button>Share Link</Button>
        </header>
        <div className="mt-[60px]">
          <UserCell id={id} />
        </div>
      </main>
    </>
  )
}

export default UserPage
