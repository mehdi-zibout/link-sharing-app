export const schema = gql`
  type User {
    id: Int!
    firstName: String
    lastName: String
    publicEmail: String
    profilePicture: String
    links: [Link!]!
  }

  type Query {
    user(id: Int!): User @skipAuth
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    publicEmail: String
    profilePicture: String
  }

  type Mutation {
    updateUser(input: UpdateUserInput!): User! @requireAuth
  }
`
