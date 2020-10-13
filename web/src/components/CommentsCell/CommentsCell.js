import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

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
