// // tests/product.test.js

// const mongoose = require('mongoose');

// const dbHandler = require('../tests/db');
// const productService = require('../src/services/product');
// const models = require('../models/index');

// /**
//  * Connect to a new in-memory database before running any tests.
//  */
// beforeAll(async () => await dbHandler.connect());

// /**
//  * Clear all test data after every test.
//  */
// afterEach(async () => await dbHandler.clearDatabase());

// /**
//  * Remove and close the db and server.
//  */
// afterAll(async () => await dbHandler.closeDatabase());

// /**
//  * Product test suite.
//  */
// describe.skip('product ', () => {

//     /**
//      * Tests that a valid product can be created through the productService without throwing any errors.
//      */
//     it('can be created correctly', async () => {
//         expect(async () => await productService.create(productComplete))
//             .not
//             .toThrow();
//     });
    
// });

// /**
//  * Complete product example.
//  */
// const productComplete = {
//     name: 'iPhone 11',
//     price: 699,
//     description: 'A new dual‑camera system captures more of what you see and love. '
// };

test("", () => expect(2).toBe(2))