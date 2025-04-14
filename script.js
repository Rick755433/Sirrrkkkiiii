// Background Music Control
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isMusicPlaying = false;

    // Function to play music
    function playMusic() {
        bgMusic.play()
            .then(() => {
                isMusicPlaying = true;
                musicToggle.classList.add('playing');
            })
            .catch(error => {
                console.log("Autoplay prevented:", error);
                // Show a message to the user that they need to interact to play music
                alert("Click the music button to play background music!");
            });
    }

    // Function to toggle music
    function toggleMusic() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play();
            musicToggle.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    }

    // Add click event to the music toggle button
    musicToggle.addEventListener('click', toggleMusic);

    // Try to autoplay music when the page loads
    // Note: Most modern browsers block autoplay until user interaction
    playMusic();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with opacity 0
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
}); 