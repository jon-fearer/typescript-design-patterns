import { Logger } from '.';

describe('test singleton pattern', () => {
  test('should only create one instance', () => {
    const logger = Logger.getLogger();
    const logger2 = Logger.getLogger();
    expect(logger2).toBe(logger);
  });

  test('should share log data', () => {
    const logger = Logger.getLogger();
    const logMessage = 'some log message';
    logger.info(logMessage);
    const logger2 = Logger.getLogger();
    const anotherMessage = 'another log message';
    logger2.info(anotherMessage);
    expect(logger.logData).toStrictEqual([logMessage, anotherMessage]);
    expect(logger2.logData).toStrictEqual([logMessage, anotherMessage]);
    expect(logger2.logData).toBe(logger.logData);
  });
});
