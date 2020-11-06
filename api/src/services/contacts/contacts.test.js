import { contacts } from './contacts'

const { createFixtures, clearFixtures } = require('src/lib/test_helper')

const FIXTURES = [
  {
    name: 'Test',
    email: 'test@sample.com',
    message: 'Test',
  },
]

describe('contacts', () => {
  beforeEach(async () => {
    await createFixtures('contact', FIXTURES)
  })

  afterEach(async () => {
    await clearFixtures('contact')
  })

  it('returns a list of contacts', async () => {
    const list = await contacts()

    expect(list.length).toEqual(FIXTURES.length)
    expect(list[0]).toEqual(expect.objectContaining(FIXTURES[0]))
  })
})
