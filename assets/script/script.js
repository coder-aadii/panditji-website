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
