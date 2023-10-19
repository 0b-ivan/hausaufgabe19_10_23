// Importieren Sie die zu testende Funktion
const { hallo } = require('hello.js'); // Passen Sie den Dateipfad an

// Schreiben Sie den Jest-Test
test('sumSmallerThanFirst should return true if the sum is smaller than the first element', () => {
    const array = [3, 5, 7];
    const result = hallo.sumSmallerThanFirst(array);
    expect(result).toBe(true);
});

test('sumSmallerThanFirst should return false if the sum is not smaller than the first element', () => {
    const array = [10, 5, 7];
    const result = hallo.sumSmallerThanFirst(array);
    expect(result).toBe(false);
});