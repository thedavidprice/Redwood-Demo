import { comments, createComment } from './comments'
import { FIXTURES as POST_FIXTURES } from '../posts/posts.test'

const { createFixtures, clearFixtures } = require('src/lib/test_helper')
const { db } = require('src/lib/db')

export const FIXTURES = [
  {
    name: 'Test',
    body: 'Test',
    post: {
      create: POST_FIXTURES[0],
    },
  },
]

beforeEach(async () => {
  createFixtures('comment', FIXTURES)
})

afterEach(async () => {
  await clearFixtures('comment')
  await clearFixtures('post')
})

describe('comments', () => {
  // it('returns a list of comments', async () => {
  //   const list = await comments()
  //   const commentOnlyFixtures = FIXTURES.map((fix) => {
  //     delete fix.post
  //     return fix
  //   })

  //   expect(list.length).toEqual(FIXTURES.length)
  //   expect(list[0]).toEqual(expect.objectContaining(commentOnlyFixtures[0]))
  // })

  it('can create a comment', async () => {
    const post = await db.post.findMany()
    console.info('post', post)
    const comments = await db.comment.findMany()
    console.info('comments', comments)
    // const comment = await createComment({
    //   input: {
    //     name: 'John Doe',
    //     body: 'My comment',
    //     post: {
    //       connect: { id: post.id },
    //     },
    //   },
    // })
    // console.info(comment)
  })
})
