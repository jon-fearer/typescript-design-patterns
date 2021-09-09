import { DataProcessor, UppercaseEtlTemplate, ReverseStringEtlTemplate } from '.';

describe('test template pattern', () => {
  test('should convert string to uppercase', () => {
    const uppercaseEtlTemplate = new UppercaseEtlTemplate();
    const dataProcessor = new DataProcessor(uppercaseEtlTemplate);
    dataProcessor.processData();
    expect(uppercaseEtlTemplate.output).toBe('ABC');
  });

  test('should reverse string', () => {
    const reverseStringEtlTemplate = new ReverseStringEtlTemplate();
    const dataProcessor = new DataProcessor(reverseStringEtlTemplate);
    dataProcessor.processData();
    expect(reverseStringEtlTemplate.output).toBe('cba');
  });
});
