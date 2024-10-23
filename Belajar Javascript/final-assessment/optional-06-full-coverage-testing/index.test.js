// Import File yang dibutuhkan
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('uji fungsi sum dengan berbagai skenario', () => {
    // Valid cases
    assert.strictEqual(sum(1, 2), 3, '1 + 2 harus sama dengan 3');
    assert.strictEqual(sum(5, 7), 12, '5 + 7 harus sama dengan 12');
    assert.strictEqual(sum(0, 0), 0, '0 + 0 harus sama dengan 0');
    assert.strictEqual(sum(10, 15), 25, '10 + 15 harus sama dengan 25');

    // Edge Cases
    assert.strictEqual(sum(0, 5), 5, '0 + 5 harus sama dengan 5');
    assert.strictEqual(sum(5, 0), 5, '5 + 0 harus sama dengan 5');

    // Invalid Cases
    assert.strictEqual(sum('1', 2), 0, 'sum dengan string harus mengembalikan 0');
    assert.strictEqual(sum(1, '2'), 0, 'sum dengan string harus mengembalikan 0');
    assert.strictEqual(sum('a', 'b'), 0, 'sum dengan string non-numerik harus mengembalikan 0');

    // Angka Negatif
    assert.strictEqual(sum(-1, 2), 0, 'sum dengan angka negatif harus mengembalikan 0');
    assert.strictEqual(sum(1, -2), 0, 'sum dengan angka negatif harus mengembalikan 0');
    assert.strictEqual(sum(-1, -2), 0, 'sum dengan dua angka negatif harus mengembalikan 0');
});