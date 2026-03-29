



document.addEventListener('DOMContentLoaded', () => {

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.offscreen-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-menu');   


hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

overlay.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

closeBtn.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    




    // --- URL Plan Selector ---
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');
    const dropdown = document.getElementById('package');
    if (selectedPlan && dropdown) {
        dropdown.value = selectedPlan;
    }

    // --- Scroll Animation for Process Steps ---
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Stop observing once the animation has played
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const steps = document.querySelectorAll('.process-stepper .step .about-step');
steps.forEach(step => {
    observer.observe(step);
});
});

const form = document.querySelector('.contact-form');
const btn = document.getElementById('submit-btn');

btn.addEventListener('click', async (e) => {
    const formData = new FormData(form);
    
    const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        // This FORCES the browser to go to your thank you page
        window.location.href = "thank-you.html";
    } else {
        alert("Oops! There was a problem submitting your form");
    }
});