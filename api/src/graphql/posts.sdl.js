export const schema = gql`
  type Post {
    id: Int!
    title: String!
    author: String!
    body: String!
    comments: [Comment]!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
    author: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    author: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
