// Import modul yang diperlukan
import { test } from 'node:test';
import assert from 'node:assert';

// Import fungsi sum dari index.js
import { sum } from './index.js';

// Test Cases
test('penjumlahan 1 + 2 seharusnya menghasilkan 3', () => {
    assert.strictEqual(sum(1, 2), 3);
});

test('penjumlahan -1 + -1 seharusnya menghasilkan -2', () => {
    assert.strictEqual(sum(-1, -1), -2);
});

test('penjumlahan 0 + 0 seharusnya menghasilkan 0', () => {
    assert.strictEqual(sum(0, 0), 0);
});
