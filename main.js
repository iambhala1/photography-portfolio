// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImages = [];
let currentIndex = 0;

// Initialize galleries
function initializeGallery() {
    const peopleGallery = document.getElementById('people-gallery');
    const streetGallery = document.getElementById('street-gallery');
    
    // Get all images from galleries
    const peopleImages = Array.from(peopleGallery.querySelectorAll('.gallery-image'));
    const streetImages = Array.from(streetGallery.querySelectorAll('.gallery-image'));
    
    // Add click event listeners
    peopleImages.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(peopleImages, index));
    });
    
    streetImages.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(streetImages, index));
    });
}

function openLightbox(images, index) {
    currentImages = images;
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
}

function updateLightboxImage() {
    if (currentImages.length === 0) return;
    
    const img = currentImages[currentIndex];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Gallery image';
    lightboxCaption.textContent = img.alt || '';
    
    // Show/hide navigation buttons
    lightboxPrev.style.display = currentImages.length > 1 ? 'flex' : 'none';
    lightboxNext.style.display = currentImages.length > 1 ? 'flex' : 'none';
}

function showNextImage() {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
}

function showPrevImage() {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPrevImage);

// Close lightbox when clicking on backdrop
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
    }
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize galleries when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGallery);

// Lazy loading images (native browser lazy loading is already enabled via loading="lazy")
// Additional optimization: Intersection Observer for better performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

