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

// Testimonials
document.addEventListener("DOMContentLoaded", function() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let activeIndex = 1; // Start with the second card as the center card

    // Function to update the classes for active, middle, and inactive cards
    function updateCards() {
        testimonials.forEach((card, index) => {
            card.classList.remove('active', 'middle', 'inactive');
            if (index === activeIndex) {
                card.classList.add('active'); // Center card
            } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                card.classList.add('middle'); // Adjacent cards
            } else {
                card.classList.add('inactive'); // Side cards
            }
        });
    }

    // Initial card setup
    updateCards();

    // Function to slide cards when cursor is near the edges
    let isMouseOnLeft = false;
    let isMouseOnRight = false;

    testimonialContainer.addEventListener('mousemove', (e) => {
        const containerRect = testimonialContainer.getBoundingClientRect();
        const containerWidth = containerRect.width;

        if (e.clientX < containerRect.left + 50) { // Mouse near left edge
            isMouseOnLeft = true;
            isMouseOnRight = false;
        } else if (e.clientX > containerRect.right - 50) { // Mouse near right edge
            isMouseOnLeft = false;
            isMouseOnRight = true;
        } else {
            isMouseOnLeft = false;
            isMouseOnRight = false;
        }

        if (isMouseOnLeft) {
            moveLeft();
        } else if (isMouseOnRight) {
            moveRight();
        }
    });

    // Move to the next testimonial (right)
    function moveRight() {
        activeIndex = (activeIndex + 1) % testimonials.length;
        updateCards();
    }

    // Move to the previous testimonial (left)
    function moveLeft() {
        activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
        updateCards();
    }

    // Add event listeners for manual control (if needed)
    // Optional: Trigger next/previous on click
    testimonialContainer.addEventListener('click', function() {
        moveRight();
    });

    // Auto-slide for demonstration (optional)
    setInterval(moveRight, 5000); // Auto slide every 5 seconds
});
