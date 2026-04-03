



document.addEventListener('DOMContentLoaded', () => {


    




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

document.addEventListener('DOMContentLoaded', () => {

    // --- URL Plan Selector ---
    // (Note: This is still here in case you want to pass data to Tally later, 
    // though Tally usually handles this via "Hidden Fields")
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