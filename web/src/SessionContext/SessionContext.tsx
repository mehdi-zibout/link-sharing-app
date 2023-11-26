import { createContext, useContext, useEffect } from 'react'

import { makeVar } from '@apollo/client'
import { UserDetails, UserDetailsVariables } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import Logo from 'src/assets/Logo'
import { useAuth } from 'src/auth'

type OptimsticSessionType = Omit<NonNullable<UserDetails['user']>, 'links'> & {
  links: Array<Omit<NonNullable<UserDetails['user']>['links'][number], 'id'>>
}

export const optimisticSession = makeVar<OptimsticSessionType>(
  {} as OptimsticSessionType
)

const SessionContext = createContext<NonNullable<UserDetails['user']>>(
  {} as NonNullable<UserDetails['user']>
)

const USER_DETAILS_QUERY = gql`
  query UserDetails($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
      publicEmail
      profilePicture
      links {
        id
        order
        platform
        path
      }
    }
  }
`
export function useSession() {
  return useContext(SessionContext)
}
export default function SessionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { currentUser } = useAuth()
  const id = currentUser && 'id' in currentUser ? (currentUser.id as number) : 0
  const { data, loading, error } = useQuery<UserDetails, UserDetailsVariables>(
    USER_DETAILS_QUERY,
    {
      variables: { id },
      skip: id === 0,
      fetchPolicy: 'cache-first',
    }
  )

  useEffect(() => {
    if (!data?.user) return
    optimisticSession(data.user)
  }, [data])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light-grey">
        <Logo className="w-60 animate-pulse" />
      </div>
    )
  }

  if (error) {
    return <div className="">error {error.message}</div>
  }

  if (!data?.user) {
    return <div className="">not found</div>
  }

  return (
    <SessionContext.Provider value={data.user}>
      {children}
    </SessionContext.Provider>
  )
}
