const analyzeNumbers = require('./index');

test('Zwraca poprawne wartości dla [1, 2, 3, 4, 5]', () => {
    expect(analyzeNumbers([1, 2, 3, 4, 5])).toEqual({
        sum: 15,
        evenCount: 2,
        oddCount: 3,
        min: 1,
        max: 5
    });
});

test('Obsługuje liczby ujemne i zero', () => {
    expect(analyzeNumbers([-10, 0, 10, 20])).toEqual({
        sum: 20,
        evenCount: 3,
        oddCount: 1,
        min: -10,
        max: 20
    });
});

test('Zwraca null dla pustej tablicy', () => {
    expect(analyzeNumbers([])).toBeNull();
});

test('Obsługuje tablicę z jednym elementem', () => {
    expect(analyzeNumbers([7])).toEqual({
        sum: 7,
        evenCount: 0,
        oddCount: 1,
        min: 7,
        max: 7
    });
});

