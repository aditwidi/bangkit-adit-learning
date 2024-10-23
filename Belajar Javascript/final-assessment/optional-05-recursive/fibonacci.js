function fibonacci(n) {
    // Fungsi rekursif untuk menghitung Fibonacci
    if (n === 0) {
        return [0]; // Kasus dasar: jika n = 0, kembalikan array dengan 0
    } else if (n === 1) {
        return [0, 1]; // Kasus dasar: jika n = 1, kembalikan array [0, 1]
    } else {
        const prevFib = fibonacci(n - 1); // Panggil fungsi rekursif untuk n-1
        // Tambahkan nilai Fibonacci berikutnya
        const nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
        return [...prevFib, nextFib]; // Gabungkan array sebelumnya dengan nilai berikutnya
    }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
