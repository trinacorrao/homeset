// const server = require("../server");
// const jest = require("@jest/globals");
// const taskRouter = require("../routes/task.router")

test("description", () => {
  expect().toBe();
});

const mockFn = jest.fn(() => {
  const mockObject = {
    task_name: "mockTask",
    task_doer: "mockDoer",
    ini_date: "10/31/2023",
    frequency: 1,
    completed: "10/31/2023",
    reminder: "mockReminder",
    notes: "mockNotes",
  };
  return mockObject;
});

const mockObject = mockFn();

test("CreateRUD", () => {
  expect(mockObject.task_name).toBe("mockTask");
});

test("description", () => {
  // expect(taskRouter.).toBe();
});

// {
//   task_name: String,
//   task_doer: String,
//   ini_date: Date,
//   frequency: Number,
//   completed: [Date],
//   reminder: String,
//   notes: String,
// }

const request = require("supertest");
const app = require('../server');

describe("Test Express Server", () => {
  it("should return the expected response for GET /api/data", async () => {
    const response = await request("http://localhost:5000").get("/api/data");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});

describe("Test CRUD Task for Test Household", () => {
  it("should return the expected response for GET /api/atlas/task/", async () => {
    const tasks = await request("http://localhost:5000").get(
      `/api/atlas/task/`
    );
    expect(tasks.status).toBe(200);
    const expectedKeys = [
      "completed",
      "_id",
      "__v",
      "task_name",
      "task_doer",
      "ini_date",
      "frequency",
      "reminder",
      "notes",
    ];
    expectedKeys.sort();
    for (let task of tasks._body) {
      const taskKeys = Object.keys(task);
      taskKeys.sort();
      expectedKeys.sort();
      console.log(taskKeys, expectedKeys);
      expect(taskKeys).toEqual(expectedKeys);
    }
  });
});

describe("POST endpoint testing", () => {
  it("should return the expected response for POST /api/atlas/task/", (done) => {
    const goodRequestBody = {
      task_name: "req.body.task_name",
      task_doer: "req.body.task_doer",
      ini_date: "10/31/2023",
      frequency: 0,
      completed: [],
      reminder: "req.body.reminder",
      notes: "req.body.notes",
    };
    request(app)
      .post("/api/atlas/task")
      .send(goodRequestBody)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
describe("2nd POST endpoint testing", () => {
  it("should get a 500 error with insufficient data provided", (done) => {
    const insufficientRequestBody = {
      ini_date: "req.body.ini_date",
      frequency: "req.body.frequency",
      completed: [],
      reminder: "req.body.reminder",
      reminder: "req.body.reminder",
    };
    request(app)
      .post("/api/atlas/task")
      .send(insufficientRequestBody)
      .expect(500)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});