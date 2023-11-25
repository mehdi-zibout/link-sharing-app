import { createContext, useContext } from 'react'

import { UserDetails, UserDetailsVariables } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

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

  if (loading) {
    return <div className="">loading ...</div>
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
