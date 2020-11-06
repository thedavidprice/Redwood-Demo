const { db } = require('src/lib/db')

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export const createFixtures = async (model, fixtures) => {
  const created = []
  await asyncForEach(fixtures, async (fixture) => {
    created.push(await db[model].create({ data: fixture }))
  })
  return created
}

export const clearFixtures = async (model) => {
  console.info('model', model)
  await db[model].deleteMany()
}
