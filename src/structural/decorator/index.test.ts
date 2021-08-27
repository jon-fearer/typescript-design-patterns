import { Logger, ExcitingLogMessageDecorator } from '.';

describe('test decorator pattern', () => {
  let logSpy: jest.SpyInstance;

  beforeAll(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should log a boring message', () => {
    const logger = new Logger();
    const message = 'this is a boring message';
    logger.log(message);
    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('should log an exciting message', () => {
    const logger = new ExcitingLogMessageDecorator(new Logger());
    const message = 'this is an exciting message';
    logger.log(message);
    expect(logSpy).toHaveBeenCalledWith(`${message.toUpperCase()}!`);
  });
});
