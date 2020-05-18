// Mathfunctions.test.js
const Funcs = require("../MathFunctions");

describe("Two positive numbers", () => {
    test('Testing Operations', () => {
        expect(Funcs.sum(5, 10)).toBe(15);
        expect(Funcs.sum(1, 1)).toBe(2);
        expect(Funcs.sub(10, 5)).toBe(5);
        expect(Funcs.mul(5, 10)).toBe(50);
        expect(Funcs.div(10, 5)).toBe(2);
    });
});

// describe("API calls", () => {
//     test('Async Test', async () => {
//         expect.assertions(1);
//         const data = await Funcs.apiCall();
//         expect(data.name).toEqual("Leanne Graham");
//     });
// });