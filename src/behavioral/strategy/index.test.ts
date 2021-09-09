import { StringProcessor, ReverseStringProcessorStrategy, UppercaseStringProcessorStrategy } from './index';

describe('test strategy pattern', () => {
  test('should reverse the string', () => {
    const stringProcessor = new StringProcessor(new ReverseStringProcessorStrategy());
    const input = 'abc';
    expect(stringProcessor.processString(input)).toBe('cba');
  });

  test('should convert the string to uppercase', () => {
    const stringProcessor = new StringProcessor(new UppercaseStringProcessorStrategy());
    const input = 'abc';
    expect(stringProcessor.processString(input)).toBe('ABC');
  });
});
