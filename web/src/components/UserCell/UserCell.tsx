import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserCircleIcon from 'src/assets/UserCircleIcon'

import PlatformLink from '../PlatformLink/PlatformLink'

export const QUERY = gql`
  query FindUserQuery($id: Int!) {
    user: user(id: $id) {
      id
      firstName
      lastName
      profilePicture
      publicEmail
      links {
        id
        order
        path
        platform
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindUserQuery, FindUserQueryVariables>) => {
  return (
    <div>
      {user.profilePicture ? (
        <img
          src={user.profilePicture}
          alt="avatar"
          className="mx-auto h-[104px] w-[104px] rounded-full border-[4px] border-purple"
        />
      ) : (
        <UserCircleIcon />
      )}
      <h1 className="mt-[25px] text-center text-hm text-dark-grey">
        {user.firstName} {user.lastName}
      </h1>
      <p className="mb-14 mt-2 text-center text-bm text-grey">
        {user.publicEmail}
      </p>
      <ul className="space-y-5 px-[69px]">
        {user.links.map((link) => (
          <li key={link.id} className="">
            <PlatformLink platformId={link.platform} path={link.path} />
          </li>
        ))}
      </ul>
    </div>
  )
}
