import { jest } from '@jest/globals';
import { parseToDate, incrementDaysOnDateAndSkipWeekends, formatDate, validateDate } from './dateUtils.mjs';

describe('parseToDate', () => {
    test('Valid date string input', () => {
        const input = '01/01/2023';
        const expected = new Date(2023, 0, 1);
        expect(parseToDate(input)).toEqual(expected);
    });

    test('Invalid date string input (missing day)', () => {
        const input = '/01/2023';
        expect(() => parseToDate(input)).toThrow('Invalid date format. Expected DD/MM/YYYY.');
    });

    test('Invalid date string input (missing month)', () => {
        const input = '01//2023';
        expect(() => parseToDate(input)).toThrow('Invalid date format. Expected DD/MM/YYYY.');
    });

    test('Invalid date string input (missing year)', () => {
        const input = '01/01/';
        expect(() => parseToDate(input)).toThrow('Invalid date format. Expected DD/MM/YYYY.');
    });
});

describe('incrementDaysOnDateAndSkipWeekends', () => {
    test('Incrementing a weekday by a few days (no weekend involved)', () => {
        const input = new Date(2024, 6, 20);
        const days = 3;
        const expected = new Date(2024, 6, 23);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });

    test('Incrementing to a Saturday, result on monday', () => {
        const input = new Date(2024, 5, 24);
        const days = 5;
        const expected = new Date(2024, 6, 1);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });

    test('Incrementing from a Saturday', () => {
        const input = new Date(2024, 4, 25);
        const days = 1;
        const expected = new Date(2024, 4, 27);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });

    test('Incrementing to a Sunday, result on a monday', () => {
        const input = new Date(2024, 4, 20);
        const days = 6;
        const expected = new Date(2024, 4, 27);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });

    test('Incrementing from a Sunday', () => {
        const input = new Date(2024, 4, 26);
        const days = 3;
        const expected = new Date(2024, 4, 29);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });

    test('Incrementing across month boundary', () => {
        const input = new Date(2024, 4, 31);
        const days = 1;
        const expected = new Date(2024, 5, 3);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });

    test('Incrementing across year boundary', () => {
        const input = new Date(2024, 11, 31);
        const days = 1;
        const expected = new Date(2025, 0, 1);
        expect(incrementDaysOnDateAndSkipWeekends(input, days)).toEqual(expected);
    });
});

describe('formatDate', () => {
    test('Valid date input', () => {
        const input = new Date(2023, 0, 1);
        const expected = '01/01/2023';
        expect(formatDate(input)).toBe(expected);
    });

    test('Date with single-digit day and month', () => {
        const input = new Date(2023, 0, 5);
        const expected = '05/01/2023';
        expect(formatDate(input)).toBe(expected);
    });
});

describe('validateDate', () => {
    test('Valid date input', () => {
        const input = new Date(2023, 0, 1);
        expect(() => validateDate(input)).not.toThrow();
    });

    test('Invalid date input', () => {
        const input = new Date('invalid');
        expect(() => validateDate(input)).toThrow('Invalid Date');
    });
});
