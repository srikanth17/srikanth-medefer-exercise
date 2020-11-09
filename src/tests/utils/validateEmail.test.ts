import validateEmail from '../../utils/validateEmail';

test('should accept this email address, test@test.com', () => {
  const result = validateEmail('test@test.com');
  expect(result).toBe(true);
});

test('should reject this email address, test@test', () => {
  const result = validateEmail('test@test');
  expect(result).toBe(false);
});

test('should reject for empty email address', () => {
  const result = validateEmail('');
  expect(result).toBe(false);
});
