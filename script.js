document.addEventListener('DOMContentLoaded', () => {

    // --- 1. URL Plan Selector for contact.html ---
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');
    const client = urlParams.get('client');
    const dropdown = document.getElementById('package');
    const tallyFrame = document.getElementById('tally-form');

    // Pre-select Tally dropdown if it exists
    if (selectedPlan && dropdown) {
        dropdown.value = selectedPlan;
    }

    // Update Tally iframe + hero text with plan details
    if (selectedPlan && tallyFrame) {
        const planDetails = {
            'basic': { 
                name: 'Basic CV Refresh', 
                price: 'R150',
                yoco: 'https://pay.yoco.com/r/2YGpDO'
            },
            'pivot': { 
                name: 'The Career Pivot', 
                price: 'R200',
                yoco: 'https://pay.yoco.com/r/2Bpa6D'
            },
            'pro': { 
                name: 'The Full Pro Revamp', 
                price: 'R250',
                yoco: 'https://pay.yoco.com/r/megpRw'
            }
        };

        if (planDetails[selectedPlan]) {
            const plan = planDetails[selectedPlan];
            const heroHeading = document.getElementById('hero-heading');
            const heroSubtext = document.getElementById('hero-subtext');

            // Update hero text
            if (heroHeading) heroHeading.textContent = `Secure Your ${plan.name}`;
            if (heroSubtext) heroSubtext.textContent = `Complete the form below to proceed to secure Yoco payment for ${plan.price}.`;

            // Pass plan + PaymentURL to Tally as hidden fields
            const baseUrl = 'https://tally.so/embed/rjVM4M';
            const params = `?alignLeft=1&hideTitle=1&transparentBackground=1&plan=${selectedPlan}&PaymentURL=${encodeURIComponent(plan.yoco)}`;
            tallyFrame.src = baseUrl + params;
        }
    }

    // --- 2. Agency redirect on contact.html ---
    if (client === 'agency' && window.location.pathname.includes('contact.html')) {
        window.location.replace('inquiry.html?client=agency');
    }

    // --- 3. Dynamic text swaps for inquiry.html ---
    const pageHeading = document.getElementById('page-heading');
    const heroHeading = document.getElementById('hero-heading');
    const heroSubtext = document.getElementById('hero-subtext');

    if (client === 'agency' && pageHeading) {
        document.title = 'Agency Inquiry | Career Craft';
        pageHeading.textContent = 'Agency Inquiry';
        if (heroHeading) heroHeading.textContent = 'Recruitment Agency Support';
        if (heroSubtext) heroSubtext.textContent = 'Tell us your monthly CV volume, template needs, and which services you need. We’ll send rates within 24 hours.';
    }

    // --- 4. Dynamic text swaps for thank-you.html ---
    const thankYouHeading = document.getElementById('thank-you-heading');
    const thankYouMessage = document.getElementById('thank-you-message');
    const secondaryCta = document.getElementById('secondary-cta');

    if (thankYouHeading) {
        if (client === 'agency') {
            thankYouHeading.textContent = 'Request Received';
            thankYouMessage.innerHTML = 'Thank you for your agency inquiry. We’ll email your custom rates and turnaround times within 24 hours. Check your inbox and spam folder.<br><br>We look forward to helping you place candidates faster.';
            if (secondaryCta) {
                secondaryCta.textContent = 'View Agency Services';
                secondaryCta.href = 'agency.html';
            }
        } else if (selectedPlan === 'basic') {
            thankYouHeading.textContent = 'Payment Received';
            thankYouMessage.innerHTML = 'Your Basic CV Refresh order is confirmed. Check your email for next steps and our questionnaire.<br><br>We’ll start crafting your CV within 24 hours of receiving your completed form.';
        } else if (selectedPlan === 'pivot') {
            thankYouHeading.textContent = 'Payment Received';
            thankYouMessage.innerHTML = 'Your Career Pivot order is confirmed. Check your email for next steps and our deep-dive questionnaire.<br><br>We’ll start crafting your CV within 24 hours of receiving your completed form.';
        } else if (selectedPlan === 'pro') {
            thankYouHeading.textContent = 'Payment Received';
            thankYouMessage.innerHTML = 'Your Full Pro Revamp order is confirmed. Check your email for next steps and our deep-dive questionnaire.<br><br>We’ll start your CV, cover letter & LinkedIn revamp within 24 hours of receiving your completed form.';
        }
    }

    // --- 5. Scroll Animation for Process Steps ---
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

    const steps = document.querySelectorAll('.process-stepper.step,.about-step');
    steps.forEach(step => {
        observer.observe(step);
    });
});