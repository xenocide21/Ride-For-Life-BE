const driversModel = require("./drivers-model")
const db = require("../data/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})

describe("driversModel", () => {

  test("findDriverById", async () => {
    const res = await driversModel.findDriverById(1)
    expect(res.name).toMatch(/joan/i)
    expect(res.email).toBe("joan@gmail.com")
    expect(res.location).toBe("Kampala")
  })

  test("createDriver", async () => {
    await driversModel.createDriver({name: "terry", email: "terry@email", password: "abc", location: "Kira", price: "1 million shillings"})
    const drivers = await db("drivers").select()
    expect(drivers.length).toBe(21)
  })

  test("find", async () => {
    const res = await driversModel.find()
    expect(res.length).toBe(20)
  })

  test("findByEmail", async () => {
    const res = await driversModel.findByEmail('bwanbale@email.com')
    expect(res.email).toBe('bwanbale@email.com')
    expect(res.name).toMatch(/bwanbale/i)
    expect(res.location).toBe("Kampala")
  })
})