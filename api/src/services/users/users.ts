import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ input }) => {
  return db.user.update({
    data: input,
    where: { id: context.currentUser?.id },
  })
}

export const User: UserRelationResolvers = {
  links: async (_obj, { root }) => {
    const links = await db.user.findUnique({ where: { id: root?.id } }).links()
    return links?.sort((a, b) => a.order - b.order) ?? []
  },
}
