import { calculeMeetingDate } from './meetingCalculator.mjs';

describe('calculeMeetingDate', () => {
  test('Valid initial date and increment days', () => {
    const initialDate = '01/06/2023';
    const incrementDays = 7;
    const expected = '08/06/2023';
    const result = calculeMeetingDate(initialDate, incrementDays);
    expect(result).toBe(expected);
  });

  test('Incremented date falls on a Saturday', () => {
    const initialDate = '20/05/2024';
    const incrementDays = 5;
    const expected = '27/05/2024';
    const result = calculeMeetingDate(initialDate, incrementDays);
    expect(result).toBe(expected);
  });

  test('Incremented date falls on a Sunday', () => {
    const initialDate = '20/05/2024';
    const incrementDays = 6;
    const expected = '27/05/2024';
    const result = calculeMeetingDate(initialDate, incrementDays);
    expect(result).toBe(expected);
  });

  test('Invalid initial date', () => {
    const initialDate = 'invalid';
    const incrementDays = 7;
    expect(() => calculeMeetingDate(initialDate, incrementDays)).toThrow();
  });

  test('Large increment days value', () => {
    const initialDate = '01/06/2024';
    const incrementDays = 365;
    const expected = '02/06/2025';
    const result = calculeMeetingDate(initialDate, incrementDays);
    expect(result).toBe(expected);
  });
});
