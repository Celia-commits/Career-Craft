



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

// This starts at the bottom of the file (formerly line 117)
const contactForm = document.getElementById('form'); // Matches the  contact.html ID
const submitBtn = document.getElementById('submit-btn');

if (submitBtn && contactForm) {
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault(); 
        
        // 1. Visual Feedback
        submitBtn.innerHTML = "Please wait...";
        submitBtn.disabled = true;

        // 2. Prepare Data
        const formData = new FormData(contactForm);
        
        try {
            // sends data to formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            // 4. Handle Redirect
            if (response.ok) {
                // This is the specific fix for your redirect issue
                window.location.href = "thank-you.html";
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Submission failed. Please try again.");
                submitBtn.innerHTML = "Send Message";
                submitBtn.disabled = false;
            }
        } catch (error) {
            console.error("Form Error:", error);
            alert("Network error. Please check your connection and try again.");
            submitBtn.innerHTML = "Send Message";
            submitBtn.disabled = false;
        }
    });
}