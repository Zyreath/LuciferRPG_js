import { randomNumber } from './utils';

test('randomNumber should never return 0', () => {
    for (let i = 0; i < 1000; i++) {
        const num = randomNumber();
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(100);
    }
});

test('randomNumber should return numbers within the range 1-100', () => {
    const num = randomNumber();
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(100);
});
