document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    // Check if the registration form exists on the page
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from submitting normally
            
            if (validateForm()) {
                // If validation passes:
                
                // 1. Reset and clean up the form
                form.classList.remove('was-validated');
                form.reset();

                // 2. Show the success message using the Bootstrap Modal [cite: 56]
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            }
        });
    }

    function validateForm() {
        let isValid = true;
        const form = document.getElementById('registrationForm');
        
        // --- 1. Basic Required Field Check ---
        Array.from(form.elements).forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === "") {
                input.classList.add('is-invalid'); // Add invalid class for visual feedback
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        // --- 2. Email Format Check (Example of complex validation [cite: 81]) ---
        const emailInput = document.getElementById('email');
        // Simple regex pattern for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (emailInput && !emailRegex.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else if (emailInput) {
            emailInput.classList.remove('is-invalid');
        }

        // Apply 'was-validated' class for Bootstrap visual feedback
        if (!isValid) {
             form.classList.add('was-validated');
        } else {
             form.classList.remove('was-validated');
        }

        return isValid;
    }
});