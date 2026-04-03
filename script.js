document.addEventListener('DOMContentLoaded', () => {

    // --- URL Plan Selector ---
    // This allows you to pre-select a package if they clicked from the pricing page
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');
    const dropdown = document.getElementById('package');
    if (selectedPlan && dropdown) {
        dropdown.value = selectedPlan;
    }

    // --- Scroll Animation for Process Steps ---
    const observerOptions = {
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const steps = document.querySelectorAll('.process-stepper .step .about-step');
    steps.forEach(step => {
        observer.observe(step);
    });
});