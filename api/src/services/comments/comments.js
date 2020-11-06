import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const Comment = {
  post: (_obj, { root }) =>
    db.comment.findOne({ where: { id: root.id } }).post(),
}
