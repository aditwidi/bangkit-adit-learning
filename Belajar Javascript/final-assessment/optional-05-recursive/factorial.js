function factorial(n) {
    // Mengembalikan 1 jika n adalah 0 atau 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Memanggil fungsi factorial secara rekursif
    return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
