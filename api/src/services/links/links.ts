import type { LinkRelationResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

import { user } from '../users/users'

export const updateUserLinks: MutationResolvers['updateUserLinks'] = async ({
  input,
}) => {
  if (!input || !context.currentUser?.id) {
    throw new Error('no input or user not found')
  }
  const userId = context.currentUser.id
  await db.link.deleteMany({
    where: { userId: { equals: userId } },
  })
  await db.link.createMany({
    data: input.map((data) => ({ ...data, userId })),
  })
  const data = await user({ id: userId })
  if (!data) {
    throw new Error('user not found')
  }
  return data
}

export const Link: LinkRelationResolvers = {
  User: async (_obj, { root }) => {
    const link = await db.link.findUnique({ where: { id: root?.id } }).User()
    if (!link) {
      throw new Error('Link not found')
    }
    return link
  },
}
