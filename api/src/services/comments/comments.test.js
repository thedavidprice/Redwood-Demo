import { comments, createComment } from './comments'

describe('comments', () => {
  scenario('returns a list of comments', async (scenario) => {
    const list = await comments()

    expect(list.length).toEqual(Object.keys(scenario.comment).length)
  })

  scenario('postOnly', 'creates a new comment', async (scenario) => {
    const comment = await createComment({
      input: {
        name: 'Billy Bob',
        body: "A tree's bark is worse than its bite",
        postId: scenario.post.bark.id,
      },
    })

    expect(comment.name).toEqual('Billy Bob')
    expect(comment.body).toEqual("A tree's bark is worse than its bite")
    expect(comment.postId).toEqual(scenario.post.park.id)
    expect(comment.createdAt).not.toEqual(null)
  })
})
