'use strict';

const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
  //can use same variables for multiple tests
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach( () => {
    //attach to console *spy on it or take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('works as expected', () => {
    logger (req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(req.method, req.path);
    expect(next).toHaveBeenCalledWith();
  });
});
