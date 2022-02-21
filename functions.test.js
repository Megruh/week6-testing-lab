const {
    returnTwo, greeting, add, subtract, multiply, divide
} = require("./functions.js")

test('returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting', () => {
    expect(greeting('James')).toBe('Hello, James')
    //expect(greeting('Jill').toBe("Hello, Jill"))
})

describe('mathFunctions', () => {
test('add', () => {
    expect(add(1, 2)).toBe(3)
    //expect(add(5, 9).toBe(14))
})

test('subtract', () => {
    expect(subtract(5, 3)).toBe(2)
})

test('multiply', () => {
    expect(multiply(3, 6)).toBe(18)
})

test('divide', () => {
    expect(divide(9, 3)).toBe(3)
})
})