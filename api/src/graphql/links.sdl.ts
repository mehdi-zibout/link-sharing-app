export const schema = gql`
  type Link {
    id: Int!
    order: Int!
    platform: Platform!
    path: String!
    User: User!
    userId: Int!
  }

  enum Platform {
    GITHUB
    FRONTEND_MENTOR
    TWITTER
    LINKEDIN
    YOUTUBE
    FACEBOOK
    TWITCH
    DEVTO
    CODEWARS
    FREECODECAMP
    GITLAB
    HASHNODE
    STACK_OVERFLOW
  }

  input UpdateLinkInput {
    order: Int!
    platform: Platform!
    path: String!
  }

  type Mutation {
    updateUserLinks(input: [UpdateLinkInput!]): User! @requireAuth
  }
`
