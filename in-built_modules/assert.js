const assert = require('assert');

// The assert module provides a way of testing expressions. If the expression evaluates to 0, 
// or false, an assertion failure is being caused, and the program is terminated.
// This module was built to be used internally by Node.js.

// assert(): Checks if a value is true. Same as assert.ok()
assert(true, 'Value is true');
// assert(false, 'Value is false');

// equal(): Checks if two values are equal, using the equal operator (==)
assert.equal(1, '1', 'Values are equal');

// notEqual(): Checks if two values are not equal, using the not equal operator (!=)
assert.notEqual(1, 2, 'Values are not equal');

// strictEqual(): Checks if two values are equal, using the strict equal operator (===)
assert.strictEqual(1, 1, 'Values are strictly equal');

// notStrictEqual(): Checks if two values are not equal, using the strict not equal operator (!==)
assert.notStrictEqual(1, '1', 'Values are not strictly equal');

// deepEqual(): Checks if two values are equal
assert.deepEqual({ a: 1 }, { a: 1 }, 'Objects are deeply equal');

// notDeepEqual(): Checks if two values are not equal
assert.notDeepEqual({ a: 1 }, { b: 1 }, 'Objects are not deeply equal');

assert.throws(
    () => {
      throw new Error('This function threw an error');
    },
    Error,
    'An error was thrown'
  );
  
  
  
  
  
  