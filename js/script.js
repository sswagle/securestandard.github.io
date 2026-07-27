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
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });


    sections.forEach(section => {
        observer.observe(section);
    });


    // Simple contact button message
    const contactButton = document.querySelector(".contact-btn");

    if (contactButton) {

        contactButton.addEventListener("click", function () {

            alert(
                "Thank you for contacting SecureStandard Advisory. We will get back to you soon."
            );

        });

    }

});
