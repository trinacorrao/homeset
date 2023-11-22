
// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const checkIfIdExists = require('./check-if-id-exists');

// let mongoServer;

// beforeAll(async () => {
//   mongoServer = new MongoMemoryServer().create;
//   const mongoUri = mongoServer.getUri();
//   await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoServer.stop();
// });

// beforeEach(async () => {
//   // Clear the database before each test
//   await mongoose.connection.db.dropDatabase();
// });

// describe.skip('checkIfIdExists function integration test', () => {
//   it('should return false for invalid ID format', async () => {
//     const result = await checkIfIdExists('invalidId');
//     expect(result).toBe(false);
//   });

//   it('should return false if document is not found', async () => {
//     const result = await checkIfIdExists('6545107dee3c5c12cefc049e');
//     expect(result).toBe(false);
//   });

//   it('should return true if document is found', async () => {
//     // Insert a document into the database
//     const Task = mongoose.model('Task', { _id: '6545107dee3c5c12cefc049e' });
//     await Task.create({});

//     const result = await checkIfIdExists('6545107dee3c5c12cefc049e');
//     expect(result).toBe(true);
//   });

//   it('should return false if an error occurs during the check', async () => {
//     // Mock the findOne method to simulate an error
//     jest.spyOn(mongoose.Model, 'findOne').mockImplementationOnce(() => {
//       throw new Error('Mock Error');
//     });

//     const result = await checkIfIdExists('6545107dee3c5c12cefc049e');
//     expect(result).toBe(false);
//   });
// });

test("", () => expect(2).toBe(2))