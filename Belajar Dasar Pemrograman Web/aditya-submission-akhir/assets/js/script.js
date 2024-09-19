// JavaScript untuk menampilkan dan menyembunyikan menu navigasi di versi mobile
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const hamburgerIcon = hamburger.querySelector('i'); 

    // Fungsi untuk mengubah status menu
    function toggleMenu() {
        hamburger.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            closeMenu(); // Jika aktif, tutup menu
        } else {
            openMenu(); // Jika tidak aktif, buka menu
        }
    }

    // Fungsi untuk membuka menu navigasi
    function openMenu() {
        navLinks.classList.remove("inactive");
        navLinks.classList.add("active");
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times'); // Ubah ikon ke 'X'
    }

    // Fungsi untuk menutup menu navigasi
    function closeMenu() {
        navLinks.classList.remove("active");
        navLinks.classList.add("inactive");
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars'); // Ubah ikon ke ikon hamburger
    }

    // Tambahkan event listener ke tombol hamburger
    hamburger.addEventListener("click", toggleMenu);
});

// Fungsi carousel secara otomatis
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel-img'); // Ambil semua gambar di dalam carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator'); // Ambil semua indikator carousel
    let currentIndex = 0;
    let carouselInterval;

    // Fungsi untuk memperbarui indikator aktif
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex); // mengubah status indikator yang aktif
        });
    }

    // Fungsi untuk slide gambar
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Pindahkan ke gambar berikutnya
        const translateValue = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${translateValue}%)`;
        updateIndicators(); // Perbarui indikator yang aktif
    }

    // Fungsi untuk memulai carousel
    function startCarousel() {
        carouselInterval = setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik
    }

    // Inisialisasi carousel
    startCarousel();
});
