import { DateLoggerContext } from '.';

describe('test state pattern', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should switch between states', () => {
    const dateLoggerContext = new DateLoggerContext();
    expect(dateLoggerContext.dateLoggerState.constructor.name).toBe('ISODateLoggerState');
    dateLoggerContext.logDate();
    expect(dateLoggerContext.dateLoggerState.constructor.name).toBe('LocaleDateLoggerState');
    dateLoggerContext.logDate();
    expect(dateLoggerContext.dateLoggerState.constructor.name).toBe('ISODateLoggerState');
  });
});
