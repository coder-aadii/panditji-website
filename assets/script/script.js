// Add scroll event listener
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav');

    // Check if the page is scrolled more than 50px from the top
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

//scroll to functions
function scrollToServices() {
    const section = document.getElementById('services');
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        console.error("Section 'services' not found.");
    }
}

function scrollToGallery() {
    const section = document.getElementById('gallery');
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        console.error("Section 'gallery' not found.");
    }
}

function scrollToTestimonials() {
    const section = document.getElementById('testimonials');
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        console.error("Section 'testimonials' not found.");
    }
}

function scrollToContact() {
    const section = document.getElementById('contact');
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        console.error("Section 'contact' not found.");
    }
}



