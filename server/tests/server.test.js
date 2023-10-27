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
// const app = require('../server');

describe("Test Express Server", () => {
  it("should return the expected response for GET /api/data", async () => {
    const response = await request("http://localhost:5000").get("/api/data");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});

const Task = require("../models/task");

describe("Test CRUD Task for Test Household", () => {
  it("should return the expected response for GET /api/atlas/task/", async () => {
    const tasks = await request("http://localhost:5000").get(
      `/api/atlas/task/`
    );
    expect(tasks.status).toBe(200);
    const expectedKeys = [
      "completed",
      "_id",
      "task_name",
      "task_doer",
      "ini_date",
      "frequency",
      "reminder",
      "notes",
    ];
    for (let task of tasks._body) {
      const taskKeys = Object.keys(task);
      taskKeys.sort();
      expectedKeys.sort();
      // console.log(taskKeys, expectedKeys);
      expect(taskKeys).toEqual(expectedKeys);
    }
  });
});

describe("second try", () => {
  it("should return the expected response for POST /api/atlas/task/", async () => {
    const responseData = {};
    async () => {
      const requestBody = {
        task_name: "req.body.task_name",
        task_doer: "req.body.task_doer",
        ini_date: "req.body.ini_date",
        frequency: "req.body.frequency",
        completed: [],
        reminder: "req.body.reminder",
        reminder: "req.body.reminder",
      };
      const responseData = await request(app)
        .post("/api/atlas/task")
        .send(requestBody); // Include the req.body with .send()

      await expect(responseData.status).toBe(201);
      await expect(responseData.body).toBe({
        task_name: "req.body.task_name",
        task_doer: "req.body.task_doer",
        ini_date: "req.body.ini_date",
        frequency: "req.body.frequency",
        completed: [],
        reminder: "req.body.reminder",
        reminder: "req.body.reminder",
      });
    };
    console.log(responseData);
  });
});
