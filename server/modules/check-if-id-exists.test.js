const checkIfIdExists = require("./check-if-id-exists");
// const mongoose = require("mongoose");
// const uri = require("../atlas_uri");
// mongoose.connect(
//   `${uri}`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
const db = require("../tests/db");
const mongoose = require("mongoose");
const Task = require("../models/task");
// const ObjectId = mongoose.Types.ObjectId;

beforeAll(async () => {
  await db.connect();
});

describe("unit test for the check-if-id-exists module", () => {
  const validId = "6545107dee3c5c12cefc049e";
  const invalidIds = [
    "6545107dee3c5c12cefc049f",
    "",
    "6545107dee3c5c12cefc049ef",
  ];
  test("Check connection to MongoMemoryServer in the middle of the test", async () => {
    // Your test logic here
    // Check if the in-memory server is still running in the middle of the test
    if (db && db.isRunning) {
      console.log("Connected to MongoMemoryServer");
      expect(2).toBe(2);
    } else {
      console.log("Not connected to MongoMemoryServer");
      expect(2).toBe(3);
    }
  });

  it("should exist", async () => {
    await expect(
      checkIfIdExists(
        validId,
        // ObjectId,
        Task
      )
    ).toBe(true);
  });

  invalidIds.forEach((invalidId) =>
    it.skip("should not exist", async () => {
      await expect(checkIfIdExists(invalidId)).toBe(false);
    })
  );
});

test("", () => expect(2).toBe(2));
