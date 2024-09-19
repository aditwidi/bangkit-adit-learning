// JavaScript to toggle the mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const hamburgerIcon = hamburger.querySelector('i'); // Target the icon inside the hamburger

    // Add click event listener to the hamburger menu
    hamburger.addEventListener("click", function () {
        // Toggle the 'active' class for both the hamburger and navigation links
        hamburger.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            // Close menu with animation
            navLinks.classList.remove("active");
            navLinks.classList.add("inactive"); // Slide-up animation

            // Change the icon back to hamburger
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        } else {
            // Open menu with animation
            navLinks.classList.remove("inactive"); // Remove slide-up class
            navLinks.classList.add("active");

            // Change the icon to close (X)
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        }
    });
});
