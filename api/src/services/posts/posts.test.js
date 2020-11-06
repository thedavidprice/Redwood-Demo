import { posts } from './posts'

const { createFixtures, clearFixtures } = require('src/lib/test_helper')

export const FIXTURES = [
  {
    title: 'Test',
    body: 'Test',
  },
]

describe('posts', () => {
  beforeEach(async () => {
    await createFixtures('post', FIXTURES)
  })

  afterEach(async () => {
    await clearFixtures('post')
  })

  it('returns a list of posts', async () => {
    const list = await posts()

    expect(list.length).toEqual(FIXTURES.length)
    expect(list[0]).toEqual(expect.objectContaining(FIXTURES[0]))
  })
})
