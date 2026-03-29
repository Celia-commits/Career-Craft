



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


// Check if the button actually exists before adding the listener
if (btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default form submission

        const form = document.getElementById('form');
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Indicate that the form is being sent
        btn.innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // Redirect to thank-you page on success
                window.location.href = "thank-you.html";
            } else {
                console.log(response);
                alert(json.message);
            }
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong!");
        })
        .then(function() {
            form.reset();
        });
    });
}