import { Interpreter } from '.';

describe('test interpreter pattern', () => {
  test('should evaluate expression correctly', async () => {
    const result = new Interpreter().interpretExpression('378 - 34897 - 54 + 94387');
    expect(result).toStrictEqual(59814);
  });
});
