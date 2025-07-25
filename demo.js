// Updated form handling for Formspree
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.demo-form');
    
    // Form submission with Formspree
    form.addEventListener('submit', function(e) {
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '⏳ Scheduling...';
        submitBtn.disabled = true;
        
        // Let Formspree handle the submission
        // Form will submit normally, so we don't prevent default
        
        // Re-enable button after a delay (in case of errors)
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
    
    // Rest of your existing JavaScript code stays the same...
    const playButton = document.querySelector('.play-button');
    const watchBtn = document.querySelector('.watch-btn');
    
    function playVideo() {
        alert('Demo video would play here. This is a prototype.');
    }
    
    if (playButton) {
        playButton.addEventListener('click', playVideo);
    }
    
    if (watchBtn) {
        watchBtn.addEventListener('click', playVideo);
    }
    
    // Smooth scrolling and header effects remain unchanged...
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 15, 15, 0.98)';
        } else {
            header.style.background = 'rgba(15, 15, 15, 0.95)';
        }
    });
});

// Add this to your existing demo.js file
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const cursor = document.querySelector('.cursor');
    
    const phrases = [
        'SpoonFeed Live',
        'Better Management',
        'Faster Table Turnout',
        'Happier Customers',
        'Better Staff Management'
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100; // Typing speed in milliseconds
    let deleteSpeed = 50; // Deleting speed in milliseconds
    let pauseTime = 2000; // Pause time between phrases
    
    function typeWriter() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            // Deleting characters
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(typeWriter, 500); // Brief pause before typing next phrase
                return;
            }
            
            setTimeout(typeWriter, deleteSpeed);
        } else {
            // Typing characters
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentPhrase.length) {
                // Finished typing current phrase
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, pauseTime);
                return;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start the typewriter effect
    setTimeout(() => {
        typeWriter();
    }, 1000); // Wait 1 second before starting
    
    // Your existing code continues here...
    const form = document.querySelector('.demo-form');
    // ... rest of your existing JavaScript
});
