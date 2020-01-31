const bcrypt = require("bcryptjs")
const db = require("../data/dbConfig")

module.exports = {
  createDriver,
  find,
  findByEmail,
  findDriverById,
}

async function createDriver(driver) {
  driver.password = await bcrypt.hash(driver.password, 14)
  await db("drivers").insert(driver)
   return findByEmail(driver.email)
}

function find() {
  return db("drivers")
}

function findByEmail(email) {
  return db("drivers")
    .where({ email })
    .first()
}

function findDriverById(id) {
  return db("drivers")
    .where({ id })
    .first()
}
