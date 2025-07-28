// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animations
const animateElements = document.querySelectorAll('.fcard, .insight_card, .service_card, .qr_detail, .billing_detail, .analysis_detail');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Demo Button Functionality
document.querySelectorAll('.schedule, .demo-btn, .trial').forEach(button => {
    button.addEventListener('click', () => {
        // Enhanced demo scheduling functionality
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
        `;
        
        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a1a1a, #000);
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 500px;
                border: 1px solid rgba(255, 194, 10, 0.3);
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            ">
                <h3 style="color: #ffc20a; margin-bottom: 20px; font-size: 24px;">Schedule Your Demo</h3>
                <p style="color: #ccc; margin-bottom: 30px;">Ready to transform your restaurant? Let's schedule a personalized demo!</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: linear-gradient(135deg, #ffcc00, #ffeb9a);
                    color: #000;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Got it!</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Remove modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Enhanced Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    if (intro) {
        setTimeout(() => {
            intro.style.display = 'none';
        }, 2500);
    }
});

// Parallax Effect for Glow Elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home::before, .home::after, .features::before, .features::after');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add CSS for animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Enhanced hover effects */
    .fcard:hover,
    .insight_card:hover,
    .card_frame:hover {
        animation: cardHover 0.4s ease-out forwards;
    }
    
    @keyframes cardHover {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-5px) scale(1.02); }
        100% { transform: translateY(-10px) scale(1.02); }
    }
`;
document.head.appendChild(style);
