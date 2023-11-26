import { back } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'
import UserCell from 'src/components/UserCell'
const UserPage = ({ id }: { id: number }) => {
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="User" description="User page" />
      <main className="min-h-screen bg-light-grey pb-6 md:p-6">
        <div className="fixed left-0 top-0 hidden h-[357px]  w-screen rounded-b-[32px] bg-purple md:block"></div>
        {currentUser && 'id' in currentUser && currentUser.id === id && (
          <header className="relative z-10 flex items-center justify-between rounded-xl bg-white px-6 py-4 md:pr-4">
            <Button
              onClick={() => {
                back()
              }}
              variant={'secondary'}
            >
              Back to editor
            </Button>
            <Button
              onClick={async () => {
                try {
                  navigator.clipboard.writeText(window.location.href)
                } catch (e) {
                  console.error(e)
                }
              }}
            >
              Share Link
            </Button>
          </header>
        )}
        <div className="relative z-10 mx-auto mt-[60px] max-w-[349px] md:rounded-3xl md:bg-white md:px-14 md:py-12 md:shadow-card">
          <UserCell id={id} />
        </div>
      </main>
    </>
  )
}

export default UserPage
