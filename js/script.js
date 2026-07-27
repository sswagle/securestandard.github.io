// SecureStandard Advisory - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Update footer year automatically
    const year = new Date().getFullYear();
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = year;
    }


    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // Fade-in animation when sections appear
