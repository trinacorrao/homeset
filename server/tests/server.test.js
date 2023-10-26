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

const mockObject = mockFn()


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

const request = require('supertest');
const app = require('../server');

describe('Test Express Server', () => {
  it('should return the expected response for GET /api/data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
});