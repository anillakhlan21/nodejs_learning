// const assert = require('assert');
const assert = require('chai').assert;
const bufferFile = require('../in-built_modules/buffer.js');


// Test suite
describe('Math operations', () => {
  // Test case 1
  it('should add two numbers correctly', () => {
    const result = 2 + 3;
    assert.strictEqual(result, 5);
  });

  // Test case 2
  it('should multiply two numbers correctly', () => {
    const result = 4 * 5;
    assert.strictEqual(result, 20);
  });

  // Test case 3
  it('should divide two numbers correctly', () => {
    const result = 10 / 2;
    assert.strictEqual(result, 5);
  });
});



// Test suite
describe('Array', () => {
  // Test case
  it('should return the index of an element', () => {
    const array = [1, 2, 3, 4, 5];
    const index = array.indexOf(3);
    assert.strictEqual(index, 2);
  });

  // Test case
  it('should add an element to the array', () => {
    const array = [1, 2, 3];
    array.push(4);
    assert.deepStrictEqual(array, [1, 2, 3, 4]);
  });

  // Test case
  it('should remove an element from the array', () => {
    const array = [1, 2, 3, 4];
    array.pop();
    assert.deepStrictEqual(array, [1, 2, 3]);
  });
});

// --------------------------Asynchronous Test Case-----------------
// Test suite
describe('Async operations', () => {
  // Async test case
  it('should resolve a promise', async () => {
    const result = await Promise.resolve('Hello');
    assert.strictEqual(result, 'Hello');
  });

  // Async test case
  it('should reject a promise', async () => {
    try {
      await Promise.reject(new Error('Oops!'));
      // The test should throw an error and not reach this line
      assert.fail('Expected promise rejection');
    } catch (error) {
      assert.strictEqual(error.message, 'Oops!');
    }
  });
});



//----------Testing with Setup and Teardown---------------------

describe('User operations', () => {
  let users = [];

  // Setup before each test case
  beforeEach(() => {
    users = ['John', 'Jane', 'Alice'];
  });

  // Teardown after each test case
  afterEach(() => {
    users = [];
  });

  // Test case
  it('should add a user to the list', () => {
    users.push('Bob');
    assert.deepStrictEqual(users, ['John', 'Jane', 'Alice', 'Bob']);
  });

  // Test case
  it('should remove a user from the list', () => {
    users.pop();
    assert.deepStrictEqual(users, ['John', 'Jane']);
  });
});


//------------------Skipping and Exclusive Test Cases-------------------

// Test suite
/**
 * description

describe('Feature A', () => {
  // Exclusive test case, will be the only one executed
  it.only('should perform action A', () => {
    const result = performActionA();
    assert.strictEqual(result, true);
  });

  // Skipped test case, won't be executed
  it.skip('should perform action B', () => {
    const result = performActionB();
    assert.strictEqual(result, false);
  });

  // Regular test case
  it('should perform action C', () => {
    const result = performActionC();
    assert.strictEqual(result, true);
  });
});

 */


// --------------test case for bufferFile.js file-------------------
describe('Buffer', () => {
  describe('Buffer.from()', () => {
    it('should create a buffer from a string', () => {
      const str = 'anil kumar';
      const buf = bufferFile.createBufferFromString(str);
      assert.instanceOf(buf, Buffer);
      assert.strictEqual(buf.toString(), str);
    });
  });

  describe('Buffer.alloc()', () => {
    it('should create a buffer with specified length and fill it with zeroes', () => {
      const length = 8;
      const buf = bufferFile.createZeroFilledBuffer(length);
      assert.instanceOf(buf, Buffer);
      assert.strictEqual(buf.length, length);
      assert.strictEqual(buf.toString(), '\x00\x00\x00\x00\x00\x00\x00\x00');
    });
  });

  describe('Buffer.concat()', () => {
    it('should concatenate multiple buffers', () => {
      const buf1 = Buffer.from('abc');
      const buf2 = Buffer.from('def');
      const concatenated = bufferFile.concatenateBuffers(buf1, buf2);
      assert.instanceOf(concatenated, Buffer);
      assert.strictEqual(concatenated.toString(), 'abcdef');
    });
  });

  describe('Buffer.compare()', () => {
    it('should compare two buffers', () => {
      const buf1 = Buffer.from('abc');
      const buf2 = Buffer.from('def');
      const comparison = bufferFile.compareBuffers(buf1, buf2);
      assert.isNumber(comparison);
      assert.strictEqual(comparison, -1);
    });
  });

  // Add more test cases for other functions in buffer.js
});

