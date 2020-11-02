import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="text-center text-gray-500">No comments yet</div>
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ comments }) => {
  return (
    <div className="-mt-8">
      {comments.map((comment, i) => (
        <div key={i} className="mt-8">
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  )
}
